# Onano Studio for Claude Code and Codex

**Edit video by asking.** This plugin lets Claude Code or Codex edit in
[Onano Studio](https://onano.app), a free desktop video editor for Windows, on a real timeline you
can see and change by hand. A folder of raw clips becomes a finished 45-second video, a long
recording becomes shorts, and motion graphics land on your words and on the beat.

![A motion reel: kinetic type, a chart that counts up, a 3D knot and a waving character](onano/assets/showreel.gif)

*Made in Onano Studio with Claude Opus 5.5, by asking: kinetic type, a chart that counts up, real 3D and a character, each one a motion graphic on Studio's timeline that can still be changed by hand.*

## What one sentence gets you

| You ask | You get, on the timeline |
|---|---|
| "Make a 45-second recap for Instagram from these clips." | The best moments from every clip, in an order that tells it, 9:16, captioned |
| "Turn my latest recording into three shorts with captions." | Three sequences reframed on the speaker, with titles and descriptions written |
| "Cut the B-roll to the beat of this song." | Every cut on a beat of the music |
| "Add a graphic of the three steps when I name them." | An animated graphic timed to the words, and to the music's beats when a song plays |
| "Take out the pauses and the ums." | A tighter cut you can check word by word |

It can also:

- caption from the transcript, in your look
- write animated motion graphics (titles, stats, lists, lower thirds, 3D) for the moment
- add sound effects, even out voices
- export, and open Publish for YouTube, TikTok and Instagram (you press the button)

Transcription, picture analysis and rendering run on your computer. Your footage is never
uploaded, and the thinking runs on the Claude Code or Codex plan you already have.

**Next to Remotion and HyperFrames:** those render a video from code. Onano does that too (its
motion graphics are HTML, rendered frame by frame, with real 3D and people cut out of footage),
and it also edits the footage you already have: it cuts, captions and mixes on a timeline, and
everything the agent makes can still be changed by hand.

## Setup

1. Install Onano Studio (free): https://onano.app/download. Open it once and sign in. On the Free
   plan your agent gets 10 timeline edits to try it (looking at the timeline is always free); a
   paid plan keeps it editing, starting with Creator Lite, the plan made for your own agent.
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

## What leaves your computer

Transcription, picture analysis and rendering run on your PC, and the plugin itself sends nothing
anywhere. Some features you choose to use go through Onano's server at onano.app, on your Onano
account:

- **Translate, voiceover, titles and descriptions:** the text involved (a transcript, a script)
  is sent to OpenAI through onano.app to produce the result. Your video is not sent.
- **Publish:** the video you export is uploaded to YouTube, TikTok or Instagram when you press
  publish, on the accounts you connected.

See the [privacy policy](https://onano.app/privacy) for how long Onano keeps what it receives.

## Requirements

Windows 10 or 11 with Onano Studio installed, and for Claude Code, Node.js (https://nodejs.org). Studio is not available for macOS yet.
