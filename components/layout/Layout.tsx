import { Box, BoxTypes, Main } from 'grommet';
import ContactAside from './ContactAside';
import Footer from './Footer';
import Header from './Header';
import ScrollAside from './ScrollAside';

const Layout: React.FC<BoxTypes> = ({ children, ...props }) => {
  return (
    <Box style={{ position: 'relative' }}>
      <Header
        pad={{ vertical: 'medium', horizontal: 'large' }}
        style={{ position: 'sticky', top: 0, zIndex: 10 }}
      />
      <ContactAside
        pad="medium"
        // border="all"
        style={{ position: 'fixed', top: 0, left: 0 }}
        width="10%"
      />
      <Main width="80%" alignSelf="center" style={{ position: 'relative' }} {...props}>
        {children}
      </Main>
      <ScrollAside style={{ position: 'fixed', top: 0, right: 0 }} width="10%" />
      <Footer pad={{ horizontal: 'medium', vertical: 'large' }} />
    </Box>
  );
};

export default Layout;
