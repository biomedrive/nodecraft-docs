# NodeCraft Docs

The public buyer documentation for NodeCraft, built with [Astro Starlight](https://starlight.astro.build/) and published to GitHub Pages.

Keep this repo **public** and keep it **docs only**. Never put plugin source or the internal `NodeCraft.md` / `NodeCraft_DevGuide.md` in here.

## Editing pages

Pages are Markdown files in `src/content/docs/`:

| Page | File |
|---|---|
| Home | `index.mdx` (content lives in `src/components/Landing.astro`) |
| Installation | `getting-started/installation.md` |
| Quick start | `getting-started/quick-start.md` |
| Themes | `guides/themes.mdx` |
| Wire routing | `guides/wire-routing.mdx` |
| Customizing themes | `guides/customizing-themes.md` |
| Theme settings | `reference/theme-settings.md` |
| Project settings | `reference/project-settings.md` |
| FAQ & troubleshooting | `help/faq.md` |
| Support | `help/support.md` |

The sidebar order is set in `astro.config.mjs`.

**Link between pages with site-root paths**, for example `/guides/themes/`. The build adds the `/nodecraft-docs` prefix automatically (see `src/plugins/rehype-base-links.mjs`), so links work whatever the address looks like.

The home page is `src/components/Landing.astro`. The screenshot carousel is `src/components/Showcase.astro`, and its slides live in `src/assets/showcase/` (numbered in display order).

## Changelog

After each plugin update, add a block to the top of **`src/data/changelog.yaml`**. The file's own comments show the format:

```yaml
"1.1.0":
  date: 2026-11-02            # leave out while the release is upcoming
  engines: UE 5.6 · 5.7 · 5.8
  changes:
    - type: new               # new | improved | fix | removed
      text: What changed, written for buyers.
```

The Changelog page (`src/content/docs/changelog.mdx`) builds itself from that file. The newest dated release is marked **Latest**.

## Home page video

The hero plays **`public/video/nodecraft-showcase.mp4`** muted and looped behind the headline. Visitors on phones, data-saver or reduced-motion settings get the first carousel screenshot instead. To replace it, export a web copy (H.264 MP4, 1080p, no audio, roughly 3 to 4 Mbps) and save it over that file. Keep it well under 100 MB, GitHub's per-file limit.

## Preview locally

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:4321/nodecraft-docs/).

## Publish to GitHub Pages (one-time setup)

1. Create an empty **public** repo on github.com, for example `nodecraft-docs`.
2. In `astro.config.mjs`, set `GITHUB_NAME` to your GitHub user or organisation name, and `REPO_NAME` to the repo name.
3. Push this folder to the repo's `main` branch.
4. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
5. Wait for the **Deploy to GitHub Pages** workflow to finish (the **Actions** tab). The site is then live at `https://<GITHUB_NAME>.github.io/<REPO_NAME>/`.

That address is the plugin's `DocsURL`. Once it's in the `.uplugin`, don't rename the repo or the account, or the link inside every buyer's copy breaks.

After setup, every push to `main` republishes the site automatically. Editing pages never needs a new Fab upload.

## Adding screenshots

Put images in `src/assets/` and reference them with a relative path, for example:

```md
![Neon theme](../../../assets/neon.png)
```

Screenshots still wanted are marked in the pages with a comment starting `Screenshot`:

- [x] Home: screenshot carousel
- [x] Themes: one per theme
- [x] Wire routing: Subway / Manhattan with and without ribbon spacing
- [ ] Installation: Plugins window with NodeCraft enabled
- [ ] Quick start: toolbar with the NodeCraft dropdown open
- [ ] Customizing themes: a theme asset open with an entry expanded
- [ ] Project settings: the NodeCraft section of Project Settings
