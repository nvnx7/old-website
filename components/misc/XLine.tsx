import { Box, BoxTypes } from 'grommet';

const XLine: React.FC<BoxTypes> = ({ width = 'small', ...props }) => {
  return <Box width={width} height="2px" background="brand" {...props} />;
};

export default XLine;
