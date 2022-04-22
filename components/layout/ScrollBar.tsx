import { createRef, useEffect } from 'react';
import { useSpring } from '@react-spring/web';
import { useDrag, useHover } from '@use-gesture/react';
import { Box, BoxTypes } from 'grommet';
import { AnimatedBox } from 'components/animated/ index';
import { useScroll } from 'context/scroll';

const ScrollBar: React.FC<BoxTypes> = ({ ...props }) => {
  const { scrollY: sy, maxScrollY: sh, scrollYTo } = useScroll();

  const ref = createRef<HTMLDivElement>();
  // console.log({ sh });

  useEffect(() => {
    if (sy >= sh) return;
    const maxY = ref.current?.clientHeight || 0;
    const dy = (sy / sh) * maxY;
    // console.log({ sy, dy });

    api.start({ y: dy });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sy, sh]);

  const [{ y, scale }, api] = useSpring(() => ({ y: 0, scale: 1 }));
  const dragBind = useDrag(({ movement }) => {
    const dy = movement[1];
    console.log({ dy });
    scrollYTo(sh * (dy / 100));
  });

  const hoverBind = useHover(({ hovering }) => {
    api.start({ scale: hovering ? 1.2 : 1 });
  });

  return (
    <Box height="100px" width="20px" style={{ position: 'relative' }} {...props}>
      <Box
        ref={ref}
        width="2px"
        height="full"
        background="light-1"
        margin={{ left: 'auto', right: 'auto' }}
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      />

      <AnimatedBox
        background="brand"
        width="14px"
        height="14px"
        round="full"
        margin={{ left: 'auto', right: 'auto' }}
        {...dragBind()}
        {...hoverBind()}
        style={{ position: 'absolute', left: 0, right: 0, top: y, scale, cursor: 'pointer' }}
      />
    </Box>
  );
};

export default ScrollBar;
