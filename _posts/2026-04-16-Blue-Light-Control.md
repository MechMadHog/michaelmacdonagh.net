---
layout: post
title: "Configuring Night Light on Omarchy… and Why It Matters"
description: "Setting up night light on Omarchy using wlsunset and systemd… and why it functions better as an environmental nudge than a complete solution."
categories: [Systems, Linux, Lifestyle]
tags: [Hyprland, Omarchy, Sleep, Setup]
image: /assets/images/blog/BlueLight.png
---

# The Problem

When nothing in your day has a hard stop… 
Your night won’t either. There’s no cutoff point for any activity.
On the internet there is no “we’re done now”.
Anything can start whenever I click the next thing.

Just:
> one more thing

And that turns into two… then five… then suddenly it’s 4am.
No dramatic altering plan, just a slow drift into a messed up sleep cycle.

---

## The Idea

Night light isn’t a simple fix, It’s just a nudge in the right direction.

Less blue light → less stimulation → slightly easier to stop.

That’s it, not some biohack… just making the screen a bit less addictive.

---

## The Setup (Omarchy / Hyprland)

This was more annoying than it should have been.
Tried the obvious:
- `wlsunset` in `hyprland.conf`
- didn’t work properly
- `exec-once` only runs at startup, not reload

So it looked broken… it just wasn’t being triggered.
Then solar mode decided Ireland was basically the Arctic circle…
so it never switched at all.

---

## The Fix

I stopped trying to be clever with Hyprland and used a systemd user service instead.

```ini
# ~/.config/systemd/user/wlsunset.service

[Unit]
Description=Night light with wlsunset
After=graphical-session.target

[Service]
Type=simple
ExecStart=/usr/bin/wlsunset -t 2500 -T 6500 -S 08:00 -s 23:00
Restart=on-failure
RestartSec=3

[Install]
WantedBy=default.target
```

Then:

```bash
systemctl --user daemon-reload
systemctl --user enable --now wlsunset.service
```
Finished.

---

## What It Actually Does

At 23:00:
- screen goes warm
- contrast drops a bit
- everything feels… less engaging

That’s it.
Subtle, but noticeable.

---

## What It Doesn’t Do

It doesn’t:
- force you to go to bed
- remove distractions
- fix your behaviour

You can ignore it completely if you want.

---

## Why It Still Works

It changes the environment, making me more aware that even though its late, I'm still awake.
Changing my environment is easier to control than my behaviour.

Instead of:
> Should I stop?

it becomes:
> This isn’t as appealing to keep going

That matters more than it sounds.

---

## Where I Landed

23:00 → warm screen
a bit later → wind down
eventually → bed

The exact timing doesn’t matter.
The trigger does.

---

## Final Thought

This isn’t a solution, It’s a small lever.
But those are the things that actually work.
Not a the whole solution... just a step in the Process.
