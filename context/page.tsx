import { createContext, useContext, useMemo } from 'react';

const initialState = {
  isLoading: false,
};
const PageLoaderContext = createContext(initialState);

export const PageLoaderContextProvider: React.FC<any> = ({ children, ...props }) => {
  const value = useMemo(
    () => ({
      ...props,
    }),
    [props],
  );

  return <PageLoaderContext.Provider value={value}>{children}</PageLoaderContext.Provider>;
};

export const usePageLoader = () => {
  const context = useContext(PageLoaderContext);
  if (context === undefined) {
    throw new Error('usePageLoader must be used within a PageLoaderContextProvider');
  }
  return context;
};
