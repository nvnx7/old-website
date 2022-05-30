import { default as NextLink } from 'next/link';
import { AnchorExtendedProps, AnchorProps, Text, TextProps } from 'grommet';
import { useSpring, config } from '@react-spring/web';
import { useHover } from '@use-gesture/react';
import { AnimatedAnchor, AnimatedBox } from 'components/animated/ index';
import { useState } from 'react';

interface LinkProps extends AnchorExtendedProps {
  text?: TextProps;
}

const Link: React.FC<LinkProps> = ({ href, children, text = {}, ...props }) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [{ w }, api] = useSpring(() => ({
    w: 0,
    config: config.default,
  }));

  const hoverBind = useHover(({ hovering }) => {
    setHovering(!!hovering);
    api.start({ w: hovering ? 100 : 0 });
  });

  return (
    <NextLink href={href ? href : ''} passHref>
      <AnimatedAnchor
        style={{ position: 'relative', overflow: 'visible' }}
        color={isHovering ? 'white' : 'brand'}
        {...hoverBind()}
        {...(props as AnchorProps)}
      >
        <AnimatedBox
          as="span"
          background="brand"
          style={{
            position: 'absolute',
            left: 0,
            top: 1,
            bottom: 1,
            width: w.to(v => `${v}%`),
          }}
        />
        <Text style={{ position: 'relative' }} {...text}>
          {children}
        </Text>
      </AnimatedAnchor>
    </NextLink>
  );
};

export default Link;
