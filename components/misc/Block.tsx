import { Box, BoxTypes } from 'grommet';
import { WidthType } from 'grommet/utils';

interface SquareTypes extends BoxTypes {
  size?: WidthType;
}

const Block: React.FC<SquareTypes> = ({ size = '10px', ...props }) => {
  return <Box width={size} height={size} background="brand" {...props} />;
};

export default Block;
