/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: {
    relative: true,
    files: [
      './src/**/*.{html,ts}',
      '../sv5x-common/src/**/*.{html,ts}',
    ],
  },
  theme: {
    extend: {
      colors: {
        sv5: {
          bg: 'var(--sv5-bg)',
          panel: 'var(--sv5-panel)',
          'panel-muted': 'var(--sv5-panel-muted)',
          line: 'var(--sv5-line)',
          ink: 'var(--sv5-ink)',
          muted: 'var(--sv5-muted)',
          soft: 'var(--sv5-soft)',
          blue: 'var(--sv5-blue)',
          teal: 'var(--sv5-teal)',
          green: 'var(--sv5-green)',
          amber: 'var(--sv5-amber)',
          red: 'var(--sv5-red)',
        },
        template: {
          bg: 'var(--sv5-bg)',
          panel: 'var(--sv5-panel)',
          'panel-muted': 'var(--sv5-panel-muted)',
          line: 'var(--sv5-line)',
          ink: 'var(--sv5-ink)',
          muted: 'var(--sv5-muted)',
          soft: 'var(--sv5-soft)',
          blue: 'var(--sv5-blue)',
          teal: 'var(--sv5-teal)',
          green: 'var(--sv5-green)',
          amber: 'var(--sv5-amber)',
          red: 'var(--sv5-red)',
        },
      },
      boxShadow: {
        sv5: 'var(--sv5-shadow)',
        template: 'var(--sv5-shadow)',
      },
    },
  },
  plugins: [],
};
