import { SlideUpHeading } from 'components/animation';
import { Link, Mark } from 'components/common';
import { Column, Row } from 'components/layout';
import { XLine } from 'components/misc';
import { Box, BoxTypes, Paragraph } from 'grommet';

const Intro: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column align="start" {...props}>
      <Row gap="small" justify="start" pad={{ top: 'xlarge', bottom: 'medium' }}>
        <Box>
          <SlideUpHeading>dev making</SlideUpHeading>
          <SlideUpHeading>
            some <Mark>dope</Mark> stuff
          </SlideUpHeading>
        </Box>
        <XLine alignSelf="end" />
      </Row>

      <Box width={{ max: 'medium' }} alignSelf="end">
        <Paragraph textAlign="end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam urna sed eu, quis
          vitae. Convallis purus tincidunt accumsan ut lorem molestie. Sagittis mauris nibh semper
          tincidunt a eu quis mauris, malesuada. Tincidunt pulvinar eu tristique nullam habitasse.
        </Paragraph>
      </Box>

      <Row alignSelf="end" margin={{ vertical: 'large' }} gap="large">
        <Link href="/about">know more</Link>
      </Row>
    </Column>
  );
};

export default Intro;
