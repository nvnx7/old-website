import { BoxTypes, Text } from 'grommet';
import { animated, useSpring } from '@react-spring/web';
import { Column } from 'components/layout';
import useBreakpointValue from 'hooks/useBreakpointValue';
import { brandColor } from 'theme';

const HeroLogo: React.FC<BoxTypes> = ({ ...props }) => {
  const { t } = useSpring({
    from: { t: 60 },
    t: 0,
    config: { mass: 4, tension: 400, friction: 250 },
  });

  const logoW = useBreakpointValue({ small: 300, medium: 500 });
  const logoH = Math.round(logoW * (423 / 633));

  const txtSz = useBreakpointValue({ small: '3xl', medium: '5xl' });
  console.log(logoW);

  return (
    <Column
      width={`${logoW}px`}
      height={`${logoH}px`}
      justify="center"
      style={{ position: 'relative' }}
      {...props}
    >
      <Text weight={900} size={txtSz} style={{ zIndex: 1, textShadow: '2px 2px 60px black' }}>
        NAVEEN
      </Text>

      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={logoW}
        height={logoH}
        viewBox="0 0 633 423"
        fill="none"
        overflow="visible"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <animated.path
          d="M119.273 420.854H4.24408L311.355 48.7771L331.212 160.717L119.273 420.854Z"
          stroke={brandColor}
          strokeWidth="4"
          fill={brandColor}
          transform={t.to(x => `translate(${-x}, ${x})`)}
        />
        <animated.path
          d="M513.332 2.00745H628.338L321.251 372.759L301.38 261.205L513.332 2.00745Z"
          stroke={brandColor}
          strokeWidth="4"
          fill={brandColor}
          transform={t.to(x => `translate(${x}, ${-x})`)}
        />
      </animated.svg>
    </Column>
  );
};

export default HeroLogo;
