import { Box, BoxTypes, Main } from 'grommet';
import useBreakpoint from 'hooks/useBreakpoint';
import ContactAside from './ContactAside';
import Footer from './Footer';
import Header from './Header';
import Hidden from './Hidden';
import ScrollAside from './ScrollAside';

const Layout: React.FC<BoxTypes> = ({ children, ...props }) => {
  const size = useBreakpoint();

  return (
    <Box style={{ position: 'relative' }}>
      <Header
        pad={{ vertical: 'medium', horizontal: 'large' }}
        style={{ position: 'sticky', top: 0, zIndex: 10 }}
      />
      <Hidden below="medium">
        <ContactAside
          pad="medium"
          // border="all"
          style={{ position: 'fixed', top: 0, left: 0 }}
          width="10%"
        />
      </Hidden>
      <Main
        width={size === 'small' ? '100%' : '80%'}
        alignSelf="center"
        style={{ position: 'relative' }}
        {...props}
      >
        {children}
      </Main>
      <Hidden below="medium">
        <ScrollAside style={{ position: 'fixed', top: 0, right: 0 }} width="10%" />
      </Hidden>
      <Footer pad={{ horizontal: 'medium', vertical: 'small' }} />
    </Box>
  );
};

export default Layout;
