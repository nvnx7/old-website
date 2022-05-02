import { createRef, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import customTheme from 'theme';
import { PageLoading } from 'components/common';
import { ScrollContextProvider } from 'context/scroll';

import '@fontsource/share-tech-mono';
import 'theme/styles.css';

const theme = deepMerge(grommet, customTheme);

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleChangeStart = () => {
      setIsLoading(true);
      console.log('routeChangeStart');
    };

    const handleChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      console.log('routeChangeComplete');
    };

    router.events.on('routeChangeStart', handleChangeStart);
    router.events.on('routeChangeComplete', handleChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleChangeStart);
      router.events.off('routeChangeComplete', handleChangeComplete);
    };
  }, [router.events]);

  const ref = createRef<HTMLDivElement>();

  return (
    <Grommet ref={ref} full theme={theme} themeMode="dark">
      <ScrollContextProvider elementRef={ref}>
        <>
          {isLoading && <PageLoading />}
          <Component {...pageProps} />
        </>
      </ScrollContextProvider>
    </Grommet>
  );
}

export default App;
