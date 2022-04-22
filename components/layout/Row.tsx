import { Box, BoxTypes } from 'grommet';

const Row: React.FC<BoxTypes> = ({ children, ...props }) => {
  return (
    <Box direction="row" justify="between" align="center" {...props}>
      {children}
    </Box>
  );
};

export default Row;
