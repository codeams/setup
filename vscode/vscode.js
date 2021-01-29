// Codeams' VSCode configuration file
{
    "emmet.syntaxProfiles": {
        "html": {
            "attr_quotes": "single"
        }
    },
    // App configuration
    "window.openFoldersInNewWindow": "off",
    "window.zoomLevel": 0,

    // Extensions configuration
    "extensions.ignoreRecommendations": false,
        // Vetur configuration
        "vetur.format.styleInitialIndent": true,
        "vetur.format.scriptInitialIndent": true,

    // Editor configuration
    "editor.fontFamily": "SF Mono, Arial, Operator Mono, Monaco, Fira Code, monospace",
    "editor.fontSize": 13, // For Monaco/Fire Code use: 13
    "editor.fontWeight": "600",
    "editor.lineHeight": 30, // For Monaco/Fira Code use: 26
    "editor.letterSpacing": -0.3,
    "editor.fontLigatures": true,
    "editor.cursorStyle": "line",
    "editor.cursorBlinking": "smooth",
    "editor.tabSize": 2,
    "editor.rulers": [],
    "editor.renderIndentGuides": false,
    "editor.renderWhitespace": "selection",
    "editor.minimap.enabled": false,
    "editor.minimap.renderCharacters": false,
    "editor.lineNumbers": "off",

    // Color configuration
    "workbench.editor.showTabs": false,
    "workbench.statusBar.visible": false,
    "workbench.iconTheme": "material-icon-theme",
    "workbench.tree.renderIndentGuides": "none",
    // "workbench.colorCustomizations": {
    //     "title.visible": "false",

    //     "entity.other.attribute-name": {
    //         "font-style": "italic"
    //     }
    // },

    // Terminal & Integrated terminal configuration
    "terminal.external.osxExec": "iTerm.app",
    "terminal.integrated.fontFamily": "Operator Mono, Monaco, Fira Code, monospace",
    "terminal.integrated.fontSize": 15, // For Monaco/Fira Code use: 1,4
    "terminal.integrated.cursorStyle": "underline",
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.shell.osx": "/bin/zsh",

    // Custom configuration for vue language
    "[vue]": {},
    "materialTheme.cache.workbench.settings": {
        "themeColours": "Palenight High Contrast",
        "accent": "Indigo",
        "accentPrevious": "Lime"
    },
    "workbench.startupEditor": "none",
    "sublimeTextKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",

    // Sidebar expolorer options
    "explorer.openEditors.visible": 0,
    "workbench.editor.enablePreview": true,
    "workbench.editor.tabCloseButton": "off",
    "workbench.editor.showIcons": false,
    "editor.smoothScrolling": true,
    "emmet.includeLanguages": {
        "php": "html",
        "blade": "html",
        "vue": "html",
        "vue-html": "html",
        "erb": "html",
        "liquid": "html"
    },
    "editor.detectIndentation": true,
    "workbench.tips.enabled": false,
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#5C6BC0",
        "list.activeSelectionForeground": "#5C6BC0",
        "list.inactiveSelectionForeground": "#5C6BC0",
        "list.highlightForeground": "#5C6BC0",
        "scrollbarSlider.activeBackground": "#5C6BC050",
        "editorSuggestWidget.highlightForeground": "#5C6BC0",
        "textLink.foreground": "#5C6BC0",
        "progressBar.background": "#5C6BC0",
        "pickerGroup.foreground": "#5C6BC0",
        "tab.activeBorder": "#5C6BC0"
    },
    "window.restoreWindows": "folders",
    "window.newWindowDimensions": "default",
    "files.insertFinalNewline": true,
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true
    },
    "search.useIgnoreFiles": true,
    "vetur.validation.template": true,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "entity.other.attribute-name.tag.jade",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "variable.scss",
                "settings": {
                    "foreground": "#ffffff"
                }
            },
            {
                "scope": "entity.other.attribute-name.class.css",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.other.attribute-name.class.jade",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.other.attribute-name.html",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "storage.type.js",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "storage.type.function.js",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "storage.type.function.js",
                    "meta.import.js",
                    "meta.export.js"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            }
        ],
    },
    "workbench.settings.openDefaultSettings": true,
    "editor.colorDecorators": false,
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    },
    // "typescript.quickSuggestionsForPaths": false,
    "vim.cursorStylePerMode.insert": "line",
    "vim.cursorStylePerMode.normal": "underline",
    "vim.easymotion": true,
    "vim.incsearch": true,
    "vim.useSystemClipboard": false,
    "vim.useCtrlKeys": true,
    "vim.hlsearch": true,
    "vim.insertModeKeyBindings": [
        {
            "before": [
                "j",
                "j"
            ],
            "after": [
                "<Esc>"
            ]
        },
        {
            "before": [
                "k",
                "k"
            ],
            "after": [
                "<Esc>"
            ]
        },
    ],
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": [ "g", "b" ],
            "commands": [ "workbench.action.previousEditor" ]
        },
        {
            "before": [
                "<leader>",
                "s"
            ],
            "commands": [
                ":vsp"
            ]
        },
        {
            "before": [
                "<C-l>"
            ],
            "after": [
                "<C-w>",
                "l"
            ]
        },
        {
            "before": [
                "<C-k>"
            ],
            "after": [
                "<C-w>",
                "k"
            ]
        },
        {
            "before": [
                "<C-j>"
            ],
            "after": [
                "<C-w>",
                "j"
            ]
        },
        {
            "before": [
                "<C-h>"
            ],
            "after": [
                "<C-w>",
                "h"
            ]
        },
    ],
    "vim.leader": ",",
    "vim.handleKeys": {
        "<D-d>": true,
        "<C-d>": true
    },
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "material-icon-theme.showUpdateMessage": false,

    // Optional: Set the amount of chatmessages that are shown
    "window.closeWhenEmpty": false,
    "editor.tabCompletion": true,
    "materialTheme.fixIconsRunning": false,
    "scm.diffDecorations": "all",
    "editor.glyphMargin": false,
    "workbench.view.alwaysShowHeaderActions": false,
    "workbench.activityBar.visible": false,
    "workbench.statusBar.feedback.visible": false,
    "editor.hover.enabled": false,

    "vscode_custom_css.imports": ["file:///Users/codeams/Developer/setup/vscode/custom-import.css"],
    "vscode_custom_css.policy": true,
    "window.title": "${rootName}",
    "workbench.editor.enablePreviewFromQuickOpen": true,
    "editor.hover.sticky": false,
    "editor.scrollbar.horizontal": "hidden",
    "editor.scrollbar.vertical": "hidden",
    "extensions.autoUpdate": false,
    "workbench.settings.editor": "json",
    "workbench.fontAliasing": "antialiased",
    "terminal.integrated.lineHeight": 1.4,
    "scm.diffDecorationsGutterWidth": 2,
    "editor.overviewRulerBorder": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.colorTheme": "Material Theme Palenight",
	"editor.renderLineHighlight": "none",
	"editor.occurrencesHighlight": false,
	"editor.hideCursorInOverviewRuler": true,
    "todohighlight.keywords": [
        {
            "text": "TODO",
            "color": "white",
            "textDecoration": "underline",
            "backgroundColor": "transparent",
        }
    ],
}
