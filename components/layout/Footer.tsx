import { Link, Mark } from 'components/common';
import { SocialLinks } from 'components/sections';
import { Footer as GrommetFooter, BoxProps, Text, Box, Paragraph } from 'grommet';
import { DirectionType } from 'grommet/utils';
import useBreakpointValue from 'hooks/useBreakpointValue';

const Footer: React.FC<BoxProps> = ({ ...props }) => {
  const dir = useBreakpointValue<DirectionType>({ small: 'column', medium: 'row' });
  return (
    <GrommetFooter justify="between" align="center" direction="column" gap="small" {...props}>
      <Box height="2px" width="xxsmall" background="dark-3" margin={{ bottom: 'small' }} />

      <Box direction={dir} justify="between" align="center" width="full" gap="small">
        <SocialLinks width="small" iconSize="20px" />

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
      </Box>
    </GrommetFooter>
  );
};

export default Footer;
