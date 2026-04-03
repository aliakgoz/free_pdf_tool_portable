(() => {
  const PDFJS_WORKER_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const TOOL_ORDER = ["merge", "organize", "split", "edit"];

  const TOOL_META = {
    merge: {
      icon: "Merge",
      gradient: "is-merge",
    },
    organize: {
      icon: "Organize",
      gradient: "is-organize",
    },
    split: {
      icon: "Split",
      gradient: "is-split",
    },
    edit: {
      icon: "Edit",
      gradient: "is-edit",
    },
  };

  const COPY = {
    tr: {
      brandHint: "Ne yapabilirim?",
      homeEyebrow: "Kurulumsuz, tarayici tabanli",
      homeTitle: "Islem sec, PDF'i istedigin gibi sekillendir.",
      homeCopy:
        "Ana sayfadan hedefledigin isi sec. Her arac kendi ekranina gecer; organize, split, edit ve merge akislari ayri deneyimler sunar.",
      homePrimary: "Organize PDF",
      homeSecondary: "Split PDF",
      guideTitle: "Hizli kilavuz",
      guideItems: [
        "Drag and drop ile sayfalari yeniden siralarsin.",
        "Baska PDF'leri sayfalarin arasina ekleyebilirsin.",
        "Edit modunda metin, yorum, highlight ve erase katmanlari kullanirsin.",
      ],
      tools: {
        merge: {
          label: "Merge PDF",
          copy: "Birden fazla PDF'i surukleyip sirala ve tek dosya olarak indir.",
          footer: "Dosya siralama",
          cta: "Birlestir",
        },
        organize: {
          label: "Organize PDF",
          copy: "Sayfalari surukleyip yeniden sirala, sil, dondur ve araya baska PDF ekle.",
          footer: "Drag & drop sayfalar",
          cta: "Basla",
        },
        split: {
          label: "Split PDF",
          copy: "Sayfa sayisina gore veya secili sayfalarla gorsel bir sekilde parcala.",
          footer: "Gorsel ayirma",
          cta: "Incele",
        },
        edit: {
          label: "Edit PDF",
          copy: "Mevcut PDF uzerinde yazi, yorum, highlight ve erase katmanlari ekle.",
          footer: "Overlay editor",
          cta: "Ac",
        },
      },
      backHome: "Geri don",
      uploadPdf: "PDF sec",
      addPdf: "PDF ekle",
      addBetween: "Araya PDF ekle",
      clearAll: "Temizle",
      commonDropEyebrow: "PDF yukleme alani",
      commonDropTitle: "PDF dosyalarini buraya surukle ve birak",
      commonDropCopy: "Buyuk kutuya PDF birak veya asagidaki butonla cihazindan sec.",
      commonDropHint: "Sadece .pdf dosyalari kabul edilir",
      organizeDropEyebrow: "Organize PDF yukleme alani",
      organizeDropTitle: "Organize etmek icin PDF yukle",
      organizeDropCopy: "Ilk PDF'i buraya birak. Sonra baska PDF'leri bu alana veya sayfa kartlarinin ustune birakarak araya ekleyebilirsin.",
      organizeDropHint: "Sayfa kartina birakirsan o sayfanin onune eklenir",
      statusTitle: "Durum",
      runLabels: {
        merge: "Merged PDF'i indir",
        organize: "Duzenlenmis PDF'i indir",
        split: "Split ciktisini indir",
        edit: "Edit edilen PDF'i indir",
      },
      workspaceTitles: {
        merge: "Merge PDF",
        organize: "Organize PDF",
        split: "Split PDF",
        edit: "Edit PDF",
      },
      workspaceSubtitles: {
        merge: "Dosyalari sirala, onizle ve tek cikti uret.",
        organize: "Sayfalari surukle, yer degistir ve araya yeni PDF ekle.",
        split: "Sabit adet, aralik veya secili sayfa ile gorsel bolme yap.",
        edit: "PDF'i ac, ustune yazi ve not ekle, kapatarak yeni versiyon indir.",
      },
      emptyStates: {
        merge: "Birlestirmek istedigin PDF'leri ekle.",
        organize: "Organize etmek icin bir PDF yukle. Sonra sayfalari surukleyebilirsin.",
        split: "Split islemi icin bir PDF sec.",
        edit: "Edit modunu acmak icin bir PDF yukle.",
      },
      mergeQueueTitle: "Dosya kuyrugu",
      mergePreviewTitle: "Onizleme",
      organizeBoardTitle: "Sayfa tahtasi",
      organizePreviewTitle: "Secili sayfa",
      splitBoardTitle: "Gorsel bolme paneli",
      splitSettingsTitle: "Bolme ayarlari",
      editThumbsTitle: "Sayfalar",
      editCanvasTitle: "Editor sahnesi",
      editInspectorTitle: "Inspector",
      summaryTitle: "Ozet",
      latestOutput: "Son cikti",
      noOutput: "Henuz cikti yok.",
      splitModes: {
        fixed: "Sayfa adedine gore",
        custom: "Secimden aralik",
        extract: "Secili sayfalari cikar",
      },
      splitFixedLabel: "Dosya basina sayfa",
      splitSelectionLabel: "Secili sayfalardan aralik olustur",
      splitManualLabel: "Elle aralik gir",
      splitManualPlaceholder: "1-3, 5-7",
      splitMergeExtracted: "Secilenleri tek PDF'te birlestir",
      splitAddRange: "Secimi araliga donustur",
      splitClearSelection: "Secimi temizle",
      splitRangesTitle: "Araliklar",
      editTools: {
        select: "Sec",
        text: "Text",
        comment: "Comment",
        highlight: "Highlight",
        erase: "Erase",
      },
      editTextLabel: "Icerik",
      editFontLabel: "Yazi boyutu",
      editColorLabel: "Renk",
      deleteLayer: "Katmani sil",
      helpText:
        "Ana sayfadan araci sec. Her arac kendi is akisini aciyor. Organize ekraninda sayfa kartlarini surukleyebilir, edit ekraninda overlay tabanli duzenleme yapabilirsin.",
      modalClose: "Kapat",
      outputDownload: "Indir",
      outputReuse: "Yeniden kullan",
      statusReady: "Calisma alani hazir.",
      statusLanguage: "Dil guncellendi.",
      statusLoaded: "{name} yüklendi.",
      statusInserted: "{name} araya eklendi.",
      statusMerged: "PDF'ler birlestirildi.",
      statusOrganized: "Organize edilmis PDF hazir.",
      statusSplit: "Split ciktilari hazirlandi.",
      statusEdited: "Edit ciktisi hazirlandi.",
      statusDeletedPage: "Sayfa kaldirildi.",
      statusRotatedPage: "Sayfa donduruldu.",
      statusRangeAdded: "Aralik eklendi.",
      statusError: "Islem tamamlanamadi.",
      statusBusy: "Islem calisiyor...",
      previewAlt: "PDF onizleme",
      insertSlot: "Buraya ekle",
      selectedSlot: "Secili ekleme noktasi",
      organizeRotate: "Dondur",
      organizeRemove: "Sil",
      mergePrimaryHint: "Birlestirme sirasini kartlari surukleyerek degistir.",
      editOverlayHint:
        "Bu editor Acrobat benzeri gorunur duzenleme saglar; alttaki gercek metin akisi yeniden kurulmaz.",
    },
    en: {
      brandHint: "What can I do?",
      homeEyebrow: "Browser-only, no install",
      homeTitle: "Choose the workflow and shape your PDF the way you want.",
      homeCopy:
        "Start from the landing page and jump into a dedicated workspace. Organize, split, edit and merge each get a focused screen.",
      homePrimary: "Organize PDF",
      homeSecondary: "Split PDF",
      guideTitle: "Quick guide",
      guideItems: [
        "Reorder pages with drag and drop.",
        "Insert another PDF between existing pages.",
        "Use text, comments, highlights and erase layers in the editor.",
      ],
      tools: {
        merge: {
          label: "Merge PDF",
          copy: "Stack multiple PDFs, reorder them and export one clean file.",
          footer: "Queue and reorder",
          cta: "Merge",
        },
        organize: {
          label: "Organize PDF",
          copy: "Reorder, remove, rotate and inject other PDFs between pages.",
          footer: "Page drag & drop",
          cta: "Start",
        },
        split: {
          label: "Split PDF",
          copy: "Split by page count or selected pages in a more visual workspace.",
          footer: "Visual splitting",
          cta: "Open",
        },
        edit: {
          label: "Edit PDF",
          copy: "Open a PDF, cover text, rewrite content and place comment overlays.",
          footer: "Overlay editor",
          cta: "Launch",
        },
      },
      backHome: "Back home",
      uploadPdf: "Choose PDF",
      addPdf: "Add PDF",
      addBetween: "Insert PDF",
      clearAll: "Clear",
      commonDropEyebrow: "PDF upload area",
      commonDropTitle: "Drag and drop PDF files here",
      commonDropCopy: "Drop a PDF into the large area or use the button below to pick it from your device.",
      commonDropHint: "Only .pdf files are accepted",
      organizeDropEyebrow: "Organize PDF upload area",
      organizeDropTitle: "Upload a PDF to start organizing",
      organizeDropCopy: "Drop your first PDF here. Then you can drop other PDFs on this area or onto page cards to insert them between pages.",
      organizeDropHint: "Dropping on a page card inserts before that page",
      statusTitle: "Status",
      runLabels: {
        merge: "Download merged PDF",
        organize: "Download organized PDF",
        split: "Download split result",
        edit: "Download edited PDF",
      },
      workspaceTitles: {
        merge: "Merge PDF",
        organize: "Organize PDF",
        split: "Split PDF",
        edit: "Edit PDF",
      },
      workspaceSubtitles: {
        merge: "Sort files, preview them and export one result.",
        organize: "Move pages around, reorder them and insert another PDF between slots.",
        split: "Split visually by fixed page count, custom ranges or selected pages.",
        edit: "Open the PDF, add text or comments and cover content with overlay tools.",
      },
      emptyStates: {
        merge: "Add the PDFs you want to merge.",
        organize: "Upload a PDF to start organizing pages.",
        split: "Pick a PDF to start splitting it.",
        edit: "Upload a PDF to enter edit mode.",
      },
      mergeQueueTitle: "Queue",
      mergePreviewTitle: "Preview",
      organizeBoardTitle: "Page board",
      organizePreviewTitle: "Selected page",
      splitBoardTitle: "Visual split board",
      splitSettingsTitle: "Split settings",
      editThumbsTitle: "Pages",
      editCanvasTitle: "Editor stage",
      editInspectorTitle: "Inspector",
      summaryTitle: "Summary",
      latestOutput: "Latest output",
      noOutput: "No output yet.",
      splitModes: {
        fixed: "By page count",
        custom: "Build ranges",
        extract: "Extract selected pages",
      },
      splitFixedLabel: "Pages per file",
      splitSelectionLabel: "Build a range from selection",
      splitManualLabel: "Manual ranges",
      splitManualPlaceholder: "1-3, 5-7",
      splitMergeExtracted: "Merge selected pages into one PDF",
      splitAddRange: "Turn selection into ranges",
      splitClearSelection: "Clear selection",
      splitRangesTitle: "Ranges",
      editTools: {
        select: "Select",
        text: "Text",
        comment: "Comment",
        highlight: "Highlight",
        erase: "Erase",
      },
      editTextLabel: "Content",
      editFontLabel: "Font size",
      editColorLabel: "Color",
      deleteLayer: "Delete layer",
      helpText:
        "Choose a tool from the landing page. Each tool opens its own workflow. Organize gives you page cards and insertion slots, while Edit uses overlay-based visual editing.",
      modalClose: "Close",
      outputDownload: "Download",
      outputReuse: "Reuse",
      statusReady: "Workspace is ready.",
      statusLanguage: "Language updated.",
      statusLoaded: "{name} loaded.",
      statusInserted: "{name} inserted.",
      statusMerged: "PDFs were merged.",
      statusOrganized: "Organized PDF is ready.",
      statusSplit: "Split output is ready.",
      statusEdited: "Edited PDF is ready.",
      statusDeletedPage: "Page removed.",
      statusRotatedPage: "Page rotated.",
      statusRangeAdded: "Range added.",
      statusError: "The action could not be completed.",
      statusBusy: "Working...",
      previewAlt: "PDF preview",
      insertSlot: "Insert here",
      selectedSlot: "Selected insert slot",
      organizeRotate: "Rotate",
      organizeRemove: "Remove",
      mergePrimaryHint: "Drag the cards to change the merge order.",
      editOverlayHint:
        "This editor produces Acrobat-like visual edits; it does not rebuild the underlying text stream.",
    },
  };

  const state = {
    lang: loadLanguage(),
    route: parseRoute(),
    busy: false,
    statusItems: [],
    outputs: {
      merge: null,
      organize: null,
      split: null,
      edit: null,
    },
    docs: [],
    thumbCache: new Map(),
    pendingInsertIndex: null,
    merge: {
      docIds: [],
      previewDocId: null,
      dragDocId: null,
    },
    organize: {
      pageItems: [],
      selectedPageId: null,
      selectedPageIds: [],
      lastSelectedPageId: null,
      dragPageId: null,
      dragPageIds: [],
      selectedInsertIndex: 0,
      dropIndicatorIndex: null,
    },
    split: {
      docId: null,
      mode: "fixed",
      fixedCount: 2,
      manualRanges: "",
      selectedPages: [],
      savedRanges: [],
      mergeExtracted: true,
    },
    edit: {
      docId: null,
      currentPage: 1,
      tool: "select",
      overlaysByPage: {},
      selectedOverlayId: null,
      dragOverlay: null,
      draftRect: null,
      defaults: {
        fontSize: 22,
        color: "#15324b",
        fontFamily: "helvetica",
        fontStyle: "regular",
      },
    },
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    if (!window.PDFLib || !window.pdfjsLib || !window.JSZip) {
      document.body.innerHTML =
        '<main style="padding:24px;font:16px/1.6 system-ui">Required PDF libraries could not be loaded.</main>';
      return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
    cacheElements();
    wireGlobalEvents();
    logStatus(t("statusReady"), "info");
    render();
  }

  function cacheElements() {
    const ids = [
      "homeView",
      "workspaceView",
      "statusFeed",
      "languageSwitcher",
      "modalToast",
      "mainFileInput",
      "insertFileInput",
    ];

    ids.forEach((id) => {
      elements[id] = document.getElementById(id);
    });

    elements.brandText = document.querySelector(".brand-block__text");
    elements.helpButton = document.querySelector("[data-hook='openHelp']");
    elements.langButtons = Array.from(document.querySelectorAll("[data-lang]"));
    elements.topnavButtons = Array.from(document.querySelectorAll(".topnav__link"));
  }

  function wireGlobalEvents() {
    window.addEventListener("hashchange", () => {
      state.route = parseRoute();
      render();
    });

    document.addEventListener("click", handleClick);
    document.addEventListener("change", handleChange);
    document.addEventListener("input", handleInput);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);
    document.addEventListener("dragend", handleDragEnd);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("keydown", handleKeyDown);

    elements.mainFileInput.addEventListener("change", async (event) => {
      await handleToolUpload(Array.from(event.target.files || []), getActiveTool());
      event.target.value = "";
    });

    elements.insertFileInput.addEventListener("change", async (event) => {
      await handleInsertUpload(Array.from(event.target.files || []));
      event.target.value = "";
    });
  }

  function render() {
    document.documentElement.lang = state.lang;
    if (elements.brandText) {
      elements.brandText.textContent = "PDF Hub";
    }
    if (elements.helpButton) {
      elements.helpButton.textContent = t("brandHint");
    }
    renderLanguageButtons();
    renderTopnavButtons();
    renderHomeView();
    renderWorkspaceView();
    renderStatusFeed();
    syncView();
    afterRender();
  }

  function renderLanguageButtons() {
    elements.langButtons.forEach((button) => {
      button.classList.toggle("lang-switcher__btn--active", button.dataset.lang === state.lang);
    });
  }

  function renderTopnavButtons() {
    const activeTool = getActiveTool();
    elements.topnavButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.navTool === activeTool);
    });
  }

  function renderHomeView() {
    elements.homeView.innerHTML = `
      <div class="hero">
        <div class="hero__copy">
          <p class="eyebrow">${escapeHtml(t("homeEyebrow"))}</p>
          <h1>${escapeHtml(t("homeTitle"))}</h1>
          <p>${escapeHtml(t("homeCopy"))}</p>
          <div class="hero__actions">
            <button class="primary-button" data-nav-tool="organize">${escapeHtml(t("homePrimary"))}</button>
            <button class="secondary-button" data-nav-tool="split">${escapeHtml(t("homeSecondary"))}</button>
          </div>
        </div>
        <div class="hero__panel">
          <p class="hero__panel-title">${escapeHtml(t("guideTitle"))}</p>
          <ul class="hero__panel-list">
            ${t("guideItems")
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
      <div class="tools-grid">
        ${TOOL_ORDER.map(renderToolCard).join("")}
      </div>
    `;
  }

  function renderToolCard(toolId) {
    const copy = t(`tools.${toolId}`);
    return `
      <article class="tool-card ${TOOL_META[toolId].gradient}" data-tool-card="${toolId}">
        <p class="tool-card__label">${escapeHtml(copy.label)}</p>
        <p class="tool-card__copy">${escapeHtml(copy.copy)}</p>
        <div class="tool-card__footer">
          <span>${escapeHtml(copy.footer)}</span>
          <button class="ghost-button" data-nav-tool="${toolId}">${escapeHtml(copy.cta)}</button>
        </div>
      </article>
    `;
  }

  function renderWorkspaceView() {
    const toolId = getActiveTool();
    if (!toolId) {
      elements.workspaceView.innerHTML = "";
      return;
    }

    elements.workspaceView.innerHTML = `
      <div class="workspace-top">
        <button class="ghost-button" data-nav-home>${escapeHtml(t("backHome"))}</button>
        <div class="workspace-top__labels">
          <p id="workspaceTitle">${escapeHtml(t(`workspaceTitles.${toolId}`))}</p>
          <span id="workspaceSubtitle">${escapeHtml(t(`workspaceSubtitles.${toolId}`))}</span>
        </div>
      </div>
      ${renderToolWorkspace(toolId)}
    `;
  }

  function renderToolWorkspace(toolId) {
    switch (toolId) {
      case "merge":
        return renderMergeWorkspace();
      case "organize":
        return renderOrganizeWorkspace();
      case "split":
        return renderSplitWorkspace();
      case "edit":
        return renderEditWorkspace();
      default:
        return "";
    }
  }

  function renderCommonAside(toolId) {
    return `
      <aside class="workspace-shell__aside">
        <div class="drop-zone" id="commonDrop" data-drop-context="${toolId}">
          <div class="drop-zone__badge">PDF</div>
          <p class="eyebrow">${escapeHtml(t("commonDropEyebrow"))}</p>
          <strong>${escapeHtml(t("commonDropTitle"))}</strong>
          <span>${escapeHtml(t("commonDropCopy"))}</span>
          <small>${escapeHtml(t("commonDropHint"))}</small>
          <button class="primary-button" data-action="browse-main">${escapeHtml(t("uploadPdf"))}</button>
        </div>
        <div class="status-stack">
          <p class="eyebrow">${escapeHtml(t("statusTitle"))}</p>
          <ol id="statusFeed" class="status-feed"></ol>
        </div>
      </aside>
    `;
  }

  function renderOutputCard(toolId) {
    const output = state.outputs[toolId];
    return `
      <div class="card" data-output-card="${toolId}">
        <p class="card__title">${escapeHtml(t("latestOutput"))}</p>
        ${
          output
            ? `
              <p class="card__copy">${escapeHtml(output.name)}</p>
              <div class="card__list">
                <span>${escapeHtml(output.description)}</span>
              </div>
              <div class="stacked-actions">
                <button class="primary-button primary-button--block" data-action="download-output" data-tool-output="${toolId}" type="button">
                  ${escapeHtml(t("outputDownload"))}
                </button>
                ${
                  output.reusable
                    ? `<button class="ghost-button ghost-button--block" data-action="reuse-output" data-tool-output="${toolId}" type="button">${escapeHtml(
                        t("outputReuse")
                      )}</button>`
                    : ""
                }
              </div>
            `
            : `<p class="card__copy">${escapeHtml(t("noOutput"))}</p>`
        }
      </div>
    `;
  }

  function renderMergeWorkspace() {
    const docs = state.merge.docIds.map(getDoc).filter(Boolean);
    return `
      <div class="workspace-shell">
        ${renderCommonAside("merge")}
        <section class="workspace-shell__main workspace-shell__main--merge">
          <div class="workspace-panel workspace-panel--span-2">
            <div class="workspace-panel__header">
              <div>
                <p class="eyebrow">${escapeHtml(t("mergeQueueTitle"))}</p>
                <span>${escapeHtml(t("mergePrimaryHint"))}</span>
              </div>
              <button class="ghost-button" data-action="clear-tool" data-tool-clear="merge">${escapeHtml(t("clearAll"))}</button>
            </div>
            <div class="workspace-panel__body">
              ${
                docs.length === 0
                  ? `<div class="workspace-placeholder"><p>${escapeHtml(t("emptyStates.merge"))}</p></div>`
                  : `<div class="doc-queue">${docs.map(renderMergeDocCard).join("")}</div>`
              }
            </div>
          </div>
          <div class="workspace-panel">
            <div class="workspace-panel__header">
              <p class="eyebrow">${escapeHtml(t("mergePreviewTitle"))}</p>
            </div>
            <div class="workspace-panel__body">
              <div class="preview-canvas-shell">
                <canvas id="mergePreviewCanvas" aria-label="${escapeHtml(t("previewAlt"))}"></canvas>
              </div>
            </div>
          </div>
        </section>
        <aside class="workspace-shell__actions">
          <div class="card">
            <p class="card__title">${escapeHtml(t("summaryTitle"))}</p>
            <p class="card__copy">${docs.length} PDF</p>
            <div class="card__list">
              ${docs.map((doc) => `<span>${escapeHtml(doc.name)}</span>`).join("")}
            </div>
          </div>
          ${renderOutputCard("merge")}
          <div class="card card--cta">
            <button id="runToolButton" class="primary-button primary-button--block" data-action="run-tool">
              ${escapeHtml(t("runLabels.merge"))}
            </button>
          </div>
        </aside>
      </div>
    `;
  }

  function renderOrganizeWorkspace() {
    const pageItems = state.organize.pageItems;
    const selectedPage = pageItems.find((item) => item.id === state.organize.selectedPageId) || null;
    const fileSummaries = getOrganizeFileSummaries();
    const selectedCount = state.organize.selectedPageIds.length;
    return `
      <div class="organize-shell">
        <section class="organize-stage">
          <div class="organize-stage__header">
            <div>
              <p class="eyebrow">${escapeHtml(t("organizeBoardTitle"))}</p>
              <h2 class="organize-stage__title">${escapeHtml(t("workspaceTitles.organize"))}</h2>
              <p class="organize-stage__copy">${escapeHtml(t("workspaceSubtitles.organize"))}</p>
            </div>
            <div class="toolbar-inline">
              <button class="ghost-button" data-nav-home>${escapeHtml(t("backHome"))}</button>
              <button class="ghost-button" data-action="browse-main">${escapeHtml(t("addPdf"))}</button>
              <button class="ghost-button" data-action="browse-insert">${escapeHtml(t("addBetween"))}</button>
              <button class="ghost-button" data-action="clear-tool" data-tool-clear="organize">${escapeHtml(t("clearAll"))}</button>
            </div>
          </div>
          <div class="organize-drop-banner" id="commonDrop" data-drop-context="organize">
            <div class="organize-drop-banner__badge">PDF</div>
            <div class="organize-drop-banner__copy">
              <p class="eyebrow">${escapeHtml(t("organizeDropEyebrow"))}</p>
              <span>${escapeHtml(t("organizeDropTitle"))}</span>
              <strong>${escapeHtml(t("organizeDropCopy"))}</strong>
              <small>${escapeHtml(t("organizeDropHint"))}</small>
            </div>
            <button class="primary-button" data-action="browse-main" type="button">${escapeHtml(t("addPdf"))}</button>
          </div>
          <div class="organize-stage__board">
            ${
              pageItems.length === 0
                ? `<div class="workspace-placeholder"><p>${escapeHtml(t("emptyStates.organize"))}</p></div>`
                : `
                  <div class="organize-canvas">
                    <aside class="organize-pages-rail">
                      <div class="organize-pages-rail__head">
                        <div>
                          <strong>${escapeHtml(t("editThumbsTitle"))}</strong>
                          <span>${pageItems.length} ${pageUnit(pageItems.length)}</span>
                        </div>
                        <div class="organize-pages-rail__meta">
                          <span>${escapeHtml(
                            selectedCount > 0
                              ? langText(`${selectedCount} secili`, `${selectedCount} selected`)
                              : langText("Sayfa sec", "Select pages")
                          )}</span>
                          <div class="organize-pages-rail__actions">
                            <button class="ghost-button" data-action="browse-insert" type="button">${escapeHtml(t("addBetween"))}</button>
                            <button class="ghost-button" data-action="delete-selected-organize-pages" type="button">${escapeHtml(
                              langText("Secilileri sil", "Delete selected")
                            )}</button>
                          </div>
                        </div>
                      </div>
                      <div id="organizeThumbStrip" class="edit-thumb-strip edit-thumb-strip--rail organize-thumb-strip"></div>
                    </aside>
                    <div class="organize-canvas__board">
                      <div id="organizeBoard" class="organize-board organize-board--compact">${renderOrganizeBoard()}</div>
                    </div>
                  </div>
                `
            }
          </div>
        </section>
        <aside class="organize-sidebar">
          <div class="organize-sidebar__section">
            <div class="organize-sidebar__head">
              <h3>${escapeHtml(t("workspaceTitles.organize"))}</h3>
              <button class="topbar__hint" data-action="clear-tool" data-tool-clear="organize" type="button">${escapeHtml(t("clearAll"))}</button>
            </div>
            <p class="organize-sidebar__label">${escapeHtml(langText("Dosyalar", "Files"))}</p>
            <div class="organize-file-list">
              ${
                fileSummaries.length === 0
                  ? `<div class="organize-file-row is-empty">${escapeHtml(langText("Henuz dosya yok", "No file loaded yet"))}</div>`
                  : fileSummaries
                      .map(
                        (file) => `
                          <div class="organize-file-row">
                            <span class="organize-file-row__name">${escapeHtml(file.name)}</span>
                            <span class="organize-file-row__meta">${file.count} ${pageUnit(file.count)}</span>
                          </div>
                        `
                      )
                      .join("")
              }
            </div>
          </div>
          <div class="organize-sidebar__section">
            <p class="organize-sidebar__label">${escapeHtml(t("organizePreviewTitle"))}</p>
            <div class="preview-canvas-shell preview-canvas-shell--small">
              <canvas id="organizePreviewCanvas" aria-label="${escapeHtml(t("previewAlt"))}"></canvas>
            </div>
            ${
              selectedPage
                ? `<div class="mini-meta"><strong>${escapeHtml(selectedPage.label)}</strong><span>${escapeHtml(
                    selectedPage.docName
                  )}</span></div>`
                : `<div class="mini-meta"><span>${escapeHtml(langText("Onizlemek icin bir sayfa sec", "Select a page to preview"))}</span></div>`
            }
          </div>
          <div class="organize-sidebar__section">
            <p class="organize-sidebar__label">${escapeHtml(t("statusTitle"))}</p>
            <ol id="statusFeed" class="status-feed"></ol>
          </div>
          ${renderOutputCard("organize")}
          <button id="runToolButton" class="primary-button primary-button--block primary-button--danger" data-action="run-tool">
            ${escapeHtml(t("runLabels.organize"))}
          </button>
        </aside>
      </div>
    `;
  }

  function renderSplitWorkspace() {
    const doc = getDoc(state.split.docId);
    const groups = safeComputeSplitGroups();
    return `
      <div class="workspace-shell">
        ${renderCommonAside("split")}
        <section class="workspace-shell__main workspace-shell__main--split">
          <div class="workspace-panel workspace-panel--span-2">
            <div class="workspace-panel__header">
              <div>
                <p class="eyebrow">${escapeHtml(t("splitBoardTitle"))}</p>
                <span>${doc ? `${doc.pageCount} ${pageUnit(doc.pageCount)}` : ""}</span>
              </div>
            </div>
            <div class="workspace-panel__body">
              ${
                !doc
                  ? `<div class="workspace-placeholder"><p>${escapeHtml(t("emptyStates.split"))}</p></div>`
                  : `<div id="splitVisual" class="split-grid">${renderSplitGrid(doc, groups)}</div>`
              }
            </div>
          </div>
          <div class="workspace-panel">
            <div class="workspace-panel__header">
              <p class="eyebrow">${escapeHtml(t("splitSettingsTitle"))}</p>
            </div>
            <div class="workspace-panel__body">
              ${renderSplitSettings()}
            </div>
          </div>
        </section>
        <aside class="workspace-shell__actions">
          <div class="card">
            <p class="card__title">${escapeHtml(t("summaryTitle"))}</p>
            <p class="card__copy">${groups.length} ${escapeHtml(langText("cikti", "outputs"))}</p>
            <div class="card__list">
              ${groups.map((group, index) => `<span>#${index + 1}: ${escapeHtml(group.label)}</span>`).join("")}
            </div>
          </div>
          ${renderOutputCard("split")}
          <div class="card card--cta">
            <button id="runToolButton" class="primary-button primary-button--block" data-action="run-tool">
              ${escapeHtml(t("runLabels.split"))}
            </button>
          </div>
        </aside>
      </div>
    `;
  }

  function renderEditWorkspace() {
    const doc = getDoc(state.edit.docId);
    const output = state.outputs.edit;
    const selectedOverlay = getSelectedOverlay();
    const currentText = selectedOverlay && (selectedOverlay.type === "text" || selectedOverlay.type === "comment") ? selectedOverlay.text : "";
    const currentFont = selectedOverlay && selectedOverlay.fontSize ? selectedOverlay.fontSize : state.edit.defaults.fontSize;
    const currentColor = selectedOverlay && selectedOverlay.color ? selectedOverlay.color : state.edit.defaults.color;
    const currentFontFamily = selectedOverlay && selectedOverlay.fontFamily ? selectedOverlay.fontFamily : state.edit.defaults.fontFamily;
    const currentFontStyle = selectedOverlay && selectedOverlay.fontStyle ? selectedOverlay.fontStyle : state.edit.defaults.fontStyle;
    const fontFamilies = [
      { value: "helvetica", label: langText("Sans", "Sans") },
      { value: "times", label: langText("Serif", "Serif") },
      { value: "courier", label: langText("Mono", "Mono") },
    ];
    const fontStyles = [
      { value: "regular", label: langText("Regular", "Regular") },
      { value: "bold", label: langText("Bold", "Bold") },
      { value: "italic", label: langText("Italic", "Italic") },
      { value: "boldItalic", label: langText("Bold Italic", "Bold Italic") },
    ];

    return `
      <div class="edit-pro-shell${doc ? "" : " is-empty"}">
        <header class="edit-ribbon">
          <div class="edit-ribbon__row">
            <div class="edit-ribbon__group">
              <span class="edit-ribbon__label">${escapeHtml(langText("Dosya", "File"))}</span>
              <button class="ghost-button" data-action="browse-main" type="button">${escapeHtml(t("uploadPdf"))}</button>
              <button class="primary-button" data-action="run-tool" type="button">${escapeHtml(langText("Kaydet PDF", "Save PDF"))}</button>
              ${
                output
                  ? `<button class="ghost-button" data-action="download-output" data-tool-output="edit" type="button">${escapeHtml(
                      t("outputDownload")
                    )}</button>`
                  : ""
              }
            </div>
            <div class="edit-ribbon__group">
              <span class="edit-ribbon__label">${escapeHtml(langText("Araclar", "Tools"))}</span>
              ${Object.keys(t("editTools"))
                .map(
                  (toolName) => `
                    <button
                      class="ghost-button edit-ribbon__tool${state.edit.tool === toolName ? " is-active-tool" : ""}"
                      data-action="set-edit-tool"
                      data-edit-tool="${toolName}"
                      type="button"
                    >
                      ${escapeHtml(t(`editTools.${toolName}`))}
                    </button>
                  `
                )
                .join("")}
            </div>
            <div class="edit-ribbon__group">
              <span class="edit-ribbon__label">${escapeHtml(langText("Secim", "Selection"))}</span>
              <button class="ghost-button" data-action="replace-selected-text" type="button">${escapeHtml(
                langText("Secimi degistir", "Replace selection")
              )}</button>
              <button class="ghost-button" data-action="delete-selected-text" type="button">${escapeHtml(
                langText("Secili metni sil", "Delete selected text")
              )}</button>
              <button class="ghost-button" data-action="delete-overlay" type="button">${escapeHtml(
                langText("Katmani sil", "Delete layer")
              )}</button>
            </div>
          </div>
          <div class="edit-ribbon__row edit-ribbon__row--fields">
            <label class="edit-ribbon__field edit-ribbon__field--text">
              <span>${escapeHtml(langText("Icerik", "Content"))}</span>
              <textarea
                class="field__input field__input--compact"
                rows="2"
                placeholder="${escapeHtml(
                  langText(
                    "Bir text veya comment katmani secip icerigi duzenle",
                    "Select a text or comment layer to edit its content"
                  )
                )}"
                data-setting="edit-overlay-text"
              >${escapeHtml(currentText)}</textarea>
            </label>
            <label class="edit-ribbon__field">
              <span>${escapeHtml(langText("Font", "Font"))}</span>
              <select class="field__input field__input--compact" data-setting="edit-font-family">
                ${fontFamilies
                  .map(
                    (item) => `
                      <option value="${item.value}"${currentFontFamily === item.value ? " selected" : ""}>${escapeHtml(item.label)}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="edit-ribbon__field">
              <span>${escapeHtml(langText("Stil", "Style"))}</span>
              <select class="field__input field__input--compact" data-setting="edit-font-style">
                ${fontStyles
                  .map(
                    (item) => `
                      <option value="${item.value}"${currentFontStyle === item.value ? " selected" : ""}>${escapeHtml(item.label)}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="edit-ribbon__field edit-ribbon__field--xs">
              <span>${escapeHtml(t("editFontLabel"))}</span>
              <input class="field__input field__input--compact" type="number" min="8" max="120" value="${currentFont}" data-setting="edit-font-size" />
            </label>
            <label class="edit-ribbon__field edit-ribbon__field--xs">
              <span>${escapeHtml(t("editColorLabel"))}</span>
              <input class="field__input field__input--color" type="color" value="${currentColor}" data-setting="edit-color" />
            </label>
          </div>
        </header>
        ${
          !doc
            ? `
              <div class="edit-empty-stage">
                <div class="drop-zone drop-zone--editor" id="commonDrop" data-drop-context="edit">
                  <div class="drop-zone__badge">PDF</div>
                  <p class="eyebrow">${escapeHtml(t("commonDropEyebrow"))}</p>
                  <strong>${escapeHtml(t("commonDropTitle"))}</strong>
                  <span>${escapeHtml(t("commonDropCopy"))}</span>
                  <small>${escapeHtml(t("commonDropHint"))}</small>
                  <button class="primary-button" data-action="browse-main" type="button">${escapeHtml(t("uploadPdf"))}</button>
                </div>
              </div>
            `
            : `
              <div class="edit-pro-body">
                <aside class="edit-rail">
                  <div class="edit-rail__head">
                    <strong>${escapeHtml(t("editThumbsTitle"))}</strong>
                    <span>${doc.pageCount} ${pageUnit(doc.pageCount)}</span>
                  </div>
                  <div id="editThumbStrip" class="edit-thumb-strip edit-thumb-strip--rail"></div>
                </aside>
                <section class="edit-canvas-stage">
                  <div class="edit-canvas-stage__top">
                    <div>
                      <p class="eyebrow">${escapeHtml(t("editCanvasTitle"))}</p>
                      <span>${escapeHtml(t("editOverlayHint"))}</span>
                    </div>
                    <div class="edit-canvas-stage__page">${state.edit.currentPage} / ${doc.pageCount}</div>
                  </div>
                  <div id="editorCanvasHost" class="editor-stage-shell editor-stage-shell--pro">
                    <canvas id="editorCanvas" aria-label="${escapeHtml(t("previewAlt"))}"></canvas>
                    <div id="editorTextLayer" class="editor-text-layer"></div>
                    <div id="editorOverlayLayer" class="editor-overlay-layer"></div>
                  </div>
                </section>
              </div>
            `
        }
        <footer class="edit-statusbar">
          <div class="edit-statusbar__summary">
            <strong>${escapeHtml(langText("Durum", "Status"))}</strong>
            <span>${escapeHtml(
              doc
                ? langText(
                    "PDF sahnesinde text secip Delete ile sil, Text ile yeni yazi ekle.",
                    "Select text on the PDF stage and press Delete, or use Text to add new copy."
                  )
                : langText("Editor icin bir PDF yukleyin.", "Upload a PDF to start editing.")
            )}</span>
          </div>
          <div class="edit-statusbar__actions">
            ${
              output
                ? `
                  <button class="primary-button" data-action="download-output" data-tool-output="edit" type="button">${escapeHtml(
                    t("outputDownload")
                  )}</button>
                  ${
                    output.reusable
                      ? `<button class="ghost-button" data-action="reuse-output" data-tool-output="edit" type="button">${escapeHtml(
                          t("outputReuse")
                        )}</button>`
                      : ""
                  }
                `
                : `<button class="primary-button" data-action="run-tool" type="button">${escapeHtml(t("runLabels.edit"))}</button>`
            }
          </div>
          <ol id="statusFeed" class="status-feed status-feed--compact"></ol>
        </footer>
      </div>
    `;
  }

  function renderOrganizeBoard() {
    const stacks = state.organize.pageItems.map(
      (item, index) => `
        <div
          class="organize-stack${state.organize.dropIndicatorIndex === index ? " is-drop-zone" : ""}"
          data-organize-stack-index="${index}"
        >
          ${renderInsertSlot(index)}
          ${renderOrganizePageCard(item, index)}
        </div>
      `
    );
    stacks.push(`
      <div
        class="organize-stack organize-stack--end${state.organize.dropIndicatorIndex === state.organize.pageItems.length ? " is-drop-zone" : ""}"
        data-organize-stack-index="${state.organize.pageItems.length}"
      >
        ${renderInsertSlot(state.organize.pageItems.length)}
      </div>
    `);
    return stacks.join("");
  }

  function renderInsertSlot(index) {
    return `
      <button
        class="insert-slot${state.organize.selectedInsertIndex === index ? " is-selected" : ""}${
          state.organize.dropIndicatorIndex === index ? " is-drop-target" : ""
        }"
        data-action="select-insert-slot"
        data-insert-index="${index}"
        type="button"
      >
        <span>+</span>
        <small>${escapeHtml(t("insertSlot"))}</small>
      </button>
    `;
  }

  function renderOrganizePageCard(item, index) {
    const isSelected = state.organize.selectedPageIds.includes(item.id);
    const isPrimary = state.organize.selectedPageId === item.id;
    const isDragging = state.organize.dragPageIds.includes(item.id);
    return `
      <article
        class="page-card${isSelected ? " is-selected" : ""}${isPrimary ? " is-primary" : ""}${isDragging ? " is-dragging" : ""}"
        draggable="true"
        data-page-card="${item.id}"
        data-page-index="${index}"
        data-action="select-organize-page"
        data-page-id="${item.id}"
        aria-selected="${isSelected ? "true" : "false"}"
      >
        <div class="page-card__thumb">
          <img id="thumb-${item.id}" alt="" draggable="false" />
        </div>
        <div class="page-card__meta">
          <strong>${escapeHtml(item.numberLabel)}</strong>
          <span>${escapeHtml(item.docName)}</span>
        </div>
        <div class="page-card__actions">
          <button
            class="ghost-button"
            data-action="rotate-organize-page"
            data-page-id="${item.id}"
            type="button"
            title="${escapeHtml(t("organizeRotate"))}"
            aria-label="${escapeHtml(t("organizeRotate"))}"
          >R</button>
          <button
            class="ghost-button"
            data-action="remove-organize-page"
            data-page-id="${item.id}"
            type="button"
            title="${escapeHtml(t("organizeRemove"))}"
            aria-label="${escapeHtml(t("organizeRemove"))}"
          >X</button>
        </div>
      </article>
    `;
  }

  function renderOrganizeRailItem(item, index) {
    const isSelected = state.organize.selectedPageIds.includes(item.id);
    const isPrimary = state.organize.selectedPageId === item.id;
    const isDragging = state.organize.dragPageIds.includes(item.id);
    return `
      <button
        class="edit-thumb organize-rail-thumb${isSelected ? " is-selected" : ""}${isPrimary ? " is-primary" : ""}${
          isDragging ? " is-dragging" : ""
        }"
        data-action="select-organize-page"
        data-page-id="${item.id}"
        data-page-card="${item.id}"
        data-page-index="${index}"
        draggable="true"
        type="button"
      >
        <img id="rail-thumb-${item.id}" alt="" draggable="false" />
        <div class="organize-rail-thumb__meta">
          <span>${escapeHtml(item.numberLabel)}</span>
          <small>${escapeHtml(item.docName)}</small>
        </div>
      </button>
    `;
  }

  function renderSplitGrid(doc, groups) {
    return Array.from({ length: doc.pageCount }, (_, index) => {
      const pageNumber = index + 1;
      const groupIndex = groups.findIndex((group) => group.pages.includes(pageNumber));
      const isSelected = state.split.selectedPages.includes(pageNumber);
      return `
        <button
          class="split-page${isSelected ? " is-selected" : ""}"
          data-action="toggle-split-page"
          data-page-number="${pageNumber}"
        >
          <img id="split-thumb-${pageNumber}" alt="" />
          <span class="split-page__label">${pageNumber}</span>
          <span class="split-page__badge">${groupIndex > -1 ? groupIndex + 1 : "-"}</span>
        </button>
      `;
    }).join("");
  }

  function renderSplitSettings() {
    return `
      <div class="mode-switcher">
        ${Object.keys(t("splitModes"))
          .map(
            (mode) => `
              <button
                class="ghost-button${state.split.mode === mode ? " is-active-tool" : ""}"
                data-action="set-split-mode"
                data-split-mode="${mode}"
              >
                ${escapeHtml(t(`splitModes.${mode}`))}
              </button>
            `
          )
          .join("")}
      </div>
      ${
        state.split.mode === "fixed"
          ? `
            <label class="field">
              <span>${escapeHtml(t("splitFixedLabel"))}</span>
              <input class="field__input" type="number" min="1" value="${state.split.fixedCount}" data-setting="split-fixed-count" />
            </label>
          `
          : ""
      }
      ${
        state.split.mode === "custom"
          ? `
            <div class="stacked-actions">
              <button class="secondary-button" data-action="add-selection-range">${escapeHtml(t("splitAddRange"))}</button>
              <button class="ghost-button" data-action="clear-split-selection">${escapeHtml(t("splitClearSelection"))}</button>
            </div>
            <label class="field">
              <span>${escapeHtml(t("splitManualLabel"))}</span>
              <input
                class="field__input"
                type="text"
                value="${escapeHtml(state.split.manualRanges)}"
                placeholder="${escapeHtml(t("splitManualPlaceholder"))}"
                data-setting="split-manual-ranges"
              />
            </label>
            <div class="range-list">
              <p class="eyebrow">${escapeHtml(t("splitRangesTitle"))}</p>
              ${
                state.split.savedRanges.length === 0
                  ? `<p class="mini-meta">${escapeHtml(t("splitSelectionLabel"))}</p>`
                  : state.split.savedRanges
                      .map(
                        (range, index) => `
                          <button class="range-chip" data-action="remove-range" data-range-index="${index}">
                            ${escapeHtml(range.label)}
                          </button>
                        `
                      )
                      .join("")
              }
            </div>
          `
          : ""
      }
      ${
        state.split.mode === "extract"
          ? `
            <div class="stacked-actions">
              <button class="ghost-button" data-action="clear-split-selection">${escapeHtml(t("splitClearSelection"))}</button>
            </div>
            <label class="toggle-row">
              <input type="checkbox" ${state.split.mergeExtracted ? "checked" : ""} data-setting="split-merge-extracted" />
              <span>${escapeHtml(t("splitMergeExtracted"))}</span>
            </label>
          `
          : ""
      }
    `;
  }

  function renderEditInspector() {
    const overlay = getSelectedOverlay();
    const currentText = overlay && (overlay.type === "text" || overlay.type === "comment") ? overlay.text : "";
    const currentFont = overlay && overlay.fontSize ? overlay.fontSize : state.edit.defaults.fontSize;
    const currentColor = overlay && overlay.color ? overlay.color : state.edit.defaults.color;
    return `
      <div class="field">
        <span>${escapeHtml(t("editTextLabel"))}</span>
        <textarea class="field__input" rows="4" data-setting="edit-overlay-text">${escapeHtml(currentText)}</textarea>
      </div>
      <div class="field">
        <span>${escapeHtml(t("editFontLabel"))}</span>
        <input class="field__input" type="number" min="10" max="72" value="${currentFont}" data-setting="edit-font-size" />
      </div>
      <div class="field">
        <span>${escapeHtml(t("editColorLabel"))}</span>
        <input class="field__input field__input--color" type="color" value="${currentColor}" data-setting="edit-color" />
      </div>
      <button class="ghost-button ghost-button--block" data-action="delete-overlay">${escapeHtml(t("deleteLayer"))}</button>
    `;
  }

  function syncView() {
    const isToolRoute = Boolean(getActiveTool());
    elements.homeView.classList.toggle("view--active", !isToolRoute);
    elements.workspaceView.classList.toggle("view--active", isToolRoute);
  }

  function afterRender() {
    renderStatusFeed();
    if (getActiveTool() === "merge") {
      renderMergePreview();
    }
    if (getActiveTool() === "organize") {
      renderOrganizeThumbStrip();
      renderOrganizeThumbnails();
      renderOrganizePreview();
      refreshOrganizeDropFeedback();
    }
    if (getActiveTool() === "split") {
      renderSplitThumbnails();
    }
    if (getActiveTool() === "edit") {
      renderEditThumbs();
      renderEditorStage();
    }
  }

  async function handleClick(event) {
    const langButton = event.target.closest("[data-lang]");
    if (langButton) {
      event.preventDefault();
      setLanguage(langButton.dataset.lang);
      return;
    }

    const navTool = event.target.closest("[data-nav-tool]");
    if (navTool) {
      event.preventDefault();
      navigateToTool(navTool.dataset.navTool);
      return;
    }

    if (event.target.closest("[data-nav-home]")) {
      event.preventDefault();
      navigateHome();
      return;
    }

    if (event.target.closest("[data-hook='openHelp']")) {
      event.preventDefault();
      openModal(t("helpText"));
      return;
    }

    if (event.target.closest("[data-hook='closeModal']")) {
      event.preventDefault();
      closeModal();
      return;
    }

    const actionNode = event.target.closest("[data-action]");
    if (!actionNode) {
      return;
    }

    event.preventDefault();

    switch (actionNode.dataset.action) {
      case "browse-main":
        elements.mainFileInput.multiple = ["merge", "organize"].includes(getActiveTool());
        elements.mainFileInput.click();
        break;
      case "browse-insert":
        elements.insertFileInput.multiple = true;
        elements.insertFileInput.click();
        break;
      case "run-tool":
        await runActiveTool();
        break;
      case "clear-tool":
        clearToolState(actionNode.dataset.toolClear);
        break;
      case "download-output":
        await downloadToolOutput(actionNode.dataset.toolOutput);
        break;
      case "reuse-output":
        await reuseToolOutput(actionNode.dataset.toolOutput);
        break;
      case "merge-select-doc":
        state.merge.previewDocId = actionNode.dataset.docId;
        render();
        break;
      case "remove-merge-doc":
        removeMergeDoc(actionNode.dataset.docId);
        break;
      case "select-insert-slot":
        state.organize.selectedInsertIndex = Number(actionNode.dataset.insertIndex);
        state.organize.dropIndicatorIndex = null;
        render();
        elements.insertFileInput.multiple = true;
        elements.insertFileInput.click();
        break;
      case "select-organize-page":
        selectOrganizePage(actionNode.dataset.pageId, {
          shiftKey: event.shiftKey,
          toggleKey: event.ctrlKey || event.metaKey,
        });
        break;
      case "remove-organize-page":
        removeOrganizePage(actionNode.dataset.pageId);
        break;
      case "rotate-organize-page":
        rotateOrganizePage(actionNode.dataset.pageId);
        break;
      case "delete-selected-organize-pages":
        removeSelectedOrganizePages();
        break;
      case "set-split-mode":
        state.split.mode = actionNode.dataset.splitMode;
        invalidateOutput("split");
        render();
        break;
      case "toggle-split-page":
        toggleSplitPage(Number(actionNode.dataset.pageNumber));
        break;
      case "add-selection-range":
        addSplitSelectionAsRange();
        break;
      case "clear-split-selection":
        state.split.selectedPages = [];
        invalidateOutput("split");
        render();
        break;
      case "remove-range":
        state.split.savedRanges.splice(Number(actionNode.dataset.rangeIndex), 1);
        invalidateOutput("split");
        render();
        break;
      case "set-edit-tool":
        state.edit.tool = actionNode.dataset.editTool;
        state.edit.selectedOverlayId = null;
        clearBrowserSelection();
        render();
        break;
      case "set-edit-page":
        state.edit.currentPage = Number(actionNode.dataset.editPage);
        state.edit.selectedOverlayId = null;
        clearBrowserSelection();
        render();
        break;
      case "delete-selected-text":
        eraseCurrentTextSelection();
        break;
      case "replace-selected-text":
        replaceCurrentTextSelection();
        break;
      case "delete-overlay":
        deleteSelectedOverlay();
        break;
      default:
        break;
    }
  }

  function handleChange(event) {
    const setting = event.target.dataset.setting;
    if (!setting) {
      return;
    }

    switch (setting) {
      case "split-fixed-count":
        state.split.fixedCount = clamp(Number(event.target.value) || 1, 1, 500);
        invalidateOutput("split");
        render();
        break;
      case "split-merge-extracted":
        state.split.mergeExtracted = event.target.checked;
        invalidateOutput("split");
        render();
        break;
      case "edit-font-size":
        {
          const fontSize = clamp(Number(event.target.value) || 22, 8, 120);
          state.edit.defaults.fontSize = fontSize;
          if (!updateSelectedOverlay((overlay) => {
            overlay.fontSize = fontSize;
          })) {
            render();
          }
        }
        break;
      case "edit-font-family":
        state.edit.defaults.fontFamily = event.target.value;
        if (
          !updateSelectedOverlay((overlay) => {
            overlay.fontFamily = event.target.value;
          })
        ) {
          render();
        }
        break;
      case "edit-font-style":
        state.edit.defaults.fontStyle = event.target.value;
        if (
          !updateSelectedOverlay((overlay) => {
            overlay.fontStyle = event.target.value;
          })
        ) {
          render();
        }
        break;
      case "edit-color":
        state.edit.defaults.color = event.target.value;
        if (!updateSelectedOverlay((overlay) => {
          overlay.color = event.target.value;
        })) {
          render();
        }
        break;
      default:
        break;
    }
  }

  function handleInput(event) {
    const setting = event.target.dataset.setting;
    if (!setting) {
      return;
    }

    switch (setting) {
      case "split-manual-ranges":
        state.split.manualRanges = event.target.value;
        invalidateOutput("split");
        break;
      case "edit-overlay-text":
        updateSelectedOverlay((overlay) => {
          overlay.text = event.target.value;
        });
        break;
      default:
        break;
    }
  }

  function handleDragStart(event) {
    const interactiveTarget = event.target.closest("button, input, textarea, select, label");
    const mergeCard = event.target.closest("[data-merge-doc]");
    if (mergeCard) {
      if (interactiveTarget && interactiveTarget !== mergeCard && mergeCard.contains(interactiveTarget)) {
        event.preventDefault();
        return;
      }
      state.merge.dragDocId = mergeCard.dataset.mergeDoc;
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", state.merge.dragDocId);
        event.dataTransfer.effectAllowed = "move";
      }
      return;
    }

    const pageCard = event.target.closest("[data-page-card]");
    if (pageCard) {
      if (interactiveTarget && interactiveTarget !== pageCard && pageCard.contains(interactiveTarget)) {
        event.preventDefault();
        return;
      }
      const pageId = pageCard.dataset.pageCard;
      if (!state.organize.selectedPageIds.includes(pageId)) {
        state.organize.selectedPageId = pageId;
        state.organize.selectedPageIds = [pageId];
        state.organize.lastSelectedPageId = pageId;
      }
      state.organize.dragPageId = pageId;
      state.organize.dragPageIds = state.organize.selectedPageIds.includes(pageId)
        ? [...state.organize.selectedPageIds]
        : [pageId];
      state.organize.dropIndicatorIndex = getPageIndexById(pageId);
      refreshOrganizeDropFeedback();
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", state.organize.dragPageId);
        event.dataTransfer.effectAllowed = "move";
      }
    }
  }

  function handleDragOver(event) {
    const tool = getActiveTool();
    if (tool === "merge" && event.target.closest("[data-merge-doc]")) {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    }

    if (tool === "organize") {
      const organizeIndex = resolveOrganizeDropIndex(event);
      if (organizeIndex !== null) {
        event.preventDefault();
        if (event.dataTransfer) {
          const hasFilePayload =
            Array.from(event.dataTransfer.items || []).some((item) => item.kind === "file") ||
            Array.from(event.dataTransfer.types || []).includes("Files");
          event.dataTransfer.dropEffect = hasFilePayload ? "copy" : "move";
        }
        if (state.organize.dropIndicatorIndex !== organizeIndex) {
          state.organize.dropIndicatorIndex = organizeIndex;
          refreshOrganizeDropFeedback();
        }
      } else if (state.organize.dropIndicatorIndex !== null) {
        state.organize.dropIndicatorIndex = null;
        refreshOrganizeDropFeedback();
      }
    }

    if (event.target.closest("#commonDrop")) {
      event.preventDefault();
    }
  }

  async function handleDrop(event) {
    const tool = getActiveTool();
    const files = Array.from(event.dataTransfer?.files || []).filter((file) => isPdfFile(file));

    const commonDrop = event.target.closest("#commonDrop");
    if (commonDrop) {
      event.preventDefault();
      if (tool === "organize" && state.organize.pageItems.length > 0) {
        await handleInsertUpload(files);
        return;
      }
      await handleToolUpload(files, tool);
      return;
    }

    if (tool === "merge") {
      const target = event.target.closest("[data-merge-doc]");
      if (!target || !state.merge.dragDocId) {
        return;
      }
      event.preventDefault();
      reorderMergeDocs(state.merge.dragDocId, target.dataset.mergeDoc);
      return;
    }

    if (tool === "organize") {
      const targetIndex = resolveOrganizeDropIndex(event);
      if (targetIndex !== null && files.length > 0) {
        event.preventDefault();
        state.organize.selectedInsertIndex = targetIndex;
        state.organize.dropIndicatorIndex = null;
        await handleInsertUpload(files);
        return;
      }

      if (targetIndex !== null && state.organize.dragPageId) {
        event.preventDefault();
        moveOrganizePage(state.organize.dragPageId, targetIndex);
        return;
      }
    }
  }

  function handleDragEnd() {
    state.merge.dragDocId = null;
    clearOrganizeDragState();
  }

  function handlePointerDown(event) {
    if (getActiveTool() !== "edit") {
      return;
    }

    const overlayNode = event.target.closest("[data-overlay-id]");
    if (overlayNode && state.edit.tool === "select") {
      const overlayId = overlayNode.dataset.overlayId;
      state.edit.selectedOverlayId = overlayId;
      const rect = getEditorRect();
      const overlay = getSelectedOverlay();
      if (!overlay || !rect) {
        return;
      }
      const point = getStagePoint(event, rect);
      state.edit.dragOverlay = {
        overlayId,
        offsetX: point.x - overlay.x,
        offsetY: point.y - overlay.y,
      };
      render();
      return;
    }

    const stage = event.target.closest("#editorCanvasHost");
    if (!stage || !state.edit.docId) {
      return;
    }

    const rect = getEditorRect();
    if (!rect) {
      return;
    }
    const point = getStagePoint(event, rect);

    if (state.edit.tool === "text") {
      createOverlay("text", point);
      return;
    }

    if (state.edit.tool === "comment") {
      createOverlay("comment", point);
      return;
    }

    if (state.edit.tool === "highlight" || state.edit.tool === "erase") {
      state.edit.draftRect = {
        type: state.edit.tool,
        startX: point.x,
        startY: point.y,
        endX: point.x,
        endY: point.y,
      };
      renderEditorStage();
    }
  }

  function handlePointerMove(event) {
    if (getActiveTool() !== "edit") {
      return;
    }

    const rect = getEditorRect();
    if (!rect) {
      return;
    }

    if (state.edit.dragOverlay) {
      const point = getStagePoint(event, rect);
      const overlay = getSelectedOverlay();
      if (!overlay) {
        return;
      }
      overlay.x = clamp(point.x - state.edit.dragOverlay.offsetX, 0, 0.95);
      overlay.y = clamp(point.y - state.edit.dragOverlay.offsetY, 0, 0.95);
      renderEditorStage();
      return;
    }

    if (state.edit.draftRect) {
      const point = getStagePoint(event, rect);
      state.edit.draftRect.endX = point.x;
      state.edit.draftRect.endY = point.y;
      renderEditorStage();
    }
  }

  function handlePointerUp() {
    if (getActiveTool() !== "edit") {
      return;
    }

    if (state.edit.dragOverlay) {
      state.edit.dragOverlay = null;
      return;
    }

    if (state.edit.draftRect) {
      commitDraftRect();
    }
  }

  function handleKeyDown(event) {
    const tool = getActiveTool();
    const target = event.target;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) {
      return;
    }

    if (tool === "organize" && (event.key === "Delete" || event.key === "Backspace")) {
      if (removeSelectedOrganizePages()) {
        event.preventDefault();
      }
      return;
    }

    if (tool !== "edit") {
      return;
    }

    if (event.key === "Delete" || event.key === "Backspace") {
      if (eraseCurrentTextSelection()) {
        event.preventDefault();
        return;
      }

      if (getSelectedOverlay()) {
        event.preventDefault();
        deleteSelectedOverlay();
      }
    }
  }

  function renderStatusFeed() {
    const feed = document.getElementById("statusFeed");
    if (!feed) {
      return;
    }

    feed.innerHTML = state.statusItems
      .slice(0, 8)
      .map((item) => `<li class="status-${item.tone}">${escapeHtml(item.message)}</li>`)
      .join("");
  }

  async function handleToolUpload(files, toolId) {
    if (!toolId) {
      return;
    }
    const pdfFiles = files.filter((file) => isPdfFile(file));
    if (pdfFiles.length === 0) {
      return;
    }

    try {
      setBusy(true);
      if (toolId === "merge") {
        invalidateOutput("merge");
        for (const file of pdfFiles) {
          const doc = await loadPdfDocument(file);
          state.merge.docIds.push(doc.id);
          if (!state.merge.previewDocId) {
            state.merge.previewDocId = doc.id;
          }
          logStatus(format(t("statusLoaded"), { name: doc.name }), "info");
        }
      }

      if (toolId === "organize") {
        invalidateOutput("organize");
        let startIndex = state.organize.selectedInsertIndex;
        for (const file of pdfFiles) {
          const doc = await loadPdfDocument(file);
          const pageItems = buildPageItemsFromDoc(doc);
          insertPageItems(startIndex, pageItems);
          if (pageItems[0]) {
            state.organize.selectedPageId = pageItems[0].id;
            state.organize.selectedPageIds = [pageItems[0].id];
            state.organize.lastSelectedPageId = pageItems[0].id;
          }
          startIndex += pageItems.length;
          state.organize.selectedInsertIndex = startIndex;
          state.organize.dropIndicatorIndex = null;
          logStatus(format(t("statusLoaded"), { name: doc.name }), "info");
        }
      }

      if (toolId === "split") {
        invalidateOutput("split");
        const doc = await loadPdfDocument(pdfFiles[0]);
        state.split.docId = doc.id;
        state.split.selectedPages = [];
        state.split.savedRanges = [];
        state.split.manualRanges = "";
        logStatus(format(t("statusLoaded"), { name: doc.name }), "info");
      }

      if (toolId === "edit") {
        invalidateOutput("edit");
        const doc = await loadPdfDocument(pdfFiles[0]);
        state.edit.docId = doc.id;
        state.edit.currentPage = 1;
        state.edit.tool = "select";
        state.edit.overlaysByPage = {};
        state.edit.selectedOverlayId = null;
        state.edit.dragOverlay = null;
        state.edit.draftRect = null;
        logStatus(format(t("statusLoaded"), { name: doc.name }), "info");
      }
    } catch (error) {
      console.error(error);
      logStatus(error.message || t("statusError"), "error");
    } finally {
      setBusy(false);
      render();
    }
  }

  async function handleInsertUpload(files) {
    const pdfFiles = files.filter((file) => isPdfFile(file));
    if (pdfFiles.length === 0) {
      return;
    }

    try {
      setBusy(true);
      invalidateOutput("organize");
      let insertIndex = state.organize.selectedInsertIndex;
      let firstInsertedPageId = null;
      for (const file of pdfFiles) {
        const doc = await loadPdfDocument(file);
        const pageItems = buildPageItemsFromDoc(doc);
        insertPageItems(insertIndex, pageItems);
        if (!firstInsertedPageId && pageItems[0]) {
          firstInsertedPageId = pageItems[0].id;
        }
        insertIndex += pageItems.length;
        logStatus(format(t("statusInserted"), { name: doc.name }), "success");
      }
      if (firstInsertedPageId) {
        state.organize.selectedPageId = firstInsertedPageId;
        state.organize.selectedPageIds = [firstInsertedPageId];
        state.organize.lastSelectedPageId = firstInsertedPageId;
      }
      state.organize.selectedInsertIndex = insertIndex;
      state.organize.dropIndicatorIndex = null;
    } catch (error) {
      console.error(error);
      logStatus(error.message || t("statusError"), "error");
    } finally {
      setBusy(false);
      render();
    }
  }

  async function runActiveTool() {
    const toolId = getActiveTool();
    if (!toolId) {
      return;
    }

    try {
      setBusy(true);
      if (toolId === "merge") {
        await exportMergedPdf();
      }
      if (toolId === "organize") {
        await exportOrganizedPdf();
      }
      if (toolId === "split") {
        await exportSplitPdf();
      }
      if (toolId === "edit") {
        await exportEditedPdf();
      }
      render();
    } catch (error) {
      console.error(error);
      logStatus(error.message || t("statusError"), "error");
    } finally {
      setBusy(false);
    }
  }

  function clearToolState(toolId) {
    if (toolId === "merge") {
      state.merge.docIds = [];
      state.merge.previewDocId = null;
      state.merge.dragDocId = null;
      state.outputs.merge = null;
    }
    if (toolId === "organize") {
      state.organize.pageItems = [];
      state.organize.selectedPageId = null;
      state.organize.selectedPageIds = [];
      state.organize.lastSelectedPageId = null;
      state.organize.dragPageId = null;
      state.organize.dragPageIds = [];
      state.organize.selectedInsertIndex = 0;
      state.organize.dropIndicatorIndex = null;
      state.outputs.organize = null;
    }
    if (toolId === "split") {
      state.split.docId = null;
      state.split.mode = "fixed";
      state.split.fixedCount = 2;
      state.split.selectedPages = [];
      state.split.savedRanges = [];
      state.split.manualRanges = "";
      state.split.mergeExtracted = true;
      state.outputs.split = null;
    }
    if (toolId === "edit") {
      state.edit.docId = null;
      state.edit.currentPage = 1;
      state.edit.tool = "select";
      state.edit.overlaysByPage = {};
      state.edit.selectedOverlayId = null;
      state.edit.dragOverlay = null;
      state.edit.draftRect = null;
      state.outputs.edit = null;
    }
    render();
  }

  function removeMergeDoc(docId) {
    state.merge.docIds = state.merge.docIds.filter((id) => id !== docId);
    if (state.merge.previewDocId === docId) {
      state.merge.previewDocId = state.merge.docIds[0] || null;
    }
    invalidateOutput("merge");
    render();
  }

  function reorderMergeDocs(fromId, toId) {
    if (fromId === toId) {
      return;
    }
    const list = [...state.merge.docIds];
    const fromIndex = list.indexOf(fromId);
    const toIndex = list.indexOf(toId);
    if (fromIndex === -1 || toIndex === -1) {
      return;
    }
    const [moved] = list.splice(fromIndex, 1);
    const targetIndex = toIndex > fromIndex ? toIndex - 1 : toIndex;
    list.splice(targetIndex, 0, moved);
    state.merge.docIds = list;
    state.merge.dragDocId = null;
    invalidateOutput("merge");
    render();
  }

  function insertPageItems(index, pageItems) {
    const list = [...state.organize.pageItems];
    list.splice(index, 0, ...pageItems);
    state.organize.pageItems = normalizeOrganizePageItems(list);
  }

  function removeOrganizePage(pageId) {
    const selectedIds = state.organize.selectedPageIds.includes(pageId) ? [...state.organize.selectedPageIds] : [pageId];
    removeOrganizePages(selectedIds);
  }

  function rotateOrganizePage(pageId) {
    const rotateIds = state.organize.selectedPageIds.includes(pageId) ? state.organize.selectedPageIds : [pageId];
    if (rotateIds.length === 0) {
      return;
    }
    const rotateSet = new Set(rotateIds);
    let didRotate = false;
    state.organize.pageItems.forEach((entry) => {
      if (rotateSet.has(entry.id)) {
        entry.rotation = (entry.rotation + 90) % 360;
        didRotate = true;
      }
    });
    if (!didRotate) {
      return;
    }
    invalidateOutput("organize");
    logStatus(t("statusRotatedPage"), "info");
    render();
  }

  function moveOrganizePage(pageId, insertIndex) {
    const list = [...state.organize.pageItems];
    const draggedIds = state.organize.dragPageIds.includes(pageId) ? [...state.organize.dragPageIds] : [pageId];
    const draggedSet = new Set(draggedIds);
    const movingItems = list.filter((item) => draggedSet.has(item.id));
    if (movingItems.length === 0) {
      return;
    }
    const normalizedInsertIndex = clamp(insertIndex, 0, list.length);
    const beforeCount = list.slice(0, normalizedInsertIndex).filter((item) => draggedSet.has(item.id)).length;
    const remainingItems = list.filter((item) => !draggedSet.has(item.id));
    const targetIndex = clamp(normalizedInsertIndex - beforeCount, 0, remainingItems.length);
    remainingItems.splice(targetIndex, 0, ...movingItems);
    state.organize.pageItems = normalizeOrganizePageItems(remainingItems);
    state.organize.selectedPageId = pageId;
    state.organize.selectedPageIds = movingItems.map((item) => item.id);
    state.organize.lastSelectedPageId = pageId;
    state.organize.selectedInsertIndex = clamp(targetIndex + movingItems.length, 0, remainingItems.length);
    clearOrganizeDragState();
    invalidateOutput("organize");
    render();
  }

  function getOrganizePageInsertIndex(pageCard, event) {
    if (!pageCard) {
      return -1;
    }

    const datasetIndex = Number(pageCard.dataset.pageIndex);
    let baseIndex = -1;
    if (Number.isInteger(datasetIndex)) {
      baseIndex = datasetIndex;
    } else {
      const pageId = pageCard.dataset.pageCard;
      if (pageId) {
        baseIndex = state.organize.pageItems.findIndex((item) => item.id === pageId);
      }
    }

    if (baseIndex === -1) {
      return -1;
    }

    if (!event) {
      return baseIndex;
    }

    const rect = pageCard.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return baseIndex;
    }

    const dropAfter = event.clientY > rect.top + rect.height * 0.58 || event.clientX > rect.left + rect.width * 0.72;
    return baseIndex + (dropAfter ? 1 : 0);
  }

  function normalizeOrganizePageItems(list) {
    return list.map((item, index) => ({
      ...item,
      order: index + 1,
      numberLabel: String(index + 1),
    }));
  }

  function getPageIndexById(pageId) {
    return state.organize.pageItems.findIndex((item) => item.id === pageId);
  }

  function selectOrganizePage(pageId, options = {}) {
    const items = state.organize.pageItems;
    const clickedIndex = items.findIndex((item) => item.id === pageId);
    if (clickedIndex === -1) {
      return;
    }

    const { shiftKey = false, toggleKey = false } = options;
    let selectedIds = [...state.organize.selectedPageIds];

    if (shiftKey) {
      const anchorId = state.organize.lastSelectedPageId || state.organize.selectedPageId || pageId;
      const anchorIndex = items.findIndex((item) => item.id === anchorId);
      const startIndex = Math.min(anchorIndex === -1 ? clickedIndex : anchorIndex, clickedIndex);
      const endIndex = Math.max(anchorIndex === -1 ? clickedIndex : anchorIndex, clickedIndex);
      const rangeIds = items.slice(startIndex, endIndex + 1).map((item) => item.id);
      selectedIds = toggleKey ? Array.from(new Set([...selectedIds, ...rangeIds])) : rangeIds;
    } else if (toggleKey) {
      selectedIds = selectedIds.includes(pageId) ? selectedIds.filter((id) => id !== pageId) : [...selectedIds, pageId];
      if (selectedIds.length === 0) {
        selectedIds = [pageId];
      }
    } else {
      selectedIds = [pageId];
    }

    const orderedSelection = items.filter((item) => selectedIds.includes(item.id)).map((item) => item.id);
    const primaryPageId = orderedSelection.includes(pageId) ? pageId : orderedSelection[orderedSelection.length - 1] || null;
    const primaryIndex = primaryPageId ? items.findIndex((item) => item.id === primaryPageId) : clickedIndex;
    state.organize.selectedPageIds = orderedSelection;
    state.organize.selectedPageId = primaryPageId;
    state.organize.lastSelectedPageId = primaryPageId;
    state.organize.selectedInsertIndex = primaryIndex + 1;
    state.organize.dropIndicatorIndex = null;
    render();
  }

  function removeSelectedOrganizePages() {
    if (state.organize.selectedPageIds.length === 0) {
      return false;
    }
    removeOrganizePages(state.organize.selectedPageIds);
    return true;
  }

  function removeOrganizePages(pageIds) {
    const pageIdSet = new Set(pageIds);
    const remainingItems = state.organize.pageItems.filter((item) => !pageIdSet.has(item.id));
    if (remainingItems.length === state.organize.pageItems.length) {
      return false;
    }
    state.organize.pageItems = normalizeOrganizePageItems(remainingItems);
    const nextSelected = remainingItems[0] ? remainingItems[0].id : null;
    state.organize.selectedPageId = nextSelected;
    state.organize.selectedPageIds = nextSelected ? [nextSelected] : [];
    state.organize.lastSelectedPageId = nextSelected;
    state.organize.selectedInsertIndex = clamp(state.organize.selectedInsertIndex, 0, remainingItems.length);
    clearOrganizeDragState();
    invalidateOutput("organize");
    logStatus(t("statusDeletedPage"), "info");
    render();
    return true;
  }

  function resolveOrganizeDropIndex(event) {
    const slot = event.target.closest("[data-insert-index]");
    if (slot) {
      return clamp(Number(slot.dataset.insertIndex), 0, state.organize.pageItems.length);
    }

    const targetPage = event.target.closest("[data-page-card]");
    if (targetPage) {
      const pageIndex = getOrganizePageInsertIndex(targetPage, event);
      return pageIndex === -1 ? null : pageIndex;
    }

    if (event.target.closest("#organizeBoard") || event.target.closest("#organizeThumbStrip") || event.target.closest(".organize-canvas__board")) {
      return state.organize.pageItems.length;
    }

    return null;
  }

  function clearOrganizeDragState(clearIndicator = true) {
    state.organize.dragPageId = null;
    state.organize.dragPageIds = [];
    if (clearIndicator) {
      state.organize.dropIndicatorIndex = null;
    }
    refreshOrganizeDropFeedback();
  }

  function refreshOrganizeDropFeedback() {
    const indicatorIndex = state.organize.dropIndicatorIndex;
    document.querySelectorAll(".insert-slot").forEach((slot) => {
      slot.classList.toggle("is-drop-target", Number(slot.dataset.insertIndex) === indicatorIndex);
    });
    document.querySelectorAll("[data-organize-stack-index]").forEach((stack) => {
      stack.classList.toggle("is-drop-zone", Number(stack.dataset.organizeStackIndex) === indicatorIndex);
    });
    document.querySelectorAll("[data-page-card]").forEach((node) => {
      const pageId = node.dataset.pageCard;
      node.classList.toggle("is-selected", state.organize.selectedPageIds.includes(pageId));
      node.classList.toggle("is-primary", state.organize.selectedPageId === pageId);
      node.classList.toggle("is-dragging", state.organize.dragPageIds.includes(pageId));
      node.setAttribute("aria-selected", state.organize.selectedPageIds.includes(pageId) ? "true" : "false");
    });
  }

  function toggleSplitPage(pageNumber) {
    if (!state.split.docId) {
      return;
    }
    if (state.split.selectedPages.includes(pageNumber)) {
      state.split.selectedPages = state.split.selectedPages.filter((value) => value !== pageNumber);
    } else {
      state.split.selectedPages = [...state.split.selectedPages, pageNumber].sort((a, b) => a - b);
    }
    invalidateOutput("split");
    render();
  }

  function addSplitSelectionAsRange() {
    const groups = compressSelectionToRanges(state.split.selectedPages);
    if (groups.length === 0) {
      return;
    }
    state.split.savedRanges.push(...groups);
    state.split.selectedPages = [];
    invalidateOutput("split");
    logStatus(t("statusRangeAdded"), "success");
    render();
  }

  function deleteSelectedOverlay() {
    const overlay = getSelectedOverlay();
    if (!overlay) {
      return;
    }
    const page = state.edit.currentPage;
    state.edit.overlaysByPage[page] = (state.edit.overlaysByPage[page] || []).filter((item) => item.id !== overlay.id);
    state.edit.selectedOverlayId = null;
    invalidateOutput("edit");
    render();
  }

  function updateSelectedOverlay(mutator) {
    const overlay = getSelectedOverlay();
    if (!overlay) {
      return false;
    }
    mutator(overlay);
    invalidateOutput("edit");
    renderEditorStage();
    return true;
  }

  function createOverlay(type, point) {
    const page = state.edit.currentPage;
    const overlay = {
      id: createId(),
      type,
      x: clamp(point.x, 0.02, 0.9),
      y: clamp(point.y, 0.02, 0.9),
      w: type === "comment" ? 0.24 : 0.22,
      h: type === "comment" ? 0.16 : 0.08,
      text: type === "comment" ? (state.lang === "tr" ? "Yorum" : "Comment") : state.lang === "tr" ? "Metin" : "Text",
      fontSize: state.edit.defaults.fontSize,
      color: state.edit.defaults.color,
      fontFamily: state.edit.defaults.fontFamily,
      fontStyle: state.edit.defaults.fontStyle,
    };
    if (!state.edit.overlaysByPage[page]) {
      state.edit.overlaysByPage[page] = [];
    }
    state.edit.overlaysByPage[page].push(overlay);
    state.edit.selectedOverlayId = overlay.id;
    state.edit.tool = "select";
    invalidateOutput("edit");
    render();
  }

  function commitDraftRect() {
    if (!state.edit.draftRect) {
      return;
    }
    const rect = normalizeRect(state.edit.draftRect);
    state.edit.draftRect = null;
    if (rect.w < 0.01 || rect.h < 0.01) {
      renderEditorStage();
      return;
    }
    const page = state.edit.currentPage;
    const overlay = {
      id: createId(),
      type: rect.type,
      x: rect.x,
      y: rect.y,
      w: rect.w,
      h: rect.h,
      color: rect.type === "highlight" ? "#f6d04d" : "#ffffff",
      opacity: rect.type === "highlight" ? 0.38 : 1,
    };
    if (!state.edit.overlaysByPage[page]) {
      state.edit.overlaysByPage[page] = [];
    }
    state.edit.overlaysByPage[page].push(overlay);
    state.edit.selectedOverlayId = overlay.id;
    state.edit.tool = "select";
    invalidateOutput("edit");
    render();
  }

  async function exportMergedPdf() {
    const docs = state.merge.docIds.map(getDoc).filter(Boolean);
    if (docs.length < 2) {
      throw new Error(state.lang === "tr" ? "Birlestirmek icin en az iki PDF ekleyin." : "Add at least two PDFs to merge.");
    }
    const outDoc = await PDFLib.PDFDocument.create();
    for (const doc of docs) {
      const source = await loadPdfLibDocument(doc, state.lang === "tr" ? "Birlestirme" : "Merge");
      const pages = await outDoc.copyPages(source, source.getPageIndices());
      pages.forEach((page) => outDoc.addPage(page));
    }
    const bytes = await outDoc.save({ useObjectStreams: true });
    registerOutput("merge", bytes, "application/pdf", "atlas-merged.pdf", t("statusMerged"));
  }

  async function exportOrganizedPdf() {
    if (state.organize.pageItems.length === 0) {
      throw new Error(state.lang === "tr" ? "Disa aktarmadan once bir PDF yukleyin." : "Load a PDF before exporting.");
    }
    const outDoc = await PDFLib.PDFDocument.create();
    const docCache = new Map();

    for (const item of state.organize.pageItems) {
      let source = docCache.get(item.docId);
      if (!source) {
        source = await loadPdfLibDocument(getDoc(item.docId), item.docName);
        docCache.set(item.docId, source);
      }
      const [page] = await outDoc.copyPages(source, [item.pageNumber - 1]);
      if (item.rotation) {
        page.setRotation(PDFLib.degrees(item.rotation));
      }
      outDoc.addPage(page);
    }

    const bytes = await outDoc.save({ useObjectStreams: true });
    registerOutput("organize", bytes, "application/pdf", "atlas-organized.pdf", t("statusOrganized"));
  }

  async function exportSplitPdf() {
    const doc = getDoc(state.split.docId);
    if (!doc) {
      throw new Error(state.lang === "tr" ? "Bolmek icin bir PDF secin." : "Choose a PDF to split.");
    }
    const source = await loadPdfLibDocument(doc, state.lang === "tr" ? "Bolme" : "Split");
    const groups = computeSplitGroups();
    if (groups.length === 0) {
      throw new Error(state.lang === "tr" ? "En az bir bolme grubu olusturun." : "Create at least one split group.");
    }

    if (groups.length === 1 && state.split.mode === "extract" && state.split.mergeExtracted) {
      const outDoc = await PDFLib.PDFDocument.create();
      const pages = await outDoc.copyPages(source, groups[0].pages.map((page) => page - 1));
      pages.forEach((page) => outDoc.addPage(page));
      const bytes = await outDoc.save({ useObjectStreams: true });
      registerOutput("split", bytes, "application/pdf", "atlas-split.pdf", t("statusSplit"));
      return;
    }

    const zip = new JSZip();
    for (let index = 0; index < groups.length; index += 1) {
      const group = groups[index];
      const outDoc = await PDFLib.PDFDocument.create();
      const pages = await outDoc.copyPages(source, group.pages.map((page) => page - 1));
      pages.forEach((page) => outDoc.addPage(page));
      const bytes = await outDoc.save({ useObjectStreams: true });
      zip.file(`atlas-split-${String(index + 1).padStart(2, "0")}.pdf`, bytes);
    }
    const blob = await zip.generateAsync({ type: "blob" });
    registerBlobOutput("split", blob, "atlas-split-bundle.zip", t("statusSplit"), false);
  }

  async function exportEditedPdf() {
    const doc = getDoc(state.edit.docId);
    if (!doc) {
      throw new Error(state.lang === "tr" ? "Duzenlemek icin bir PDF secin." : "Choose a PDF to edit.");
    }

    const outDoc = await loadPdfLibDocument(doc, state.lang === "tr" ? "Duzenleme" : "Edit");
    const pages = outDoc.getPages();
    const fontCache = new Map();

    async function getOverlayFont(overlay) {
      const fontName = getPdfStandardFontName(overlay.fontFamily, overlay.fontStyle);
      if (!fontCache.has(fontName)) {
        fontCache.set(fontName, await outDoc.embedFont(PDFLib.StandardFonts[fontName]));
      }
      return fontCache.get(fontName);
    }

    for (const [index, page] of pages.entries()) {
      const overlays = state.edit.overlaysByPage[index + 1] || [];
      const { width, height } = page.getSize();
      for (const overlay of overlays) {
        if (overlay.type === "text" || overlay.type === "comment") {
          const fontSize = overlay.fontSize || 22;
          const font = await getOverlayFont(overlay);
          const x = overlay.x * width;
          const y = height - overlay.y * height - fontSize;
          if (overlay.type === "comment") {
            page.drawRectangle({
              x,
              y: y - overlay.h * height + fontSize + 6,
              width: overlay.w * width,
              height: overlay.h * height,
              color: PDFLib.rgb(1, 0.95, 0.68),
              opacity: 0.98,
            });
          }
          const lines = wrapText(overlay.text || "", 28);
          lines.forEach((line, lineIndex) => {
            page.drawText(line, {
              x: x + 8,
              y: y - lineIndex * (fontSize + 2),
              size: fontSize,
              font,
              color: hexToRgb(overlay.color || "#15324b"),
            });
          });
        }

        if (overlay.type === "highlight" || overlay.type === "erase") {
          page.drawRectangle({
            x: overlay.x * width,
            y: height - (overlay.y + overlay.h) * height,
            width: overlay.w * width,
            height: overlay.h * height,
            color: hexToRgb(overlay.color || "#ffffff"),
            opacity: overlay.opacity == null ? 1 : overlay.opacity,
          });
        }
      }
    }

    const bytes = await outDoc.save({ useObjectStreams: true });
    registerOutput("edit", bytes, "application/pdf", "atlas-edited.pdf", t("statusEdited"));
  }

  function registerOutput(toolId, bytes, mimeType, name, description) {
    const blob = new Blob([bytes], { type: mimeType });
    registerBlobOutput(toolId, blob, name, description, mimeType === "application/pdf");
  }

  function invalidateOutput(toolId) {
    if (!toolId || !state.outputs[toolId]) {
      return;
    }
    state.outputs[toolId] = null;
    refreshOutputCard(toolId);
  }

  function registerBlobOutput(toolId, blob, name, description, reusable) {
    state.outputs[toolId] = {
      blob,
      name,
      description,
      reusable,
    };
    refreshOutputCard(toolId);
    openModal(description);
    logStatus(description, "success");
  }

  function refreshOutputCard(toolId) {
    const outputCard = document.querySelector(`[data-output-card="${toolId}"]`);
    if (!outputCard) {
      return;
    }
    outputCard.outerHTML = renderOutputCard(toolId);
  }

  async function downloadToolOutput(toolId) {
    const output = state.outputs[toolId];
    if (!output) {
      return;
    }
    try {
      await downloadBlob(output.blob, output.name);
    } catch (error) {
      console.error(error);
      logStatus(error.message || t("statusError"), "error");
    }
  }

  async function reuseToolOutput(toolId) {
    const output = state.outputs[toolId];
    if (!output || !output.reusable) {
      return;
    }
    const file = new File([output.blob], output.name, { type: "application/pdf" });
    await handleToolUpload([file], getActiveTool());
  }

  async function renderMergePreview() {
    const canvas = document.getElementById("mergePreviewCanvas");
    const doc = getDoc(state.merge.previewDocId);
    if (!canvas || !doc) {
      return;
    }
    await renderPdfPageToCanvas(doc.id, 1, canvas, 1.1);
  }

  async function renderOrganizeThumbnails() {
    const items = state.organize.pageItems;
    for (const item of items) {
      const nodes = [document.getElementById(`thumb-${item.id}`), document.getElementById(`rail-thumb-${item.id}`)].filter(Boolean);
      if (nodes.length === 0) {
        continue;
      }
      const thumb = await getPageThumbnail(item.docId, item.pageNumber, 180);
      nodes.forEach((img) => {
        img.src = thumb;
        img.style.transform = item.rotation ? `rotate(${item.rotation}deg)` : "";
      });
    }
  }

  async function renderOrganizePreview() {
    const canvas = document.getElementById("organizePreviewCanvas");
    const selected = state.organize.pageItems.find((item) => item.id === state.organize.selectedPageId);
    if (!canvas) {
      return;
    }
    if (!selected) {
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }
    await renderPdfPageToCanvas(selected.docId, selected.pageNumber, canvas, 1.1, selected.rotation || 0);
  }

  function renderOrganizeThumbStrip() {
    const strip = document.getElementById("organizeThumbStrip");
    if (!strip) {
      return;
    }
    strip.innerHTML = state.organize.pageItems.map((item, index) => renderOrganizeRailItem(item, index)).join("");
  }

  async function renderSplitThumbnails() {
    const doc = getDoc(state.split.docId);
    if (!doc) {
      return;
    }
    for (let pageNumber = 1; pageNumber <= doc.pageCount; pageNumber += 1) {
      const img = document.getElementById(`split-thumb-${pageNumber}`);
      if (!img) {
        continue;
      }
      img.src = await getPageThumbnail(doc.id, pageNumber, 150);
    }
  }

  async function renderEditThumbs() {
    const strip = document.getElementById("editThumbStrip");
    const doc = getDoc(state.edit.docId);
    if (!strip || !doc) {
      return;
    }
    const cards = [];
    for (let pageNumber = 1; pageNumber <= doc.pageCount; pageNumber += 1) {
      const thumb = await getPageThumbnail(doc.id, pageNumber, 150);
      cards.push(`
        <button class="edit-thumb${state.edit.currentPage === pageNumber ? " is-selected" : ""}" data-action="set-edit-page" data-edit-page="${pageNumber}">
          <img src="${thumb}" alt="" />
          <span>${pageNumber}</span>
        </button>
      `);
    }
    strip.innerHTML = cards.join("");
  }

  async function renderEditorStage() {
    const host = document.getElementById("editorCanvasHost");
    const canvas = document.getElementById("editorCanvas");
    const textLayer = document.getElementById("editorTextLayer");
    const layer = document.getElementById("editorOverlayLayer");
    const doc = getDoc(state.edit.docId);
    if (!host || !canvas || !layer || !doc) {
      return;
    }

    const viewport = await renderPdfPageToCanvas(doc.id, state.edit.currentPage, canvas, 1.72);
    const hostRect = host.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    syncEditorLayerBounds(layer, hostRect, canvasRect);
    if (textLayer) {
      syncEditorLayerBounds(textLayer, hostRect, canvasRect);
      textLayer.classList.toggle("is-selectable", state.edit.tool === "select");
      await renderEditorTextLayer(doc.id, state.edit.currentPage, textLayer, viewport);
    }
    const overlays = state.edit.overlaysByPage[state.edit.currentPage] || [];
    const draft = state.edit.draftRect ? [draftRectToOverlay(state.edit.draftRect)] : [];
    layer.innerHTML = [...overlays, ...draft].map(renderOverlayNode).join("");
  }

  async function renderEditorTextLayer(docId, pageNumber, container, viewport) {
    const pdf = await ensurePdfDoc(docId);
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    container.innerHTML = textContent.items
      .map((item) => {
        const transform = pdfjsLib.Util.transform(viewport.transform, item.transform);
        const angle = Math.atan2(transform[1], transform[0]);
        const fontSize = Math.max(Math.hypot(transform[0], transform[1]), 6);
        const left = transform[4];
        const top = transform[5] - fontSize;
        const width = Math.max(item.width * viewport.scale, 1);
        const height = Math.max(item.height * viewport.scale, fontSize);
        return `
          <span
            class="editor-text-layer__item"
            style="left:${left}px;top:${top}px;width:${width}px;height:${height}px;font-size:${fontSize}px;transform:rotate(${angle}rad);"
          >${escapeHtml(item.str || "")}</span>
        `;
      })
      .join("");
  }

  function syncEditorLayerBounds(layer, hostRect, canvasRect) {
    layer.style.left = `${canvasRect.left - hostRect.left}px`;
    layer.style.top = `${canvasRect.top - hostRect.top}px`;
    layer.style.width = `${canvasRect.width}px`;
    layer.style.height = `${canvasRect.height}px`;
  }

  function renderMergeDocCard(doc) {
    return `
      <article class="doc-card" draggable="true" data-merge-doc="${doc.id}">
        <div class="doc-card__meta">
          <strong>${escapeHtml(doc.name)}</strong>
          <span>${doc.pageCount} ${pageUnit(doc.pageCount)}</span>
        </div>
        <div class="doc-card__actions">
          <button class="ghost-button" data-action="merge-select-doc" data-doc-id="${doc.id}">${state.lang === "tr" ? "Onizle" : "Preview"}</button>
          <button class="ghost-button" data-action="remove-merge-doc" data-doc-id="${doc.id}">${state.lang === "tr" ? "Kaldir" : "Remove"}</button>
        </div>
      </article>
    `;
  }

  function collectOrganizeDocNames() {
    return Array.from(new Set(state.organize.pageItems.map((item) => item.docName)));
  }

  function getOrganizeFileSummaries() {
    const counts = new Map();
    state.organize.pageItems.forEach((item) => {
      counts.set(item.docName, (counts.get(item.docName) || 0) + 1);
    });
    return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
  }

  function computeSplitGroups() {
    const doc = getDoc(state.split.docId);
    if (!doc) {
      return [];
    }

    if (state.split.mode === "fixed") {
      const groups = [];
      const size = clamp(Number(state.split.fixedCount) || 1, 1, doc.pageCount);
      for (let page = 1; page <= doc.pageCount; page += size) {
        const pages = [];
        for (let inner = page; inner < page + size && inner <= doc.pageCount; inner += 1) {
          pages.push(inner);
        }
        groups.push({ pages, label: formatRangeLabel(pages) });
      }
      return groups;
    }

    if (state.split.mode === "custom") {
      const saved = [...state.split.savedRanges];
      const manual = parseRangesText(state.split.manualRanges, doc.pageCount);
      return [...saved, ...manual];
    }

    if (state.split.mode === "extract") {
      if (state.split.selectedPages.length === 0) {
        return [];
      }
      if (state.split.mergeExtracted) {
        return [{ pages: [...state.split.selectedPages], label: formatRangeLabel(state.split.selectedPages) }];
      }
      return state.split.selectedPages.map((page) => ({ pages: [page], label: String(page) }));
    }

    return [];
  }

  function safeComputeSplitGroups() {
    try {
      return computeSplitGroups();
    } catch (error) {
      return [];
    }
  }

  async function loadPdfDocument(file) {
    const buffer = await file.arrayBuffer();
    const pdfjsBytes = new Uint8Array(buffer);
    const preservedBytes = new Uint8Array(buffer.slice(0));
    assertPdfBytes(preservedBytes, file.name);
    const loadingTask = pdfjsLib.getDocument({ data: pdfjsBytes });
    const pdf = await loadingTask.promise;
    const doc = {
      id: createId(),
      name: file.name,
      bytes: preservedBytes,
      pageCount: pdf.numPages,
      pdfPromise: Promise.resolve(pdf),
    };
    state.docs.push(doc);
    return doc;
  }

  async function loadPdfLibDocument(doc, sourceLabel) {
    if (!doc) {
      throw new Error(state.lang === "tr" ? "PDF kaydi bulunamadi. Dosyayi yeniden yukleyin." : "PDF record was not found. Reload the file and try again.");
    }
    assertPdfBytes(doc.bytes, sourceLabel || doc.name);
    try {
      return await PDFLib.PDFDocument.load(doc.bytes.slice());
    } catch (error) {
      if (/No PDF header found/i.test(error?.message || "")) {
        throw new Error(
          state.lang === "tr"
            ? `"${sourceLabel || doc.name}" gecerli bir PDF olarak okunamadi. Dosyayi yeniden yukleyin.`
            : `"${sourceLabel || doc.name}" could not be read as a valid PDF. Reload the file and try again.`
        );
      }
      throw error;
    }
  }

  function buildPageItemsFromDoc(doc) {
    return Array.from({ length: doc.pageCount }, (_, index) => ({
      id: createId(),
      docId: doc.id,
      docName: doc.name,
      pageNumber: index + 1,
      label: `${doc.name} / ${index + 1}`,
      order: index + 1,
      numberLabel: String(index + 1),
      rotation: 0,
    }));
  }

  async function ensurePdfDoc(docId) {
    const doc = getDoc(docId);
    if (!doc) {
      throw new Error("Document not found.");
    }
    return doc.pdfPromise;
  }

  async function getPageThumbnail(docId, pageNumber, width) {
    const cacheKey = `${docId}:${pageNumber}:${width}`;
    if (state.thumbCache.has(cacheKey)) {
      return state.thumbCache.get(cacheKey);
    }

    const pdf = await ensurePdfDoc(docId);
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const scale = width / viewport.width;
    const renderViewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = Math.ceil(renderViewport.width);
    canvas.height = Math.ceil(renderViewport.height);
    await page.render({ canvasContext: context, viewport: renderViewport }).promise;
    const dataUrl = canvas.toDataURL("image/png");
    state.thumbCache.set(cacheKey, dataUrl);
    return dataUrl;
  }

  async function renderPdfPageToCanvas(docId, pageNumber, canvas, scale, rotation = 0) {
    const pdf = await ensurePdfDoc(docId);
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale, rotation });
    const context = canvas.getContext("2d");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    await page.render({ canvasContext: context, viewport }).promise;
    return viewport;
  }

  function renderOverlayNode(overlay) {
    const style = [
      `left:${overlay.x * 100}%`,
      `top:${overlay.y * 100}%`,
      `width:${(overlay.w || 0.16) * 100}%`,
      `height:${(overlay.h || 0.08) * 100}%`,
    ];
    const classNames = ["editor-overlay", `editor-overlay--${overlay.type}`];
    if (state.edit.selectedOverlayId === overlay.id) {
      classNames.push("is-selected");
    }

    if (overlay.type === "text" || overlay.type === "comment") {
      style.push(`color:${overlay.color || "#15324b"}`);
      style.push(`font-size:${overlay.fontSize || 22}px`);
      style.push(`font-family:${getOverlayCssFontFamily(overlay.fontFamily)}`);
      style.push(`font-weight:${isBoldFontStyle(overlay.fontStyle) ? "700" : "400"}`);
      style.push(`font-style:${isItalicFontStyle(overlay.fontStyle) ? "italic" : "normal"}`);
    }

    if (overlay.type === "highlight" || overlay.type === "erase") {
      style.push(`background:${overlay.color || "#ffffff"}`);
      style.push(`opacity:${overlay.opacity == null ? 1 : overlay.opacity}`);
    }

    return `
      <div class="${classNames.join(" ")}" style="${style.join(";")}" data-overlay-id="${overlay.id || "draft"}">
        ${overlay.type === "comment" ? `<strong>${state.lang === "tr" ? "Not" : "Note"}</strong>` : ""}
        ${overlay.text ? `<span>${escapeHtml(overlay.text)}</span>` : ""}
      </div>
    `;
  }

  function draftRectToOverlay(draft) {
    const rect = normalizeRect(draft);
    return {
      id: "draft",
      type: rect.type,
      x: rect.x,
      y: rect.y,
      w: rect.w,
      h: rect.h,
      color: rect.type === "highlight" ? "#f6d04d" : "#ffffff",
      opacity: rect.type === "highlight" ? 0.28 : 1,
    };
  }

  function getSelectedOverlay() {
    const overlays = state.edit.overlaysByPage[state.edit.currentPage] || [];
    return overlays.find((overlay) => overlay.id === state.edit.selectedOverlayId) || null;
  }

  function normalizeRect(draft) {
    const x = Math.min(draft.startX, draft.endX);
    const y = Math.min(draft.startY, draft.endY);
    return {
      type: draft.type,
      x,
      y,
      w: Math.abs(draft.startX - draft.endX),
      h: Math.abs(draft.startY - draft.endY),
    };
  }

  function getEditorRect() {
    const layer = document.getElementById("editorOverlayLayer");
    return layer ? layer.getBoundingClientRect() : null;
  }

  function getStagePoint(event, rect) {
    return {
      x: clamp((event.clientX - rect.left) / rect.width, 0, 1),
      y: clamp((event.clientY - rect.top) / rect.height, 0, 1),
    };
  }

  function eraseCurrentTextSelection() {
    const selection = getCurrentEditorTextSelection();
    if (!selection) {
      return false;
    }

    appendEditOverlay(selection.page, buildSelectionRectOverlay(selection, "erase"));
    state.edit.selectedOverlayId = null;
    clearBrowserSelection();
    invalidateOutput("edit");
    render();
    return true;
  }

  function replaceCurrentTextSelection() {
    const selection = getCurrentEditorTextSelection();
    if (!selection) {
      return false;
    }

    appendEditOverlay(selection.page, buildSelectionRectOverlay(selection, "erase"));
    const textOverlay = buildSelectionTextOverlay(selection);
    appendEditOverlay(selection.page, textOverlay);
    state.edit.selectedOverlayId = textOverlay.id;
    state.edit.tool = "select";
    clearBrowserSelection();
    invalidateOutput("edit");
    render();
    return true;
  }

  function appendEditOverlay(pageNumber, overlay) {
    if (!state.edit.overlaysByPage[pageNumber]) {
      state.edit.overlaysByPage[pageNumber] = [];
    }
    state.edit.overlaysByPage[pageNumber].push(overlay);
  }

  function buildSelectionRectOverlay(selection, type) {
    return {
      id: createId(),
      type,
      x: clamp(selection.x - 0.004, 0, 0.98),
      y: clamp(selection.y - 0.004, 0, 0.98),
      w: clamp(selection.w + 0.008, 0.01, 0.98),
      h: clamp(selection.h + 0.01, 0.01, 0.98),
      color: type === "highlight" ? "#f6d04d" : "#ffffff",
      opacity: type === "highlight" ? 0.38 : 1,
    };
  }

  function buildSelectionTextOverlay(selection) {
    return {
      id: createId(),
      type: "text",
      x: clamp(selection.x, 0.01, 0.94),
      y: clamp(selection.y, 0.01, 0.94),
      w: clamp(Math.max(selection.w + 0.02, 0.14), 0.08, 0.96),
      h: clamp(Math.max(selection.h + 0.02, 0.07), 0.05, 0.96),
      text: selection.text || (state.lang === "tr" ? "Yeni metin" : "New text"),
      fontSize: state.edit.defaults.fontSize,
      color: state.edit.defaults.color,
      fontFamily: state.edit.defaults.fontFamily,
      fontStyle: state.edit.defaults.fontStyle,
    };
  }

  function getCurrentEditorTextSelection() {
    const layer = document.getElementById("editorTextLayer");
    if (!layer || state.edit.tool !== "select") {
      return null;
    }

    const selection = window.getSelection ? window.getSelection() : null;
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return null;
    }

    const range = selection.getRangeAt(0);
    if (!layer.contains(range.commonAncestorContainer)) {
      return null;
    }

    const rects = Array.from(range.getClientRects()).filter((rect) => rect.width > 0 && rect.height > 0);
    if (rects.length === 0) {
      return null;
    }

    const union = rects.reduce(
      (accumulator, rect) => ({
        left: Math.min(accumulator.left, rect.left),
        top: Math.min(accumulator.top, rect.top),
        right: Math.max(accumulator.right, rect.right),
        bottom: Math.max(accumulator.bottom, rect.bottom),
      }),
      {
        left: rects[0].left,
        top: rects[0].top,
        right: rects[0].right,
        bottom: rects[0].bottom,
      }
    );

    const layerRect = layer.getBoundingClientRect();
    if (!layerRect.width || !layerRect.height) {
      return null;
    }

    return {
      page: state.edit.currentPage,
      x: clamp((union.left - layerRect.left) / layerRect.width, 0, 0.98),
      y: clamp((union.top - layerRect.top) / layerRect.height, 0, 0.98),
      w: clamp((union.right - union.left) / layerRect.width, 0.01, 0.98),
      h: clamp((union.bottom - union.top) / layerRect.height, 0.01, 0.98),
      text: selection.toString().trim(),
    };
  }

  function clearBrowserSelection() {
    const selection = window.getSelection ? window.getSelection() : null;
    if (selection && selection.removeAllRanges) {
      selection.removeAllRanges();
    }
  }

  function parseRoute() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (!hash) {
      return { type: "home" };
    }
    const [prefix, toolId] = hash.split("/");
    if (prefix === "tool" && TOOL_META[toolId]) {
      return { type: "tool", toolId };
    }
    return { type: "home" };
  }

  function navigateToTool(toolId) {
    window.location.hash = `/tool/${toolId}`;
  }

  function navigateHome() {
    window.location.hash = "";
  }

  function getActiveTool() {
    return state.route.type === "tool" ? state.route.toolId : null;
  }

  function getDoc(docId) {
    return state.docs.find((doc) => doc.id === docId) || null;
  }

  function isPdfFile(file) {
    return file && (file.type === "application/pdf" || /\.pdf$/i.test(file.name));
  }

  function assertPdfBytes(bytes, sourceLabel) {
    if (!(bytes instanceof Uint8Array) || bytes.length < 5) {
      throw new Error(
        state.lang === "tr"
          ? `"${sourceLabel}" bos ya da gecersiz bir PDF.`
          : `"${sourceLabel}" is empty or not a valid PDF.`
      );
    }

    const header = "%PDF-";
    const probeLength = Math.min(bytes.length, 1024);
    let found = false;

    for (let index = 0; index <= probeLength - header.length; index += 1) {
      let matches = true;
      for (let offset = 0; offset < header.length; offset += 1) {
        if (String.fromCharCode(bytes[index + offset]) !== header[offset]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error(
        state.lang === "tr"
          ? `"${sourceLabel}" dosyasinda PDF basligi bulunamadi.`
          : `A PDF header was not found in "${sourceLabel}".`
      );
    }
  }

  function setLanguage(lang) {
    if (!COPY[lang]) {
      return;
    }
    state.lang = lang;
    localStorage.setItem("atlas-pdf-lang", lang);
    logStatus(t("statusLanguage"), "info");
    render();
  }

  function loadLanguage() {
    const saved = localStorage.getItem("atlas-pdf-lang");
    return COPY[saved] ? saved : "tr";
  }

  function setBusy(isBusy) {
    state.busy = isBusy;
  }

  function openModal(message) {
    elements.modalToast.classList.remove("hidden");
    elements.modalToast.innerHTML = `
      <p>${escapeHtml(message)}</p>
      <button class="ghost-button" data-hook="closeModal">${escapeHtml(t("modalClose"))}</button>
    `;
  }

  function closeModal() {
    elements.modalToast.classList.add("hidden");
  }

  function logStatus(message, tone) {
    state.statusItems.unshift({ message, tone });
    state.statusItems = state.statusItems.slice(0, 24);
  }

  function t(path) {
    return path.split(".").reduce((value, key) => value[key], COPY[state.lang]);
  }

  function langText(trValue, enValue) {
    return state.lang === "tr" ? trValue : enValue;
  }

  function format(template, values) {
    return Object.keys(values).reduce(
      (accumulator, key) => accumulator.replaceAll(`{${key}}`, values[key]),
      template
    );
  }

  function formatRangeLabel(pages) {
    if (pages.length === 1) {
      return String(pages[0]);
    }
    return `${pages[0]}-${pages[pages.length - 1]}`;
  }

  function pageUnit(count) {
    if (state.lang === "tr") {
      return "sayfa";
    }
    return count === 1 ? "page" : "pages";
  }

  function parseRangesText(value, pageCount) {
    const cleaned = String(value || "").trim();
    if (!cleaned) {
      return [];
    }
    return cleaned
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const bounds = part.split("-").map((entry) => Number(entry.trim()));
        if (bounds.some((entry) => !Number.isFinite(entry))) {
          throw new Error(state.lang === "tr" ? "Elle girilen aralik gecersiz." : "Invalid manual range.");
        }
        const start = clamp(bounds[0], 1, pageCount);
        const end = clamp(bounds[bounds.length - 1], 1, pageCount);
        const pages = [];
        for (let page = start; page <= end; page += 1) {
          pages.push(page);
        }
        return { pages, label: formatRangeLabel(pages) };
      });
  }

  function compressSelectionToRanges(selection) {
    const values = [...selection].sort((a, b) => a - b);
    if (values.length === 0) {
      return [];
    }
    const ranges = [];
    let start = values[0];
    let previous = values[0];
    for (let index = 1; index < values.length; index += 1) {
      const value = values[index];
      if (value === previous + 1) {
        previous = value;
        continue;
      }
      ranges.push(buildRangeObject(start, previous));
      start = value;
      previous = value;
    }
    ranges.push(buildRangeObject(start, previous));
    return ranges;
  }

  function buildRangeObject(start, end) {
    const pages = [];
    for (let page = start; page <= end; page += 1) {
      pages.push(page);
    }
    return { pages, label: formatRangeLabel(pages) };
  }

  function wrapText(text, maxChars) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      return [""];
    }
    const lines = [];
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length > maxChars && current) {
        lines.push(current);
        current = word;
      } else {
        current = candidate;
      }
    });
    if (current) {
      lines.push(current);
    }
    return lines;
  }

  function hexToRgb(hex) {
    const value = hex.replace("#", "");
    const full = value.length === 3 ? value.split("").map((char) => char + char).join("") : value;
    const number = Number.parseInt(full, 16);
    return PDFLib.rgb(((number >> 16) & 255) / 255, ((number >> 8) & 255) / 255, (number & 255) / 255);
  }

  function getPdfStandardFontName(fontFamily, fontStyle) {
    const library = {
      helvetica: {
        regular: "Helvetica",
        bold: "HelveticaBold",
        italic: "HelveticaOblique",
        boldItalic: "HelveticaBoldOblique",
      },
      times: {
        regular: "TimesRoman",
        bold: "TimesRomanBold",
        italic: "TimesRomanItalic",
        boldItalic: "TimesRomanBoldItalic",
      },
      courier: {
        regular: "Courier",
        bold: "CourierBold",
        italic: "CourierOblique",
        boldItalic: "CourierBoldOblique",
      },
    };

    const family = library[fontFamily] || library.helvetica;
    return family[fontStyle] || family.regular;
  }

  function getOverlayCssFontFamily(fontFamily) {
    if (fontFamily === "times") {
      return "'Times New Roman', Georgia, serif";
    }
    if (fontFamily === "courier") {
      return "'Courier New', 'SFMono-Regular', monospace";
    }
    return "'Helvetica Neue', Arial, sans-serif";
  }

  function isBoldFontStyle(fontStyle) {
    return fontStyle === "bold" || fontStyle === "boldItalic";
  }

  function isItalicFontStyle(fontStyle) {
    return fontStyle === "italic" || fontStyle === "boldItalic";
  }

  async function downloadBlob(blob, filename) {
    const url = window.location.protocol === "file:" ? await blobToDataUrl(blob) : URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = "noopener";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    if (url.startsWith("blob:")) {
      setTimeout(() => URL.revokeObjectURL(url), 1200);
    }
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error || new Error("Failed to prepare download."));
      reader.readAsDataURL(blob);
    });
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function createId() {
    return window.crypto && crypto.randomUUID
      ? crypto.randomUUID()
      : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
