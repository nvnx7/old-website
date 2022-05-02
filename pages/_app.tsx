import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/900.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/share-tech-mono';
import 'theme/styles.css';

import { createRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import customTheme from 'theme';
import PageLoading from 'components/common/PageLoading';
import { ScrollContextProvider } from 'context/scroll';

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

  // const handleScroll = e => {
  //   e.preventDefault();
  //   console.log('scroll');
  // };

  const ref = createRef<HTMLDivElement>();

  return (
    <Grommet
      ref={ref}
      full
      theme={theme}
      themeMode="dark"
      // background={{ image: '/bg.png' }}
      // style={{ overflowY: 'hidden' }}
      // onScroll={handleScroll}
    >
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
