import { Box, BoxTypes } from 'grommet';
import { useSpring, config, useSpringRef, useChain } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { AnimatedBox } from 'components/animated/ index';

const SlideUpText: React.FC<BoxTypes> = ({ children, ...props }) => {
  const { ref, inView } = useInView({ threshold: 0.5, fallbackInView: true, triggerOnce: false });

  const txtRef = useSpringRef();
  const { y } = useSpring({
    ref: txtRef,
    y: inView ? 0 : 100,
    config: config.slow,
  });

  const lineRef = useSpringRef();
  const { x, w } = useSpring({
    ref: lineRef,
    x: inView ? 110 : -100,
    w: inView ? 0 : 100,
    config: { mass: 1, tension: 150, friction: 50 },
  });

  useChain([txtRef, lineRef], [0.1, 0]);

  return (
    <Box ref={ref} pad="0" margin="0" overflow="hidden" style={{ position: 'relative' }} {...props}>
      <AnimatedBox as="span" style={{ transform: y.to(v => `translate3d(0,${v}px,0)`) }}>
        {children}
      </AnimatedBox>
      <AnimatedBox
        // as="span"
        height="1px"
        background="brand"
        style={{
          position: 'absolute',
          left: x.to(v => `${v}%`),
          bottom: '0',
          width: w.to(v => `${v}%`),
        }}
      />
    </Box>
  );
};

export default SlideUpText;
