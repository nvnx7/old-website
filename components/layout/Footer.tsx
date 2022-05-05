import { Link, Mark } from 'components/common';
import { SocialLinks } from 'components/sections';
import { Footer as GrommetFooter, BoxProps, Text, Box, Paragraph } from 'grommet';
import Column from './Column';
import Row from './Row';

const Footer: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <GrommetFooter justify="between" align="center" direction="column" gap="small" {...props}>
      <Box height="4px" width="xxsmall" background="brand" />
      <Row width="full">
        <SocialLinks width="small" />

        <Text textAlign="center" size="small" alignSelf="center">
          design{' '}
          <Text as="span" color="brand" size="small">
            x
          </Text>{' '}
          dev by <Mark>@theNvN</Mark>
        </Text>

        <Box>
          <Paragraph size="small">
            This website is open-source on{' '}
            <Link text={{ size: 'small' }} href="https://github.com/theNvN/website">
              github.
            </Link>
          </Paragraph>
        </Box>
      </Row>
    </GrommetFooter>
  );
};

export default Footer;
