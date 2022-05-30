import { Box, BoxTypes, Text } from 'grommet';

const Mark: React.FC<BoxTypes> = ({ children, ...props }) => {
  return (
    <Text
      as="mark"
      size="inherit"
      color="brand"
      style={{ display: 'inline', background: 'none' }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Mark;
