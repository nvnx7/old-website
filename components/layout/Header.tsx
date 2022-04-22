import { Header as GrommetHeader, Nav, Text, Box, BoxTypes } from 'grommet';
import { Logo, Link } from 'components/common';

const Header: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <GrommetHeader {...props}>
      <Box>
        <Logo />
      </Box>
      <Nav direction="row" justify="between" gap="xlarge" flex={{ grow: 0.2 }}>
        <Link href="/">
          <Text size="medium"> /root </Text>
        </Link>
        <Link href="/about">
          <Text size="medium"> about </Text>
        </Link>
        <Link href="/works">
          <Text size="medium"> works </Text>
        </Link>
      </Nav>
    </GrommetHeader>
  );
};

export default Header;
