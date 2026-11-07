#!/usr/bin/env node
// Starts Onano Studio's MCP server for Claude Code.
//
// The server ships inside Onano Studio (OnanoMcp.exe, a small bridge that
// starts the engine), so this only finds where Studio was installed and hands
// stdin and stdout straight over. Nothing may be printed to stdout here -- it
// is the protocol channel. Errors go to stderr.
'use strict';
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

function fail(lines) {
  process.stderr.write(lines.join('\n') + '\n');
  process.exit(1);
}

if (process.platform !== 'win32') {
  fail(['Onano Studio runs on Windows only for now, so its editing tools are not available here.']);
}

// Studio installs per user under AppData\Local, or for everyone under Program Files.
const home = os.homedir();
const candidates = [
  path.join(home, 'AppData', 'Local', 'Onano Studio', 'OnanoMcp.exe'),
  path.join(home, 'AppData', 'Local', 'Programs', 'Onano Studio', 'OnanoMcp.exe'),
  path.join('C:', 'Program Files', 'Onano Studio', 'OnanoMcp.exe'),
];

const exe = candidates.find((p) => {
  try { return fs.statSync(p).isFile(); } catch { return false; }
});
if (!exe) {
  fail([
    'Onano Studio is not installed on this computer, so its editing tools are not available.',
    'Download it free from https://onano.app/download , open it once, then restart Claude Code.',
  ]);
}

const child = spawn(exe, process.argv.slice(2), { stdio: 'inherit', windowsHide: true });
child.on('error', (err) => fail(['Could not start Onano Studio: ' + err.message]));
child.on('exit', (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
for (const sig of ['SIGINT', 'SIGTERM', 'SIGBREAK']) {
  process.on(sig, () => { try { child.kill(); } catch { /* already gone */ } });
}
