import { useSpring, animated } from '@react-spring/web';
import { Box, BoxTypes } from 'grommet';
import { brandColor } from 'theme';

const Slash = () => {
  const { x, y } = useSpring({
    from: { x: -80, y: 80 },
    x: 20,
    y: -10,
    config: { mass: 4, tension: 400, friction: 250 },
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="550"
      height="450"
      viewBox="0 0 568 75"
      fill="none"
      style={{ overflowX: 'visible' }}
    >
      <animated.path
        d="M567.026 74.64L91.2076 74.6358L0.776191 0.230564L468.879 0.230018L567.026 74.64Z"
        fill={brandColor}
        fillOpacity="0.75"
        style={{ transform: 'rotate(141deg)', x, y, transformOrigin: 'center' }}
      />
    </svg>
  );
};

const HeroAvatar: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Box
      width="450px"
      height="450px"
      style={{ position: 'relative' }}
      justify="center"
      align="center"
      {...props}
    >
      <Box
        width="full"
        height="full"
        background={{ image: `url('/images/avatar.png')` }}
        style={{
          transform: 'matrix(-0.95, -0.32, -0.32, 0.95, 0, 0)',
          mixBlendMode: 'darken',
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <Slash />
    </Box>
  );
};

export default HeroAvatar;
