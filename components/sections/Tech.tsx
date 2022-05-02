import { SlideUpHeading } from 'components/animation';
import { Mark } from 'components/common';
import { Column } from 'components/layout';
import { BoxTypes, Paragraph } from 'grommet';

const Tech: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column align="start" {...props}>
      <SlideUpHeading alignSelf="end">
        the <Mark>tech</Mark>
      </SlideUpHeading>
      <Paragraph>A subset of the tools of craft...</Paragraph>
    </Column>
  );
};

export default Tech;
