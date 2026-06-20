#!/usr/bin/env node
// Push code to GitHub via REST API (Git Database API)
// Usage: GH_TOKEN=xxx node gh-api-push.js <owner> <repo> <branch> <commit-message>

const fs = require('fs');
const path = require('path');

const [,, owner, repo, branch, commitMsg] = process.argv;
const token = process.env.GH_TOKEN;
const api = 'https://api.github.com';

const headers = {
  'Authorization': `token ${token}`,
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json',
  'User-Agent': 'wholesale-yoga-pusher',
};

async function apiCall(method, endpoint, body = null) {
  const url = `${api}${endpoint}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${endpoint} failed: ${res.status} ${text}`);
  }
  return res.json();
}

async function getFiles(dir, base = '') {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist', '.vscode'].includes(entry.name)) continue;
      results = results.concat(await getFiles(fullPath, relPath));
    } else {
      const content = fs.readFileSync(fullPath);
      results.push({ path: relPath, content: content.toString('base64'), mode: '100644', type: 'blob' });
    }
  }
  return results;
}

async function main() {
  console.log('Collecting files...');
  const files = await getFiles('.');
  console.log(`Found ${files.length} files`);

  // Create blobs
  console.log('Creating blobs...');
  const treeItems = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const blob = await apiCall('POST', `/repos/${owner}/${repo}/git/blobs`, {
      content: f.content,
      encoding: 'base64',
    });
    treeItems.push({ path: f.path, mode: f.mode, type: f.type, sha: blob.sha });
    if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${files.length} blobs created`);
  }
  console.log(`All ${files.length} blobs created`);

  // Create tree
  console.log('Creating tree...');
  const tree = await apiCall('POST', `/repos/${owner}/${repo}/git/trees`, { tree: treeItems });
  console.log(`Tree: ${tree.sha}`);

  // Create commit (no parent since empty repo)
  console.log('Creating commit...');
  const commit = await apiCall('POST', `/repos/${owner}/${repo}/git/commits`, {
    message: commitMsg || 'Initial commit',
    tree: tree.sha,
  });
  console.log(`Commit: ${commit.sha}`);

  // Create reference
  console.log('Creating branch reference...');
  try {
    await apiCall('POST', `/repos/${owner}/${repo}/git/refs`, {
      ref: `refs/heads/${branch}`,
      sha: commit.sha,
    });
  } catch (e) {
    // Branch might exist, try update
    await apiCall('PATCH', `/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
      sha: commit.sha,
      force: true,
    });
  }
  console.log(`Done! Pushed ${files.length} files to ${branch}`);
}

main().catch(e => { console.error(e); process.exit(1); });
