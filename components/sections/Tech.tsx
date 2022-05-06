import { SlideUpHeading } from 'components/animation';
import { Mark } from 'components/common';
import { Column } from 'components/layout';
import tools from 'constants/tools';
import { BoxTypes, Grid, Paragraph, Text } from 'grommet';
import useBreakpointValue from 'hooks/useBreakpointValue';

const Tech: React.FC<BoxTypes> = ({ ...props }) => {
  const cols = useBreakpointValue({ small: ['1/2', '1/2'], medium: ['1/4', '1/4', '1/4', '1/4'] });

  return (
    <Column {...props}>
      <SlideUpHeading alignSelf="end">
        the <Mark>tech</Mark>
      </SlideUpHeading>
      <Paragraph textAlign="center">A subset of the tools of craft.</Paragraph>
      <Grid width="full" columns={cols} gap="small">
        {tools.map((label, i) => (
          <Text key={i} textAlign="center">
            {label}
          </Text>
        ))}
      </Grid>
    </Column>
  );
};

export default Tech;
