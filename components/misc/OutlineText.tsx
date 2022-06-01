import { Text, TextType } from 'grommet';
import useBreakpointValue from 'hooks/useBreakpointValue';
import { brandColor } from 'theme';

const OutlineText: React.FC<TextType> = ({ children, ...props }) => {
  const size = useBreakpointValue({ small: '72px', medium: '108px', large: '144px' });
  return (
    <Text
      size={size}
      color="background"
      style={{
        textShadow: `-1px -1px 0 ${brandColor}, 1px -1px 0 ${brandColor}, -1px 1px 0 ${brandColor}, 1px 1px 0 ${brandColor}`,
        userSelect: 'none',
        opacity: 0.3,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default OutlineText;
