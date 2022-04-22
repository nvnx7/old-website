import { VerticalText } from 'components/misc';
import { Box, BoxTypes, Text } from 'grommet';
import Column from './Column';
import ScrollBar from './ScrollBar';

const ScrollAside: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column height="full" as="aside" justify="center" gap="large" {...props}>
      <Text
        style={{ transform: 'rotate(-90deg)' }}
        weight={900}
        margin={{ vertical: 'small' }}
        color="brand"
      >
        scroll
      </Text>
      <ScrollBar />
      <VerticalText
        weight={900}
        size="3xl"
        // alignSelf="end"
        style={{ position: 'absolute', left: 0, right: 0, bottom: 100 }}
        // margin={{ top: 'auto' }}
        textAlign="center"
        color="dark-1"
      >
        /root
      </VerticalText>
    </Column>
  );
};

export default ScrollAside;
