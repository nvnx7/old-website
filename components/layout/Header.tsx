import { useRouter } from 'next/router';
import { Header as GrommetHeader, Nav, Box, BoxTypes } from 'grommet';
import { Logo, Link } from 'components/common';
import Drawer from './Drawer';
import Hidden from './Hidden';
import socialLinks from 'constants/social';

const Header: React.FC<BoxTypes> = ({ ...props }) => {
  const { pathname } = useRouter();

  return (
    <GrommetHeader {...props}>
      <Box>
        <Logo />
      </Box>

      <Hidden below="medium">
        <Nav direction="row" justify="between" align="center" gap="xlarge" flex={{ grow: 0.2 }}>
          <Link href="/">{pathname === '/' && '/'}root</Link>
          <Link href="/about">{pathname === '/about' && '/'}about</Link>
          <Link href={socialLinks.dev} target="_blank">
            blog
          </Link>
        </Nav>
      </Hidden>

      <Hidden above="small">
        <Drawer />
      </Hidden>
    </GrommetHeader>
  );
};

export default Header;
