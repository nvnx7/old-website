import { Box, BoxTypes } from 'grommet';

const YLine: React.FC<BoxTypes> = ({ height = 'small', ...props }) => {
  return <Box height={height} width="2px" background="brand" {...props} />;
};

export default YLine;
