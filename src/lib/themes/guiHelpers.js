import {Theme} from '.';
import AddonHooks from '../../addons/hooks';
import './global-styles.css';

const BLOCK_COLOR_NAMES = [
    'motion', 'looks', 'sounds', 'control', 'event',
    'sensing', 'pen', 'operators', 'data', 'data_lists',
    'more', 'addons'
];

const evaluateCSS = css => {
    const variableMatch = css.match(/^var\(([\w-]+)\)$/);
    if (variableMatch) {
        return document.documentElement.style.getPropertyValue(variableMatch[1]);
    }
    return css;
};

const applyGuiColors = theme => {
    const doc = document.documentElement;

    const defaultGuiColors = Theme.light.getGuiColors();
    for (const [name, value] of Object.entries(defaultGuiColors)) {
        doc.style.setProperty(`--${name}-default`, value);
    }

    const guiColors = theme.getGuiColors();
    for (const [name, value] of Object.entries(guiColors)) {
        doc.style.setProperty(`--${name}`, value);
    }

    // ========================================================
    // 🖤 e3oT ダーク・モノクロームテーマ（程よいダークグレー版）
    // ========================================================
    const monochromeOverrides = {
        'menu-bar-background':    '#2e2e2e', // ヘッダーを少し明るめのグレーにしてメリハリを出す
        'menu-bar-foreground':    '#ffffff',
        'page-background':        '#111111', // 真っ黒から元の心地よい暗さに変更
        'ui-primary':             '#111111',
        'ui-secondary':           '#1e1e1e',
        'ui-tertiary':            '#2e2e2e',
        'assets-background':      '#111111',
        'text-primary':           '#eeeeee',
        'page-foreground':        '#eeeeee',
        'link-color':             '#44aaff',
        'drop-highlight':         '#ffffff',
        'input-background':       '#1e1e1e',
        'popover-background':     '#1e1e1e',
        'ui-modal-background':    '#111111',
        'ui-modal-foreground':    '#eeeeee',
        'error-primary':          '#555555',
        'ui-accent':              '#ffffff',
        'ui-accent-transparent':  'rgba(255,255,255,0.15)',
        'motion-primary':         '#2e2e2e',
        'motion-secondary':       '#1e1e1e',
        'motion-tertiary':        '#111111',
        'looks-primary':          '#2e2e2e',
        'looks-secondary':        '#1e1e1e',
        'looks-tertiary':         '#111111',
        'ui-active-background':   '#2e2e2e',
        'ui-active-foreground':   '#ffffff',
        'ui-selected-background': '#1e1e1e',
        'active-text':            '#ffffff',
        'extensions-primary':     '#2e2e2e',
        'extensions-secondary':   '#1e1e1e',
        'extensions-tertiary':    '#111111',
    };

    for (const [name, value] of Object.entries(monochromeOverrides)) {
        doc.style.setProperty(`--${name}`, value);
    }

    let styleTag = document.getElementById('py-monochrome-hack');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'py-monochrome-hack';
        document.head.appendChild(styleTag);
    }
    styleTag.textContent = `
        /* 選択されたスプライトタイルの外枠と背景（程よいグレー） */
        :root [class*="sprite-selector-item_is-selected"][class*="sprite-selector-item_is-selected"] {
            background-color: #2e2e2e !important;
            border:           1px solid #666666 !important;
            outline:          none !important;
            box-shadow:       inset 0 0 0 1px #666666, 0 0 0 1px #666666 !important;
        }
        :root [class*="sprite-selector-item_is-selected"][class*="sprite-selector-item_is-selected"] * {
            background-color: #2e2e2e !important;
            color:            #ffffff !important;
        }
        :root [class*="sprite-selector-item_is-selected"][class*="sprite-selector-item_is-selected"]
            [class*="sprite-name"],
        :root [class*="sprite-selector-item_is-selected"][class*="sprite-selector-item_is-selected"]
            [class*="sprite-selector-item_sprite-name"] {
            background: #2e2e2e !important;
            color:      #ffffff !important;
        }
        [class*="delete-button-visible"] {
            box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 2px !important;
        }
        [class*="sprite-selector-add-button"],
        [class*="action-menu"] [class*="action-menu_button"] {
            box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 2px !important;
        }
        [class*="react-tabs__tab--selected"],
        [class*="gui_is-selected"] {
            color: #ffffff !important;
        }
        [class*="toggle-buttons_button"][aria-pressed="true"] {
            background-color: #333333 !important;
        }
        [class*="toggle-buttons_button"] {
            background-color: #1e1e1e !important;
        }

        /* 拡張機能選択画面のフィルターバーを暗すぎない中間グレーに設定 */
        :root [class*="library_filter-bar"] {
            background-color: #1e1e1e !important;
            background: #1e1e1e !important;
            border-bottom: 1px solid #2e2e2e !important;
        }
    `;
    // ========================================================

    const blockColors = theme.getBlockColors();
    doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
    doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
    doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
    for (const color of BLOCK_COLOR_NAMES) {
        doc.style.setProperty(`--editorTheme3-${color}-primary`,          blockColors[color].primary);
        doc.style.setProperty(`--editorTheme3-${color}-secondary`,        blockColors[color].secondary);
        doc.style.setProperty(`--editorTheme3-${color}-tertiary`,         blockColors[color].tertiary);
        doc.style.setProperty(`--editorTheme3-${color}-field-background`, blockColors[color].quaternary);
    }

    let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#111111');

    window.Recolor = { primary: '#ffffff' };
    AddonHooks.recolorCallbacks.forEach(i => i());
};

export { applyGuiColors };