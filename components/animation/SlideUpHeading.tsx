import { Heading, HeadingExtendedProps } from 'grommet';
import { useSpring, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { AnimatedBox } from 'components/animated/ index';

const SlideUpHeading: React.FC<HeadingExtendedProps> = ({ children, ...props }) => {
  const { ref, inView } = useInView({ threshold: 0.5, fallbackInView: true, triggerOnce: true });

  const { y } = useSpring({
    y: inView ? 0 : 100,
    config: config.slow,
  });

  return (
    <Heading ref={ref} margin="0" style={{ position: 'relative', overflow: 'hidden' }} {...props}>
      <AnimatedBox style={{ y, display: 'block' }}>{children}</AnimatedBox>
    </Heading>
  );
};

export default SlideUpHeading;
