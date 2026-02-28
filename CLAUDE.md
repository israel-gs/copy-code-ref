# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A VS Code extension that copies a code reference (`@filename.ext#startLine-endLine`) to the clipboard from a selection or cursor position. Triggered via editor context menu or keyboard shortcut (`Cmd+Shift+Alt+C` / `Ctrl+Shift+Alt+C`).

## Build Commands

- `npm run compile` — compile TypeScript to `out/`
- `npm run watch` — compile in watch mode
- `npm test` — compile and run all tests
- `npx @vscode/vsce package --allow-missing-repository` — package as `.vsix` for installation

## Architecture

Single-command extension. All logic lives in `src/extension.ts`, which registers the `copyCodeRef.copy` command. The command is surfaced via:

- **Context menu**: `contributes.menus.editor/context` in `package.json` (visible when `editorHasSelection`)
- **Keybinding**: `contributes.keybindings` in `package.json`

Reference format: `@file.ext#line` (single line) or `@file.ext#start-end` (range). Uses `path.basename` so only the filename is included, not the full path.

## Testing

Tests use mocha and live in `src/test/`. A mock (`src/test/vscode.mock.ts`) intercepts `require("vscode")` so tests run outside VS Code. The `buildRef` function is extracted as a pure function to enable direct unit testing.
