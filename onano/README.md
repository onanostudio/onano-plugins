# Onano Studio for Claude Code and Codex

Edit video by asking. This plugin connects Claude Code or Codex to
[Onano Studio](https://onano.app), a free desktop video editor for Windows, so your agent can
work on a real timeline you can see and change by hand:

- turn a long recording into shorts, reframed for TikTok, Reels and Shorts
- take out pauses and filler words
- caption from the transcript, in your look
- write animated motion graphics (titles, stats, lists, lower thirds) for the moment
- add sound effects, cut music to the beat, even out voices
- export, and open Publish for YouTube, TikTok and Instagram (you press the button)

Transcription, picture analysis and rendering run on your computer. Your footage is never
uploaded, and the thinking runs on the Claude Code or Codex plan you already have.

## Setup

1. Install Onano Studio (free): https://onano.app/download. Open it once.
2. Install the plugin.

   **Claude Code**

   ```
   /plugin marketplace add onanostudio/onano-plugins
   /plugin install onano-studio@onano
   ```

   **Codex**

   ```
   codex plugin marketplace add onanostudio/onano-plugins
   codex plugin add onano-studio@onano
   ```

   or, in the Codex app, find **Onano Studio** under Plugins.
3. Restart the agent, open Studio's window, and ask: *"Turn my latest recording into three
   shorts with captions."*

## How it works

The plugin starts `OnanoMcp.exe`, the MCP server that ships inside Onano Studio, through a small
launcher (`scripts/onano-mcp.js` for Claude Code, `scripts/onano-mcp.cmd` for Codex) that finds where Studio is installed. If Studio is not installed,
the launcher says so and the agent points you to the download. Set `ONANO_MCP` to the full path of
`OnanoMcp.exe` if you installed Studio somewhere unusual (Codex only).

Two skills come with it: `get-started` checks the connection on first use, and
`onano-video-editing` teaches the agent how to edit in Studio: read the timeline before
changing it, look at rendered frames before calling something done, and ask before anything that
spends credits or publishes.

Already connected Onano from inside Studio (Settings → Connect Claude Code)? Then you do not need
this plugin as well; either one is enough.

## Requirements

Windows 10 or 11 with Onano Studio installed, and for Claude Code, Node.js (https://nodejs.org). Studio is not available for macOS yet.
