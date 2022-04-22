import { default as NextLink } from 'next/link';
import { Anchor, AnchorProps, Box } from 'grommet';
import { useSpring } from '@react-spring/web';
import { useHover } from '@use-gesture/react';
import { AnimatedAnchor, AnimatedBox } from 'components/animated/ index';
import { useState } from 'react';

const Link: React.FC<AnchorProps> = ({ href, children, ...props }) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [{ w }, api] = useSpring(() => ({
    w: 0,
  }));

  const hoverBind = useHover(({ hovering }) => {
    setHovering(!!hovering);
    api.start({ w: hovering ? 100 : 0 });
  });

  return (
    <NextLink href={href ? href : ''} passHref>
      <AnimatedAnchor
        style={{ position: 'relative' }}
        color={isHovering ? 'white' : 'brand'}
        {...hoverBind()}
        {...props}
      >
        <AnimatedBox
          as="span"
          background="brand"
          style={{
            position: 'absolute',
            zIndex: -1,
            left: 0,
            top: 1,
            bottom: 1,
            width: w.to(x => `${x}%`),
          }}
        />
        {children}
      </AnimatedAnchor>
    </NextLink>
  );
};
// const Link: React.FC<AnchorProps> = ({ href, children, ...props }) => {
//   return (
//     <NextLink href={href ? href : ''} passHref>
//       <Anchor {...props}>{children}</Anchor>
//     </NextLink>
//   );
// };

export default Link;
