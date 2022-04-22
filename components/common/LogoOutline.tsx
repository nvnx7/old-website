import { animated, config, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { AnimatedText } from 'components/animated/ index';
import { Column } from 'components/layout';
import { BoxTypes, Text } from 'grommet';

const LogoOutline: React.FC<BoxTypes> = ({ ...props }) => {
  const offsetRef = useSpringRef();
  const { offset } = useSpring({
    ref: offsetRef,
    from: { offset: 0 },
    offset: 1,
    opacity: 0.25,
    config: { mass: 4, tension: 400, friction: 200 },
  });

  const opacityRef = useSpringRef();
  const { opacity } = useSpring({
    ref: opacityRef,
    from: { opacity: 1 },
    opacity: 0.25,
    config: { mass: 4, tension: 400, friction: 200 },
  });

  const translateLogoRef = useSpringRef();
  const { t } = useSpring({
    ref: translateLogoRef,
    from: { t: 40 },
    t: 0.0,
    config: { mass: 4, tension: 400, friction: 250 },
  });

  const translateTextRef = useSpringRef();
  const { tX } = useSpring({
    ref: translateTextRef,
    from: { tX: 1000 },
    tX: 0.0,
    config: config.slow,
  });

  useChain([offsetRef, translateLogoRef, opacityRef, translateTextRef], [0, 0, 1, 0.8]);

  const y = 1048;

  const w = 500;
  const h = Math.round(w * (423 / 633));

  return (
    <Column width={`${w}px`} height={`${h}px`} justify="center" style={{ position: 'relative' }}>
      <Column width="full" pad={{ horizontal: '10%' }} overflow="hidden" style={{ zIndex: 1 }}>
        <AnimatedText
          weight={900}
          size="5xl"
          alignSelf="start"
          style={{ transform: tX.to(x => `translate(${-x}px, 0)`) }}
        >
          naveen
        </AnimatedText>
        <AnimatedText
          weight={900}
          size="5xl"
          alignSelf="end"
          style={{ transform: tX.to(x => `translate(${x}px, 0)`) }}
        >
          sahu
          <Text color="brand" weight={900} size="5xl">
            _
          </Text>
        </AnimatedText>
      </Column>

      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 633 423"
        fill="none"
        strokeDasharray={y}
        strokeDashoffset={offset.to(x => (1 - x) * y)}
        strokeOpacity={opacity}
        overflow="visible"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <animated.path
          d="M119.273 420.854H4.24408L311.355 48.7771L331.212 160.717L119.273 420.854Z"
          stroke="#EA5455"
          strokeWidth="4"
          fill="none"
          transform={t.to(x => `translate(${-x}, ${x})`)}
        />
        <animated.path
          d="M513.332 2.00745H628.338L321.251 372.759L301.38 261.205L513.332 2.00745Z"
          stroke="#EA5455"
          strokeWidth="4"
          fill="none"
          transform={t.to(x => `translate(${x}, ${-x})`)}
        />
      </animated.svg>
    </Column>
  );
};

export default LogoOutline;
