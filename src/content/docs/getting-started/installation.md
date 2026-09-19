---
title: Installation
description: Install NodeCraft from Fab and enable it in your project.
---

## Requirements

- **Unreal Engine 5.6, 5.7 or 5.8**
- **Windows**
- Nothing else: no extra plugins, and no C++ project needed.

NodeCraft is an **editor-only** plugin. It only affects the Unreal Editor and adds nothing to your packaged game.

## 1. Install the plugin from Fab

1. Open the **Epic Games Launcher** and go to your **Fab library**.
2. Find **NodeCraft** and install it to the engine version you use (5.6, 5.7 or 5.8).

Fab installs NodeCraft into the engine itself, so it's available to every project on that engine version. You still switch it on per project, in the next step.

## 2. Enable it in your project

1. Open your project in the Unreal Editor.
2. Go to **Edit → Plugins**.
3. Search for **NodeCraft** and tick **Enabled**.
4. Click **Restart Now** when the editor asks.

<!-- Screenshot: the Plugins window with NodeCraft found and enabled. -->

## 3. Check it's working

Open any Blueprint. The node graph now uses NodeCraft's **Command** theme, and the Blueprint editor's toolbar has a new **NodeCraft** dropdown showing the active theme's name.

That's it. Next, see the [Quick start](/getting-started/quick-start/) to switch themes and wire styles.

## Removing NodeCraft

To turn NodeCraft off for a project, go back to **Edit → Plugins**, untick **NodeCraft** and restart. Your graphs return to Unreal's standard look. NodeCraft never changes your Blueprints or materials, so nothing needs cleaning up.

To keep the plugin but see Unreal's standard look, choose the **UE_Default** theme instead (see [Themes](/guides/themes/)).
