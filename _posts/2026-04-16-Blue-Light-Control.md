---
layout: post
title: "Night Light on Omarchy... and Why It Actually Matters"
date: 2026-04-16
categories: [Systems, Linux, Lifestyle]
tags: [Hyprland, Omarchy, Sleep, Setup]
---------------------------------------

## The Problem

If nothing in your day has a hard stop… your night doesn’t either.

- No closing time.
- No external constraint.
- Just “one more thing”.

That drifts, not dramatically… just enough to notice over time.

---

## The Idea

Night light isn’t a fix.
It’s a lever.

Less blue light → slightly less stimulation → slightly easier to stop.

That’s it, not magic… just friction in the right direction.

---

## The Setup (Omarchy / Hyprland)

This was more awkward than expected.

Tried the obvious:
* `wlsunset` in `hyprland.conf`
* didn’t start reliably
* `exec-once` only runs on session start (not reload)

So it looked broken… when it just wasn’t being triggered.

Then solar mode decided Ireland was experiencing **midnight sun**…
so it stayed in full daylight.
Useful.

---

## The Actual Fix

Skip Hyprland config.
Use a systemd user service.

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

No guessing. No timing issues.

---

## What It Actually Does

At 23:00:
- the screen shifts warm
- contrast drops slightly
- everything feels a bit less “pulling”

It’s subtle… but noticeable.

---

## What It Doesn’t Do

It doesn’t:
- enforce a bedtime
- remove distractions
- fix behaviour

If you want to ignore it… you can.

---

## Why It Still Matters

It changes the environment.
And environment is easier to control than behaviour.

Instead of:
> “I should stop”

it becomes:
> “this is a worse place to keep going”

Small difference… but it compounds.

---

## Where I Landed

23:00 → warm screen
later → wind down
eventually → bed

The exact timing matters less than having a **consistent trigger**.

---

## Final Thought

This isn’t a solution.
It’s one piece of a system.

But systems beat willpower… especially at the end of the day.
Not a finished product... just documenting the Process.
