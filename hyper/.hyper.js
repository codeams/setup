module.exports = {
  config: {
    // Font configuration
    fontSize: 17,
    fontFamily: '"Operator Mono", Monaco, monospace',

    // Cursor configuration
    cursorShape: 'UNDERLINE',
    cursorBlink: true,

    // Text coloring configuration
    // foregroundColor: '#fff',
    // backgroundColor: '#000',

    // CSS configuration
    // css: '',
    termCSS: `
      x-screen {
        -webkit-font-smoothing: antialiased !important;
      }
    `,

    // Window configuration
    padding: '24px 24px',
    colors: {},

    // Material theme configuration
    MaterialTheme: {
      // OPTIONS: 'Darker', 'Palenight', ''
      theme: 'Palenight',

      backgroundOpacity: '0.7',
      accentColor: '#64FFDA',

      // Need restart. Enable the vibrance and blurred background
      // OPTIONS: 'dark', 'ultra-dark', 'bright'
      // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
      vibrancy: 'ultra-dark'
    },

    // Shell configuration
    shell: '/bin/zsh',
    // shellArgs: ['--login'], // by default ['--login'] will be used
    env: {},

    // Bahaviour
    // bellSoundURL: 'http://example.com/bell.mp3',
    bell: 'SOUND', // Set to false for no bell
    copyOnSelect: false
    // quickEdit: true // if true, on right click selected text will be copied or pasted if no
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyper-material-theme'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
