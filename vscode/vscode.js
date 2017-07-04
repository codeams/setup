// Codeams' VSCode configuration file
{
    // App configuration
    "window.openFoldersInNewWindow": "on",
    "window.zoomLevel": 0,

    // Extensions configuration
    "extensions.ignoreRecommendations": false,
        // Vetur configuration
        "vetur.format.styleInitialIndent": true,
        "vetur.format.scriptInitialIndent": true,

    // Editor configuration
    "editor.fontFamily": "Operator Mono, Monaco, Fira Code, monospace",
    "editor.fontSize": 15, // For Monaco/Fire Code use: 13
    "editor.lineHeight": 36, // For Monaco/Fira Code use: 26
    "editor.fontLigatures": true,
    "editor.cursorStyle": "underline",
    "editor.cursorBlinking": "smooth",
    "editor.tabSize": 2,
    "editor.rulers": [], // [80],
    "editor.renderIndentGuides": false,
    "editor.renderWhitespace": "boundary",
    "editor.minimap.enabled": false,
    "editor.minimap.renderCharacters": false,
    "editor.lineNumbers": "off",

    // Color configuration
    "workbench.editor.showTabs": false,
    "workbench.activityBar.visible": false,
    "workbench.statusBar.visible": false,
    "workbench.colorTheme": "Material Theme Palenight",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorCustomizations": {
        "title.visible": "false",

        "entity.other.attribute-name": {
            "font-style": "italic"
        }
    },

    // Material theme configuration
    "materialTheme.cache.workbench.accent": "Teal",

    // Terminal & Integrated terminal configuration
    "terminal.external.osxExec": "iTerm.app",
    "terminal.integrated.fontFamily": "Operator Mono, Monaco, Fira Code, monospace",
    "terminal.integrated.fontSize": 14, // For Monaco/Fira Code use: 12
    "terminal.integrated.lineHeight": 1.4, // For Monaco/Fira Code use: 1,4
    "terminal.integrated.enableBold": false,
    "terminal.integrated.cursorStyle": "underline",
    "terminal.integrated.cursorBlinking": true,

    // Custom configuration for vue language
    "[vue]": {
    }
}