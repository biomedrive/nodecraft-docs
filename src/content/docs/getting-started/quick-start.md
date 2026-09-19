---
title: Quick start
description: Switch themes, wire routing and wire spacing from the NodeCraft toolbar dropdown.
---

Everything you need day to day is in one place: the **NodeCraft dropdown** in the editor toolbar.

## Where to find it

| Editor | Where the dropdown is |
|---|---|
| Blueprint editor (including Level Blueprints) | Blueprint editor toolbar |
| Animation Blueprint editor | Animation Blueprint editor toolbar |
| Widget Blueprint editor | Widget Blueprint editor toolbar |
| Material editor (materials and material functions) | Material editor toolbar |

The dropdown's label is the name of the active theme, for example **Command**.

<!-- Screenshot: the Blueprint editor toolbar with the NodeCraft dropdown open. -->

## What's in the dropdown

The menu has three sections, from top to bottom.

### Routing

How wires are drawn between nodes:

- **Theme Default**: use the routing style the current theme was designed around. This is the default.
- **Default**: Unreal's native curved splines.
- **Manhattan**: straight 90° wires that route around nodes.
- **Subway**: 45° and 90° wires, like a transit map, that route around nodes.
- **Sketch**: hand-drawn pen strokes, drawn directly from pin to pin.

Picking a specific style **pins** it. It then stays in place even when you change theme. Choose **Theme Default** to go back to following the theme. See [Wire routing](/guides/wire-routing/) for details.

### Wire Spacing

When several wires share the same path, NodeCraft spreads them into parallel lanes so they don't draw on top of each other:

- **Off**: wires follow their exact route, so wires sharing a path overlap.
- **1**: 6-pixel lanes. This is the default.
- **2**: 12-pixel lanes.

### Themes

The list of themes. Pick one and every open graph of that type restyles instantly, with no restart. See [Themes](/guides/themes/) for what each one looks like.

## Blueprints and Materials are separate

The Blueprint dropdown and the Material editor dropdown are **independent**. You can use Neon in Blueprints and Atelier in materials, or pin Subway routing in Blueprints and Manhattan in materials.

## Your choices are remembered

Your theme, routing and wire spacing picks are saved as soon as you make them and restored the next time you open the editor. The theme assets aren't modified, so you'll never get an extra "save changes?" prompt when you quit.

Choices are remembered **per project**. A project where you've never picked anything starts on the **Command** theme with **Theme Default** routing.

:::tip
Each person on a team picks their own look. Choices are stored in the project's `Saved` folder, which normally isn't in source control, so your theme never changes anyone else's.
:::
