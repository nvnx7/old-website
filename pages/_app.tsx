import { createRef } from 'react';
import type { AppProps } from 'next/app';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import customTheme from 'theme';
import { SEO } from 'components/common';
import { ScrollContextProvider } from 'context/scroll';

import '@fontsource/share-tech-mono';
import 'theme/styles.css';

const theme = deepMerge(grommet, customTheme);

function App({ Component, pageProps }: AppProps) {
  const ref = createRef<HTMLDivElement>();

  return (
    <Grommet ref={ref} full theme={theme} themeMode="dark">
      <ScrollContextProvider elementRef={ref}>
        <>
          <SEO />
          <Component {...pageProps} />
        </>
      </ScrollContextProvider>
    </Grommet>
  );
}

export default App;
