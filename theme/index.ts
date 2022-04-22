import { ThemeType } from 'grommet';

const cssReset = `margin:0;padding:0;box-sizing:border-box;::-webkit-scrollbar{width:0;}`;

const customTheme: ThemeType = {
  global: {
    colors: {
      brand: '#EA5455',
      background: {
        dark: '#0f0f0f',
        white: '#ffffff',
      },
      'accent-1': '#ffffff',
    },
    font: {
      family: `'Source Code Pro', monospace`,
      size: '16px',
    },
  },
  grommet: {
    extend: cssReset,
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 900,
    hover: {
      textDecoration: 'none',
    },
  },
  paragraph: {
    extend: {
      maxWidth: 'initial',
    },
  },
};

export default customTheme;
