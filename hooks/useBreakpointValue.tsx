import useBreakpoint from './useBreakpoint';

type Size = 'small' | 'medium' | 'large';
type IBreakpointValues<T extends string | number> = {
  small: T;
  medium?: T;
  large?: T;
};

const sizes: Size[] = ['small', 'medium', 'large'];

const useBreakpointValue = <T extends string | number>(values: IBreakpointValues<T>): T => {
  const currentSize = useBreakpoint() as Size;

  let k = sizes.indexOf(currentSize);
  while (k >= 0) {
    const size = sizes[k];
    if (values[size]) {
      break;
    }
    k--;
  }

  return values[sizes[k]] as T;
};

export default useBreakpointValue;
