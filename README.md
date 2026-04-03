# Atlas PDF Hub

Atlas PDF Hub is a browser-only PDF workspace inspired by multi-tool products, but implemented as a static client-side app.

## What it does

- Starts on a bilingual landing page.
- Lets the user choose a workflow first: `Merge`, `Organize`, `Split`, or `Edit`.
- Opens a dedicated tool screen for the selected workflow instead of keeping everything inside one generic panel.
- Keeps processing in the browser with `pdf.js`, `pdf-lib`, and `JSZip`.

## Main workflows

### Merge PDF

- Load multiple PDFs.
- Reorder them with drag and drop.
- Preview the selected source document.
- Export a single merged PDF.

### Organize PDF

- Load a PDF and turn its pages into draggable cards.
- Reorder pages visually.
- Remove or rotate individual pages.
- Insert another PDF between existing pages by selecting a slot or dropping a file there.
- Export the rebuilt document.

### Split PDF

- Split by fixed page count.
- Build custom ranges from manual input or visual page selection.
- Extract selected pages as one PDF or as separate files.
- Export as PDF or ZIP depending on the chosen mode.

### Edit PDF

- Open a PDF in a dedicated editor stage.
- Add text overlays.
- Add comment-style note overlays.
- Draw highlight blocks.
- Cover content with erase blocks.
- Drag overlays around the page before exporting.

Important:

- The edit mode is visual overlay editing.
- It does **not** rewrite the underlying native PDF text stream like full Acrobat Pro desktop editing.
- Covering/removing text is handled by drawing white blocks on top of existing content, then exporting the result.

## Language support

- Turkish and English are available from the header.
- Home cards, tool titles, actions, and status messages switch with the selected language.

## Run locally

1. Open `index.html` in a modern browser.
2. Or serve the folder with a simple static server such as `python -m http.server`.

Notes:

- CDN dependencies require internet access on first load.
- No backend is required.

## Limits

- Password-protected PDFs are not supported.
- OCR is not included.
- Very large files can hit browser memory limits.
- Overlay-heavy edit exports may reduce true text editability/searchability.

## Files

- `index.html`: top-level shell and route containers
- `styles.css`: responsive UI and tool layouts
- `app.js`: routing, i18n, drag/drop flows, PDF processing, and editor overlays

## DOM hooks

These hooks are relevant for future automation:

- `#languageSwitcher`
- `#homeView`
- `#workspaceView`
- `#commonDrop`
- `#statusFeed`
- `#runToolButton`
- `#organizeBoard`
- `#splitVisual`
- `#editorCanvasHost`
- `#editorCanvas`
- `#editorOverlayLayer`
- `#modalToast`
