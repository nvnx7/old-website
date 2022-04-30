import { useSpring } from '@react-spring/web';
import { AnimatedBox } from 'components/animated/ index';
import { useScroll } from 'context/scroll';
import { BoxProps } from 'grommet';

const ScrollCue: React.FC<BoxProps> = ({ ...props }) => {
  const { hasScrolled } = useScroll();
  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: 0.7,
    delay: hasScrolled ? 0 : 2500,
    reverse: hasScrolled,
    config: { mass: 1.5, tension: 200, friction: 100 },
  });

  const { y, cueOpacity, h } = useSpring({
    from: { y: -20, cueOpacity: 1, h: 50 },
    y: 80,
    cueOpacity: 0.1,
    h: 0,
    delay: 200,
    loop: true,
    reset: true,
    config: { mass: 1.5, tension: 200, friction: 100 },
  });

  return (
    <AnimatedBox
      width="3px"
      height="72px"
      background="dark-1"
      margin="auto"
      style={{ opacity, position: 'fixed', left: 0, right: 0, bottom: 20 }}
      {...props}
    >
      <AnimatedBox
        background="brand"
        style={{
          width: '100%',
          y,
          opacity: cueOpacity,
          height: h.to(v => `${v}%`),
        }}
      />
    </AnimatedBox>
  );
};

export default ScrollCue;
