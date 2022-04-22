import { Footer as GrommetFooter, BoxProps, Text, Box } from 'grommet';

const Footer: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <GrommetFooter justify="center" {...props}>
      <Text textAlign="center" weight={900}>
        design{' '}
        <Text as="span" color="brand">
          x
        </Text>{' '}
        dev by{' '}
        <Text as="span" color="brand">
          @theNvN
        </Text>
      </Text>
    </GrommetFooter>
  );
};

export default Footer;
