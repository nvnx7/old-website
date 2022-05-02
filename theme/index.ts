import { ThemeType } from 'grommet';

export const brandColor: string = '#E03E20';

const cssReset = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  backgroundImage: `url('/images/bg.png')`,
  '::-webkit-scrollbar': { width: 0 },
  '*::selection': {
    background: `${brandColor}`,
    color: 'white',
  },
  '*::-moz-selection': {
    background: `${brandColor}`,
    color: 'white',
  },
};

const customTheme: ThemeType = {
  global: {
    colors: {
      brand: brandColor,
      background: {
        dark: '#0f0f0f',
        white: '#ffffff',
      },
      'accent-1': '#ffffff',
    },
    font: {
      family: `'Monument Extended', monospace`,
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
      fontFamily: `'Share Tech Mono', monospace`,
    },
  },
  heading: {
    extend: {
      textTransform: 'uppercase',
      fontFamily: `'Monument Extended', monospace`,
    },
  },
};

export default customTheme;
