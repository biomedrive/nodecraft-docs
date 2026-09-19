---
title: Project settings
description: NodeCraft's settings under Edit → Project Settings → Plugins → NodeCraft.
---

Open **Edit → Project Settings** and scroll to **Plugins → NodeCraft**.

<!-- Screenshot: the NodeCraft section of Project Settings. -->

## Theme

| Setting | What it does |
|---|---|
| **Active Theme (Kismet)** | The Blueprint theme in use. Same as picking it from the Blueprint toolbar dropdown, and remembered for this project the same way |
| **Active Theme (Material)** | The Material editor theme in use. Same as the Material toolbar dropdown |
| **Node Theme Asset (Kismet)** | The theme asset used for Blueprint graphs. Defaults to NodeCraft's own `DA_KismetNodeTheme` |
| **Node Theme Asset (Material)** | The theme asset used for Material graphs. Defaults to NodeCraft's own `DA_MaterialNodeTheme` |

Changing either **Node Theme Asset** needs an **editor restart** to take effect. See [Customizing themes](/guides/customizing-themes/#recommended-edit-a-copy-not-the-original).

## Graph Panel

| Setting | What it does |
|---|---|
| **Panel Background Material** | A fallback backdrop, used only by themes that don't set their own. Every built-in theme sets its own, so you can leave this empty |

## Fluid Background

| Setting | What it does |
|---|---|
| **Fluid Sim Material** | The material that runs the Neon theme's fluid simulation. Leave it as it is. Clearing it turns the fluid backdrop off |

## Where these are saved

Settings on this page, apart from the two **Active Theme** fields, are saved in your project's `Config/DefaultEditor.ini`, so they're shared through source control.

The **Active Theme** fields, and your routing and wire spacing picks, are personal. They're saved in `Saved/Config/WindowsEditor/EditorPerProjectUserSettings.ini` under `[NodeCraft.UserPreferences]`.
