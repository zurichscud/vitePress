# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start VitePress dev server
pnpm docs:build       # Build for production
pnpm docs:preview     # Preview production build
pnpm generate         # Run all auto-generation scripts
pnpm generate:sidebar # Regenerate sidebar.js from file structure
pnpm generate:homepage # Regenerate homepage feature cards
```

**After adding or removing docs, always run `pnpm generate` to keep sidebar and homepage in sync.**

## Architecture

This is a VitePress documentation site deployed to GitHub Pages at `/vitePress/` base path.

### Key Directories

- `docs/posts/` — All documentation content, organized by category (CSS, Vue, JAVA, Agent, etc.)
- `docs/.vitepress/` — VitePress config: `config.mjs`, `nav.js`, `sidebar.js` (auto-generated), `links.js` (auto-generated)
- `docs/.vitepress/theme/` — Custom theme extending VitePress default; `MyLayout.vue` wraps the default layout
- `scripts/` — Auto-generation scripts for sidebar and homepage

### Auto-Generation System

`sidebar.js` and `links.js` are **auto-generated** — do not edit them manually.

- `links.js`: Maps `posts/Category/file.md` → `/Category/file` (URL rewrites)
- `sidebar.js`: Hierarchical sidebar built from the file structure

The scripts parse `docs/posts/` directories, strip numeric prefixes (e.g., `1-基础/` → `基础`) for display, and sort by prefix number then Chinese alphabetically.

### Adding New Documentation

1. Create `.md` files under `docs/posts/<Category>/`
2. Use numeric prefixes (`1-title.md`, `2-title.md`) to control ordering
3. Run `pnpm generate` to regenerate sidebar and homepage

### URL Structure

Source: `docs/posts/Vue/1-基础/computed.md`
URL: `/Vue/1-基础/computed`

### Dependencies

- `vitepress` v1.6.4 with `vitepress-plugin-group-icons` for code block icons
- `tdesign-vue-next` for UI components
- `@giscus/vue` for comments
- `globby` used in generation scripts for file discovery
