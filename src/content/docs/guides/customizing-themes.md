---
title: Customizing themes
description: Edit theme colours, materials, pins and shapes, or make your own theme.
---

Every NodeCraft theme is **data, not code**. Colours, materials, pin icons, fonts, node shapes, wire styles and backdrops are all stored in two theme assets that you can edit in the Unreal Editor. Changes show up in open graphs straight away.

## The two theme assets

| Asset | Controls |
|---|---|
| `DA_KismetNodeTheme` | Blueprint graphs |
| `DA_MaterialNodeTheme` | Material graphs |

Both live in NodeCraft's plugin content, in the `Themes` folder. To see them in the Content Browser, open its **Settings** menu and enable both **Show Engine Content** and **Show Plugin Content**. NodeCraft is installed into the engine, so its content counts as both.

## Recommended: edit a copy, not the original

The original assets live inside your engine installation. That means:

- editing them changes NodeCraft for **every project** on that engine version, and
- a NodeCraft **update replaces them**, and your changes are lost.

So make your own copy and point NodeCraft at it:

1. In the Content Browser, drag `DA_KismetNodeTheme` into a folder in **your project** and choose **Copy Here**. Do the same for `DA_MaterialNodeTheme` if you want to customise material graphs.
2. Open **Edit → Project Settings → Plugins → NodeCraft**.
3. Set **Node Theme Asset (Kismet)** and/or **Node Theme Asset (Material)** to your copies.
4. **Restart the editor.** NodeCraft reads these two settings at startup.

These settings are saved in your project's config (`Config/DefaultEditor.ini`). If you use source control, your whole team gets the customised themes.

## What's inside a theme asset

Open a theme asset and you'll see:

- **Active Theme**: the theme a user starts on if they haven't picked one in this project yet.
- **Themes**: one entry per theme (Neon, Liquid Glass, and so on). Expand an entry to edit that theme.
- **Custom Shapes**: your own node silhouettes, which then appear in every theme's **Body Shape** list.

Each theme entry is grouped into sections: **Nodes**, **Routing**, **Background** and **Advanced**. The [Theme settings](/reference/theme-settings/) reference lists every field.

<!-- Screenshot: DA_KismetNodeTheme open with one theme entry expanded. -->

## Changing node colours

Node colours are set **per node family**, so all nodes of the same kind share a look. Inside a theme entry, open **Node Presets**. Each key is a family.

**Blueprint families**

| Family | Nodes |
|---|---|
| `Default` | Regular function calls that fit no other family |
| `Event` | Events |
| `Pure` | Pure (no exec pin) functions that fit no other family |
| `Variable` | Variable get/set nodes. By default these take the variable type's colour |
| `Sequence` | Sequence nodes |
| `FlowControl` | Branch, Select, MultiGate and similar |
| `Switch` | Switch on Int, Enum, String and similar |
| `Cast` | Cast To … |
| `Math` | Math, vectors, interpolation |
| `Utilities` | System and debug nodes, such as Print String |
| `Gameplay` | Actors, components, spawning |
| `StringText` | String, Text and Name operations |
| `Container` | Arrays, sets and maps |
| `Rendering` | Rendering-related nodes |

Nodes are sorted into families automatically, based on each function's category in Unreal.

**Material families:** `Default`, `Result` (the material output node), `Parameter` and `Texture`.

A family you haven't added still gets a sensible colour automatically. To **change** it, add that family's key to **Node Presets** first. For example, to recolour Branch nodes, add `FlowControl`.

Each family has body, title, border and text colours, optional body and title **materials**, a border thickness, and a **selection colour**.

## Changing the backdrop, wires or shape

These are set per theme, in the theme entry:

- **Body Shape** (Nodes): the node silhouette.
- **Spline Theme** (Routing): the theme's routing style.
- **Panel Background Material** (Background): the backdrop behind the graph.

Built-in shapes: `Default` (Unreal-style rounded rectangle), `Rectangle`, `Chamfer`, `CommandBody`, `GlassBubble`, `Aetherial` and `Sketch`, plus any **Custom Shapes** you add.

Backdrops and node surfaces are **User Interface** domain materials. You can assign your own.

## Making your own theme

1. In the theme asset's **Themes** list, add an entry with a new name, or duplicate an existing one and rename it.
2. Do the same in the **other** theme asset with **exactly the same name**, so your theme exists in both Blueprint and Material graphs.
3. Pick it from the NodeCraft dropdown.

Comment boxes use each built-in theme's hand-tuned style. A theme you create gets a general-purpose comment style instead.

:::caution
Don't delete or rename the built-in themes in the **original** theme assets. Make your changes in your own copy (see above), so a NodeCraft update can't overwrite them.
:::

## Undoing your changes

If you customised a copy, point **Node Theme Asset (Kismet)** and **Node Theme Asset (Material)** in Project Settings back to the originals (`/NodeCraft/Themes/DA_KismetNodeTheme` and `/NodeCraft/Themes/DA_MaterialNodeTheme`) and restart the editor.
