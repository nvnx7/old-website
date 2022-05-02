import { SlideUpHeading } from 'components/animation';
import { Link } from 'components/common';
import { Column } from 'components/layout';
import { Box, BoxTypes } from 'grommet';

const Connect: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column {...props}>
      <SlideUpHeading>connect</SlideUpHeading>
      <Box direction="row" width="full" justify="around" pad={{ vertical: 'large' }}>
        <Link href="#">mail</Link>
        <Link href="#">follow</Link>
        <Link href="#">dm</Link>
      </Box>
    </Column>
  );
};

export default Connect;
