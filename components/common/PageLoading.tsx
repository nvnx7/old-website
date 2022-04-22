import { Box, BoxTypes } from 'grommet';

const PageLoading: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Box
      background="brand"
      align="center"
      justify="center"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
      }}
      {...props}
    >
      Loading...
    </Box>
  );
};

export default PageLoading;
