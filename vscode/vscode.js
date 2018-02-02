// Codeams' VSCode configuration file
{
    // App configuration
    "window.openFoldersInNewWindow": "off",
    "window.zoomLevel": 0,

    // Extensions configuration
    "extensions.ignoreRecommendations": false,
        // Vetur configuration
        "vetur.format.styleInitialIndent": true,
        "vetur.format.scriptInitialIndent": true,

    // Editor configuration
    "editor.fontFamily": "Operator Mono Lig, Fira Code, Monaco, monospace",
    "editor.fontSize": 14, // For Monaco/Fire Code use: 13
    "editor.lineHeight": 25, // For Monaco/Fira Code use: 26
    "editor.fontLigatures": true,
    "editor.cursorStyle": "line",
    "editor.cursorBlinking": "smooth",
    "editor.tabSize": 2,
    "editor.rulers": [],
    "editor.renderIndentGuides": false,
    "editor.renderWhitespace": "boundary",
    "editor.minimap.enabled": false,
    "editor.minimap.renderCharacters": false,
    "editor.lineNumbers": "interval",

    // Color configuration
    "workbench.editor.showTabs": false,
    "workbench.activityBar.visible": false,
    "workbench.statusBar.visible": false,
    "workbench.iconTheme": "material-icon-theme",
    // "workbench.colorCustomizations": {
    //     "title.visible": "false",

    //     "entity.other.attribute-name": {
    //         "font-style": "italic"
    //     }
    // },

    // Terminal & Integrated terminal configuration
    "terminal.external.osxExec": "iTerm.app",
    "terminal.integrated.fontFamily": "Monaco, Fira Code, Operator Mono, monospace",
    "terminal.integrated.fontSize": 14, // For Monaco/Fira Code use: 12
    "terminal.integrated.lineHeight": 1.4, // For Monaco/Fira Code use: 1,4
    "terminal.integrated.enableBold": false,
    "terminal.integrated.cursorStyle": "underline",
    "terminal.integrated.cursorBlinking": true,

    // Custom configuration for vue language
    "[vue]": {
    },
    "materialTheme.cache.workbench.settings": {
        "themeColours": "Palenight High Contrast",
        "accent": "Indigo",
        "accentPrevious": "Lime"
    },
    "workbench.startupEditor": "none",
    "sublimeTextKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",
    "editor.formatOnPaste": true,

    // Sidebar expolorer options
    "explorer.openEditors.visible": 0,
    "workbench.editor.enablePreview": true,
    "workbench.editor.tabCloseButton": "off",
    "workbench.editor.showIcons": true,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "editor.smoothScrolling": true,
    "emmet.includeLanguages": {
        "php": "html",
        "laravel-blade": "html"
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
    "window.newWindowDimensions": "maximized",
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
    "typescript.quickSuggestionsForPaths": false,
    
    
    
    "vim.cursorStylePerMode": {
        "insert": "line",
        "normal": "block-outline"
    },
    "vim.easymotion": true,
    "vim.incsearch": true,
    "vim.useSystemClipboard": true,
    "vim.useCtrlKeys": true,
    "vim.hlsearch": true,
    "vim.overrideCopy": true,
    "vim.insertModeKeyBindings": [
        {
            "before": [
                "j",
                "j"
            ],
            "after": [
                "<Esc>"
            ]
        }
    ],
    "vim.otherModesKeyBindingsNonRecursive": [
        {
            "before": [
                "<leader>",
                "d"
            ],
            "after": [
                "d",
                "d"
            ]
        },
        {
            "before": [
                "<C-n>"
            ],
            "after": [],
            "commands": [
                {
                    "command": ":nohl"
                }
            ]
        },
        {
            "before": [
                "Z",
                "Z"
            ],
            "after": [],
            "commands": [
                {
                    "command": "workbench.action.files.save",
                    "args": []
                },
                {
                    "command": "workbench.action.closeActiveEditor",
                    "args": []
                }
            ]
        }
    ],
    "vim.leader": "<space>",
    "vim.handleKeys": {
        // "<C-a>": false,
        // "<C-f>": false,
        "<D-d>": false
    },
    "workbench.colorTheme": "Material Theme"
}
