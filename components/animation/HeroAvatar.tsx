import { useSpring, animated } from '@react-spring/web';
import { Box, BoxTypes } from 'grommet';
import { brandColor } from 'theme';

const Slash: React.FC<{ size?: number }> = ({ size = 450 }) => {
  const { x, y } = useSpring({
    from: { x: -80, y: 80 },
    x: 20,
    y: -10,
    config: { mass: 4, tension: 400, friction: 250 },
  });

  const h = size;
  const w = Math.round((h * 11) / 9);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
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

const HeroAvatar: React.FC<{ size?: number } & BoxTypes> = ({ size = 450, ...props }) => {
  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
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
          zIndex: 0,
        }}
      />
      <Slash size={size} />
    </Box>
  );
};

export default HeroAvatar;
