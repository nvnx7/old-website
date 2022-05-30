import { useMemo } from 'react';
import useBreakpoint from 'hooks/useBreakpoint';

interface IHiddenProps {
  at?: 'small' | 'medium' | 'large';
  above?: 'small' | 'medium' | 'large';
  below?: 'small' | 'medium' | 'large';
}

const sizes = ['small', 'medium', 'large'];

function shouldHide(
  at: IHiddenProps['at'],
  above: IHiddenProps['above'],
  below: IHiddenProps['below'],
  size: string,
): boolean {
  if (at && size === at) {
    return true;
  }

  if (above && sizes.indexOf(size) > sizes.indexOf(above)) {
    return true;
  } else if (below && sizes.indexOf(size) < sizes.indexOf(below)) {
    return true;
  }

  return false;
}

const Hidden: React.FC<IHiddenProps> = ({ at, above, below, children }) => {
  const size = useBreakpoint();
  const hide = useMemo(() => shouldHide(at, above, below, size), [at, above, below, size]);

  if (hide) {
    return null;
  }

  return <>{children}</>;
};

export default Hidden;
