# Copy Code Reference

VS Code extension that copies a reference to the selected code to your clipboard.

## Format

```
@filename.ext#line        (single line)
@filename.ext#start-end   (line range)
```

**Examples:**

- `@app.ts#42`
- `@index.js#10-25`

## Usage

1. Select code in the editor
2. Right-click → **Copy Code Reference**, or press `Cmd+Shift+Alt+C` (Mac) / `Ctrl+Shift+Alt+C` (Windows/Linux)
3. The reference is copied to your clipboard

A status bar message confirms what was copied.

## Installation

```sh
npm install
npm run compile
npx @vscode/vsce package --allow-missing-repository
```

Then in VS Code: `Cmd+Shift+P` → **Extensions: Install from VSIX...** → select the generated `.vsix` file.

## Development

```sh
npm run compile    # build
npm run watch      # build in watch mode
npm test           # run tests
```

Press `F5` in VS Code to launch the Extension Development Host for debugging.
