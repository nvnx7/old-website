import { useRouter } from 'next/router';
import { Header as GrommetHeader, Nav, Text, Box, BoxTypes } from 'grommet';
import { Logo, Link } from 'components/common';

const Header: React.FC<BoxTypes> = ({ ...props }) => {
  const { pathname } = useRouter();

  return (
    <GrommetHeader {...props}>
      <Box>
        <Logo />
      </Box>
      <Nav direction="row" justify="between" gap="xlarge" flex={{ grow: 0.2 }}>
        <Link href="/">{pathname === '/' && '/'}root</Link>
        <Link href="/about">{pathname === '/about' && '/'}about</Link>
        <Link href="/works">works</Link>
      </Nav>
    </GrommetHeader>
  );
};

export default Header;
