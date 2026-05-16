const guiColors = {
    'color-scheme': 'dark',

    'ui-primary': '#111111',
    'ui-secondary': '#1e1e1e',
    'ui-tertiary': '#2e2e2e',

    'ui-modal-overlay': '#333333aa',
    'ui-modal-background': '#111111',
    'ui-modal-foreground': '#eeeeee',
    'ui-modal-header-background': '#333333',
    'ui-modal-header-foreground': '#ffffff',

    // 通常時のスプライトカード背景などのベース
    'ui-white': '#1a1a1a',

    'ui-black-transparent': '#ffffff26',

    'text-primary': '#eeeeee',

    'menu-bar-background': '#111111', // ヘッダーも深い黒に統一
    'menu-bar-foreground': '#ffffff',

    'assets-background': '#111111',

    'input-background': '#1e1e1e',

    'popover-background': '#1e1e1e',

    'badge-background': '#16202c',
    'badge-border': '#203652',

    'fullscreen-background': '#111111',
    'fullscreen-accent': '#111111',

    'page-background': '#111111',
    'page-foreground': '#eeeeee',

    'project-title-inactive': 'var(--ui-secondary)',
    'project-title-hover': '#ffffff3f',

    'link-color': '#ffffff', // リンクも白

    // ========================================================
    // 🖤 スプライトタイルの赤ピンクを強制的に白黒にする追加定義
    // ========================================================
    'ui-accent': '#ffffff',                 // 選択された時の外枠（白）
    'box-selected-border': '#ffffff',       // 選択されたスプライトの枠線（白）
    'box-selected-background': '#ffffff',   // 選択されたスプライトの文字背景（白）
    'box-selected-text': '#111111',         // 選択されたスプライトの文字（黒）
    'box-selected-recolor': '#111111',      // 選択されたスプライト内のアイコン（黒）
    'box-selected-el-background': '#e0e0e0', // ゴミ箱の丸い背景（薄いグレー）

    'filter-icon-black': 'invert(100%)',
    'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
    'filter-icon-white': 'brightness(0) invert(100%)',

    'paint-filter-icon-gray': 'brightness(1.7)'
};

const blockColors = {
    insertionMarker: '#cccccc',
    workspace: '#1e1e1e',
    toolboxSelected: '#1e1e1e',
    toolboxText: '#cccccc',
    toolbox: '#111111',
    flyout: '#111111',
    scrollbar: '#666666',
    valueReportBackground: '#1e1e1e',
    valueReportBorder: '#333333',
    valueReportForeground: '#eeeeee',
    contextMenuBackground: '#111111',
    contextMenuBorder: '#ffffff26',
    contextMenuForeground: '#eeeeee',
    contextMenuActiveBackground: '#2e2e2e',
    contextMenuDisabledForeground: '#666666',
    flyoutLabelColor: '#cccccc',
    checkboxInactiveBackground: '#222222',
    checkboxInactiveBorder: '#c8c8c8',
    buttonBorder: '#c6c6c6',
    buttonActiveBackground: '#222222',
    buttonForeground: '#cccccc',
    zoomIconFilter: 'invert(100%)',
    gridColor: '#484848'
};

export {
    guiColors,
    blockColors
};