import { Box, BoxTypes } from 'grommet';

const Column: React.FC<BoxTypes> = ({ children, ...props }) => {
  return (
    <Box
      direction="column"
      justify="between"
      align="center"
      style={{ position: 'relative' }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Column;
