import { useContext } from 'react';
import { ResponsiveContext } from 'grommet';

const useBreakpoint = () => {
  return useContext(ResponsiveContext);
};

export default useBreakpoint;
