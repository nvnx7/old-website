import { SlideUpHeading } from 'components/animation';
import { Link } from 'components/common';
import { Column } from 'components/layout';
import socialLinks from 'constants/social';
import { Box, BoxTypes } from 'grommet';

const Connect: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column {...props}>
      <SlideUpHeading>connect</SlideUpHeading>
      <Box direction="row" width="full" justify="around" pad={{ vertical: 'large' }}>
        <Link href={socialLinks.email}>mail</Link>
        <Link href={socialLinks.twitter} target="_blank">
          follow
        </Link>
        <Link href={socialLinks.whatsapp}>dm</Link>
      </Box>
    </Column>
  );
};

export default Connect;
