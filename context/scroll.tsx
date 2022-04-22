import {
  createContext,
  useEffect,
  RefObject,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';

interface IScrollContext {
  scrollY: number;
  scrollHeight: number;
  maxScrollY: number;
  scrollYTo: (y: number) => void;
}

const initialState: IScrollContext = {
  scrollY: 0,
  scrollHeight: 0,
  maxScrollY: 0,
  scrollYTo: () => {},
};

interface IScrollProviderProps {
  elementRef: RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<IScrollContext>(initialState);

export const ScrollContextProvider: React.FC<IScrollProviderProps> = ({ elementRef, children }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [maxScrollY, setMaxScrollY] = useState<number>(0);

  useEffect(() => {
    if (!elementRef?.current) return;
    setMaxScrollY(elementRef.current.scrollHeight - elementRef.current.clientHeight);
  }, [elementRef]);

  useEffect(() => {
    if (!elementRef?.current) return;
    const el = elementRef.current;
    const handleScroll = () => {
      setScrollY(elementRef?.current?.scrollTop || 0);
    };

    setScrollHeight(elementRef.current.scrollHeight);
    el.addEventListener('scroll', handleScroll);

    return () => {
      el?.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

  const scrollYTo = useCallback(
    (y: number) => {
      elementRef?.current?.scrollTo(0, y);
    },
    [elementRef],
  );

  const value = useMemo(
    () => ({
      scrollY,
      scrollHeight,
      scrollYTo,
      maxScrollY,
    }),
    [scrollY, scrollHeight, scrollYTo, maxScrollY],
  );

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollContextProvider');
  }
  return context;
};
