import { useRouter } from 'next/router';
import { BoxTypes, Text } from 'grommet';
import { VerticalText } from 'components/misc';
import Column from './Column';
import ScrollBar from './ScrollBar';

const ScrollAside: React.FC<BoxTypes> = ({ ...props }) => {
  const { pathname } = useRouter();

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
        size="2xl"
        style={{ position: 'absolute', left: 0, right: 0, bottom: 100 }}
        textAlign="center"
        color="dark-2"
      >
        {pathname === '/' && 'root'}
        {pathname === '/about' && 'whoami'}
      </VerticalText>
    </Column>
  );
};

export default ScrollAside;
