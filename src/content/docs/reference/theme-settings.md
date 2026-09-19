---
title: Theme settings
description: Every field in a NodeCraft theme entry.
---

These are the fields of one theme entry inside `DA_KismetNodeTheme` or `DA_MaterialNodeTheme`. Both assets use the same fields. See [Customizing themes](/guides/customizing-themes/) for how to edit them safely.

## Nodes

| Setting | What it does |
|---|---|
| **Node Presets** | Colours and materials per node family. See [node families](/guides/customizing-themes/#changing-node-colours) and the preset fields below. |
| **Pin Style** | Custom pin icons. Empty means Unreal's standard pins. |
| **Body Shape** | The node silhouette. |
| **Custom Font** | A font asset used for node text. Empty means Unreal's standard font. |
| **Override Node Value Box** / **Node Value Box Color** | Force the text colour of input fields inside nodes, for themes where the standard colour would be hard to read. |
| **Override Node Check Tick** / **Node Check Tick Color** | The colour of the tick in checked boolean checkboxes. |
| **Disable Node Borders** | Draw nodes without a border. |
| **Soft Title Seam** / **Title Seam Fade Height** | Fade the title bar into the body instead of ending it with a hard line. Suits themes where the title is the same surface as the body. |
| **Tint Node Icons** / **Node Icon Tint** | Tint the small icons on nodes (the Add-pin "+", title icon, advanced-pins arrow) a single colour, such as ink black. |
| **Restore Variable Node Icons** | With Tint Node Icons on, keep variable nodes' coloured type icons. |
| **Selection Glow** / **Radius** / **Opacity** | A wide, soft halo around selected nodes. |
| **Invert Text On Select** | Selected nodes flip their text to black, for themes whose body fills with colour when selected (the Neon look). |
| **Invert Title Text On Select** | Only the title text flips when selected, for themes whose title bar fills with colour. |
| **Selection Keeps Node Color** | Selected nodes keep their own border colour instead of switching to the selection colour. |
| **Cursor Light** | Sends the mouse position to the node materials, so a material can draw a light that follows the cursor (the Liquid Glass look). |
| **Border Glow** | A soft glow around each node's border, in the border's colour. |
| **Engineered Inputs** | Restyle input fields and checkboxes as flat, square, recessed wells (the Command look). |

### Node preset fields

Each entry in **Node Presets** has:

| Setting | What it does |
|---|---|
| **Body Color**, **Title Color**, **Border Color** | The node's main colours |
| **Title Font Color**, **Body Font Color**, **Secondary Title Font Color** | Text colours. The secondary title is the title's second line, for example "Param (1)" on material parameter nodes |
| **Body Material**, **Title Material** | Optional materials for the body and title bar, instead of flat colours |
| **Material Tile Size** | Tiling size for those materials |
| **Border Thickness** | Border width |
| **Selection Color** | Border colour while the node is selected |
| **Override Variable Color** / **Variable Color Override** | Give variable nodes one fixed colour instead of the variable type's colour |
| **Variable Body Accent** | How much of the variable type's colour tints the node body (0 = none; title and border always use it fully) |

### Pin style fields

For each pin kind (**Data**, **Exec** and **Reroute**), set a **connected** and a **disconnected** icon. Each can be a texture, or a User Interface material that overrides the texture. If you set only one of the two states, it's used for both.

| Setting | What it does |
|---|---|
| **Icon Size** | On-screen pin size in pixels |
| **Override Color** / **Pin Color** | Off (recommended) keeps each pin's data-type colour. On forces every pin to one colour |

## Routing

| Setting | What it does |
|---|---|
| **Spline Theme** | The theme's routing style: Default, Manhattan, Subway or Sketch. Used when routing is set to **Theme Default** |
| **Wire Thickness (x)** | Multiplier on Unreal's normal wire thickness |
| **Wire Corner Radius** | Rounding on wire corners, in pixels (0 = sharp) |
| **Wire Glow** | A wide coloured glow around Manhattan and Subway wires |
| **Ink Exec Wires** / **Exec Wire Ink Color** | Draw execution wires in an ink colour instead of white, for light backdrops |
| **Ink Material Wires** / **Material Wire Ink Color** | Material graphs only: draw all wires in one ink colour |
| **Wire Material** | An optional User Interface material drawn along the wire |
| **Wire Texture Tiling (px)** | Wire length per texture repeat |
| **Wire Flow Speed** | How fast the wire material scrolls |

Wire **spacing** isn't a theme setting. It's a personal preference in the NodeCraft dropdown (see [Wire routing](/guides/wire-routing/#wire-spacing)).

## Background

| Setting | What it does |
|---|---|
| **Panel Background Material** | The backdrop behind the graph. Empty uses the fallback from Project Settings |
| **Animate Continuously** | Keep redrawing every frame so an animated backdrop keeps moving while you're not using the mouse. Costs a little performance |

## Advanced

| Setting | What it does |
|---|---|
| **Use Native Fallback** | Skip all NodeCraft styling for this theme and show Unreal's standard nodes. This is how **UE_Default** works |
