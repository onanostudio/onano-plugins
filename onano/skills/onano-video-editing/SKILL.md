---
name: onano-video-editing
description: Edit videos in Onano Studio, the person's desktop video editor, through its onano tools. Use whenever they want a video edited, cut, trimmed, captioned, turned into shorts or clips, given a title card or motion graphic, music, sound effects or a voiceover, reframed for TikTok or Reels, exported, or published to YouTube, TikTok or Instagram. Also use when they mention Onano or Studio, or point at a video file or footage folder on this computer and want something made from it.
---

# Editing video in Onano Studio

Onano Studio is a video editor on this computer. Its tools (named `onano_…`) edit the project
open in the Studio window: every change lands on a real timeline the person can see, play and
change by hand. The footage never leaves the machine.

## Before anything

1. **No onano tools at all?** Studio is not installed, or the agent was started before it was.
   Say so plainly and send them to https://onano.app/download (free, Windows). After installing
   and opening it once, they restart Claude Code or Codex.
2. **Only file tools work** (`onano_transcribe`, `onano_probe`, `onano_cut`…) **and a timeline
   tool says no Studio window is listening?** Ask them to open Onano Studio. The timeline lives
   in the window.
3. Start every edit by reading what is there: `onano_describe_timeline` (lanes, clips, times),
   and `onano_project` / `onano_list_sequences` for the bin and the cuts. Never guess times.

## How to work

- **Find, then cut.** Read the transcript (`onano_read_transcript`) to find where something is
  said, then cut against those times with `onano_add_range`, `onano_remove_ranges`,
  `onano_trim_clip`. Take out dead air with `onano_remove_ranges` and the ums with
  `onano_remove_fillers`.
- **Look at your work.** `onano_look_at_frame` renders the timeline at a moment, exactly as it will
  export. Check a few frames after anything visual (framing, captions, a graphic) before saying it
  is done. `onano_look_at_footage` shows the footage itself before you choose what to use.
- **Captions:** `onano_add_captions`, then `onano_set_caption_style` for the look. Fix a misheard word
  with `onano_edit_caption`.
- **Vertical shorts from a wide video:** `onano_set_format` to 9:16, then `onano_auto_frame` to keep
  the speaker in frame.
- **Graphics:** `onano_design_motion_graphic` writes an animated graphic for the moment (a title, a
  stat, a list, a lower third). It renders in the background; `onano_wait_for_background` waits for
  it. For simple words on screen, `onano_add_text`. Designed templates: `onano_list_motion_templates`
  and `onano_fill_motion_template`.
- **Sound:** `onano_list_sounds` and `onano_add_sound` for effects (keep them about 0.25 under
  speech), `onano_cut_to_beats` for a montage on a song, `onano_level_voices` to even out speakers.
- **Footage they already have:** `onano_find_footage` searches the folders they let the AI use;
  `onano_read_folder` and `onano_import_media` bring files into the bin.
- **Mistakes:** `onano_undo` is the same as Ctrl+Z.

## Ask first

- Anything that spends credits: `onano_add_voiceover`, `onano_translate_captions`,
  `onano_generate_media`, and a motion graphic made on Onano's credits. Say what you are about to
  do and wait for a yes, unless they plainly asked for it.
- **Publishing never happens without them.** `onano_open_publish` only opens the Publish panel;
  they press the button. `onano_export_sequence` takes minutes on a long cut, so export when they
  want the file.

## Tone

They may not be editors. Say what you changed in plain words and at which second, and offer the
next step ("Want captions on it?") rather than a list of options.
