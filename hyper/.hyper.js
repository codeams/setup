"use strict";
module.exports = {
    config: {
        updateChannel: 'stable',

        fontSize: 15,
        fontFamily: 'PT Mono, Consolas, Sohne Mono, Operator Mono, Cascadia Code, Monaco, Fira Code, monospace',
        fontWeight: 'normal', // 'normal' or 'bold'
        fontWeightBold: 'normal', // 'normal' or 'bold'
        lineHeight: 1.5,
        letterSpacing: 0,

        cursorColor: 'rgba(248,28,229,0.8)', // (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorAccentColor: '#000', // terminal text color under BLOCK cursor
        cursorShape: 'BLOCK', // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorBlink: false,

        // foregroundColor: '#000',
        // backgroundColor: 'rgba(248,248,248,0.8)',
        // selectionColor: 'rgba(248,28,229,0.3)',
        // borderColor: '#333',

        css: '',
        termCSS: '',

        // set custom startup directory (must be an absolute path)
        workingDirectory: '',

        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '12px 14px',

        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        // colors: {
        //     black: '#000000',
        //     red: '#C51E14',
        //     green: '#1DC121',
        //     yellow: '#C7C329',
        //     blue: '#0A2FC4',
        //     magenta: '#C839C5',
        //     cyan: '#20C5C6',
        //     white: '#C7C7C7',
        //     lightBlack: '#686868',
        //     lightRed: '#FD6F6B',
        //     lightGreen: '#67F86F',
        //     lightYellow: '#FFFA72',
        //     lightBlue: '#6A76FB',
        //     lightMagenta: '#FD7CFC',
        //     lightCyan: '#68FDFE',
        //     lightWhite: '#FFFFFF',
        //     limeGreen: '#32CD32',
        //     lightCoral: '#F08080',
        // },

        // for environment variables
        env: {},

        bell: false,

        copyOnSelect: false,

        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: true,

        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        quickEdit: false,

        // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
        // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
        // (inside tmux or vim with mouse mode enabled for example).
        macOptionSelectionMode: 'vertical',

        // Whether to use the WebGL renderer. Set it to false to use canvas-based
        // rendering (slower, but supports transparent backgrounds)
        webGLRenderer: true,

        disableAutoUpdates: true,
        preserveCWD: true,
    },

    plugins: [
  'hyperterm-atom-dark'
  // 'hyper-flat'
  // 'hyper-one-light',
    ],
};
//# sourceMappingURL=config-default.js.map
