import { useEffect, useState } from 'react';
import { Anchor, BoxTypes, Nav, Text } from 'grommet';
import { More } from 'grommet-icons';
import { config, useSpring } from '@react-spring/web';
import { useHover } from '@use-gesture/react';
import { AnimatedBox, AnimatedText, AnimatedYLine } from 'components/animated/ index';
import { VerticalText, YLine } from 'components/misc';
import Column from './Column';
import socialLinks from 'constants/social';

interface HoverLabelProps {
  label: string;
  isHovering: boolean;
  multiplier: number;
}

const HoverLabel: React.FC<HoverLabelProps> = ({ label, isHovering, multiplier = 100 }) => {
  const [{ w }, api] = useSpring(() => ({
    w: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    api.start({ w: isHovering ? 1 : 0 });
  }, [isHovering, api]);

  return (
    <AnimatedBox
      direction="row"
      align="center"
      width={{ max: 'initial' }}
      background="brand"
      color="white"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: w.to(x => `${multiplier * x}px`),
      }}
    >
      <AnimatedText
        as="span"
        size="medium"
        weight={900}
        color="white"
        style={{ overflow: 'hidden' }}
      >
        {label}
      </AnimatedText>
    </AnimatedBox>
  );
};

const ContactAside: React.FC<BoxTypes> = ({ ...props }) => {
  const [hoverIdx, setHoverIdx] = useState<number>(-1);
  const { h } = useSpring({ from: { h: 0 }, h: 100, config: config.stiff });

  const bind = useHover(({ hovering, args }) => {
    hovering ? setHoverIdx(args?.[0]) : setHoverIdx(-1);
  });

  return (
    <Column height="full" justify="around" {...props}>
      <Column gap="large">
        <AnimatedYLine style={{ height: h.to(v => `${v}px`) }} />
        <VerticalText weight={900} margin={{ vertical: 'small' }}>
          connect
        </VerticalText>
      </Column>

      <Nav direction="column" justify="between" align="start" gap="small" flex={{ grow: 0.2 }}>
        <Anchor
          href={socialLinks.twitter}
          target="_blank"
          weight={900}
          {...bind(0)}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <Text size="medium" weight={900}>
            tw
          </Text>
          <HoverLabel isHovering={hoverIdx === 0} label="twitter" multiplier={80} />
        </Anchor>

        <Anchor
          href={socialLinks.github}
          target="_blank"
          weight={900}
          {...bind(1)}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <Text size="medium" weight={900}>
            gh
          </Text>
          <HoverLabel isHovering={hoverIdx === 1} label="github" multiplier={70} />
        </Anchor>

        <Anchor
          href={socialLinks.whatsapp}
          target="_blank"
          weight={900}
          {...bind(2)}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <Text size="medium" weight={900}>
            wh
          </Text>
          <HoverLabel isHovering={hoverIdx === 2} label="whatsapp" multiplier={90} />
        </Anchor>

        <Anchor
          href={socialLinks.email}
          weight={900}
          {...bind(3)}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <Text size="medium" weight={900}>
            @
          </Text>
          <HoverLabel isHovering={hoverIdx === 3} label="email" multiplier={60} />
        </Anchor>

        <Anchor href={socialLinks.linkTree} target="_blank">
          <More color="brand" size="medium" />
        </Anchor>
      </Nav>
    </Column>
  );
};

export default ContactAside;
