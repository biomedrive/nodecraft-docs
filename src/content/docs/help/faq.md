---
title: FAQ & troubleshooting
description: Common questions and fixes for NodeCraft.
---

## Questions

### Does NodeCraft affect my packaged game?

No. NodeCraft is an editor-only plugin, so it's never included when you package your game.

### Does it change my Blueprints or materials?

No. NodeCraft only changes how graphs are **drawn** in the editor. Node positions, connections and comment colours stay exactly as they are. Disable the plugin or pick **UE_Default** and everything looks standard again.

### Which editors does it theme?

- **Blueprints**, including Level Blueprints, Animation Blueprints and Widget Blueprints
- **Materials** and **Material Functions**

Other graph editors (Niagara, Behavior Trees, MetaSounds, Control Rig and so on) keep Unreal's standard look.

### Can I use different themes for Blueprints and materials?

Yes. The Blueprint editor and the Material editor each have their own NodeCraft dropdown and their own active theme.

### Will my theme change for my teammates?

No. Theme, routing and wire spacing choices are personal and stored in your project's `Saved` folder, which normally isn't in source control. To share a **customised** theme with your team, see [Customizing themes](/guides/customizing-themes/).

### Why did a new project start on Command?

Command is the default theme. Each project remembers its own choice, so a project where you haven't picked a theme yet starts on Command.

### Why does a comment box keep its own colour instead of the theme's?

Themes only recolour comments that still use the default comment colour. Once you choose a colour for a comment, NodeCraft respects it.

### Does it work with Unreal Engine 5.5 or earlier, or on Mac or Linux?

Not currently. NodeCraft supports Unreal Engine 5.6, 5.7 and 5.8 on Windows.

## Troubleshooting

### I don't see the NodeCraft dropdown

1. Check **Edit → Plugins**: **NodeCraft** must be ticked for this project.
2. Restart the editor after enabling it.
3. The dropdown appears in the **Blueprint** and **Material** editors' toolbars, not the main Level Editor toolbar.

### The editor feels slow with a theme

**Neon** runs a live fluid simulation, and **Aetherial** animates its backdrop continuously. On a lower-end GPU, switch to **Command**, **Liquid Glass** or **Atelier**.

### Wires jump when I switch themes

With routing set to **Theme Default**, each theme brings its own routing style. To keep one style across all themes, pick it in the **Routing** section. That pins it.

### I customised a theme and my changes disappeared after an update

Updates replace NodeCraft's own theme assets. Keep your changes in a **copy** inside your project. See [Customizing themes](/guides/customizing-themes/#recommended-edit-a-copy-not-the-original).

### I changed "Node Theme Asset" in Project Settings but nothing happened

NodeCraft reads the theme asset settings at startup. Restart the editor.

### Reset NodeCraft to its defaults for a project

1. Close the editor.
2. Open `Saved/Config/WindowsEditor/EditorPerProjectUserSettings.ini` in your project folder.
3. Delete the `[NodeCraft.UserPreferences]` section and save.
4. Reopen the project. You're back on the default theme, routing and wire spacing.

### Something else is wrong

Ask on [Discord or by email](/help/support/). Include your Unreal version, the theme you were using, and any lines mentioning **NodeCraft** from the **Output Log** (**Window → Output Log**).
