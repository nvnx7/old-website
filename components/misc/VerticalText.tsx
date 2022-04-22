import { Text, TextExtendedProps } from 'grommet';

const VerticalText: React.FC<TextExtendedProps> = ({ children, style, ...props }) => {
  return (
    <Text style={{ transform: 'rotate(-90deg)', ...style }} {...props}>
      {children}
    </Text>
  );
};

export default VerticalText;
