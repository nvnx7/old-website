import { useState } from 'react';
import { config, useSpring } from '@react-spring/web';
import { AnimatedBox } from 'components/animated/ index';
import { Link, Logo } from 'components/common';
import { Box, BoxTypes } from 'grommet';
import Row from './Row';
import socialLinks from 'constants/social';
import { useRouter } from 'next/router';
import { SocialLinks } from 'components/sections';

interface IHamburgerButtonProps {
  isOpen: boolean;
  onClick?: () => void;
}
const HamburgerButton: React.FC<IHamburgerButtonProps> = ({ isOpen, onClick }) => {
  const { y } = useSpring({
    from: { y: 0 },
    y: isOpen ? 12 : 0,
    config: config.default,
  });

  const w = '8px';
  const h = '7px';
  return (
    <Row
      align="center"
      justify="around"
      width="44px"
      height="44px"
      style={{ zIndex: 10 }}
      onClick={onClick}
    >
      <AnimatedBox width={w} height={h} background="brand" style={{ y }} />
      <Box width={w} height={h} background="brand" />
      <AnimatedBox width={w} height={h} background="brand" style={{ y: y.to(v => -v) }} />
    </Row>
  );
};

const Drawer: React.FC<BoxTypes> = ({ ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { pathname } = useRouter();
  const { x } = useSpring({
    from: { x: 0 },
    x: isOpen ? 0 : 110,
    config: config.default,
  });

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <AnimatedBox
        as="nav"
        background="dark-1"
        justify="around"
        align="center"
        pad="xlarge"
        style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, x: x.to(v => `${v}vw`) }}
        // onClick={() => setOpen(false)}
        focusIndicator={false}
      >
        <Box style={{ position: 'absolute', left: 0, top: 0 }} pad="medium">
          <Logo />
        </Box>
        <Link href="/" text={{ size: 'xlarge' }}>
          {pathname === '/' && '/'}root
        </Link>
        <Link href="/about" text={{ size: 'xlarge' }}>
          {pathname === '/about' && '/'}about
        </Link>
        <Link href={socialLinks.dev} target="_blank" text={{ size: 'xlarge' }}>
          blog
        </Link>

        <SocialLinks />
      </AnimatedBox>
    </>
  );
};

export default Drawer;
