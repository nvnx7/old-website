import { SlideUpHeading } from 'components/animation';
import { Mark } from 'components/common';
import { Column } from 'components/layout';
import tools from 'constants/tools';
import { Box, BoxTypes, Paragraph, Text } from 'grommet';
import useBreakpointValue from 'hooks/useBreakpointValue';
import Marquee from 'react-fast-marquee';

const Tech: React.FC<BoxTypes> = ({ ...props }) => {
  const cols = useBreakpointValue({ small: ['1/2', '1/2'], medium: ['1/4', '1/4', '1/4', '1/4'] });

  return (
    <Column {...props}>
      <SlideUpHeading alignSelf="end">
        the <Mark>tech</Mark>
      </SlideUpHeading>
      <Paragraph textAlign="center">A subset of the tools of craft.</Paragraph>
      {/* <Grid width="full" columns={cols} gap="small">
        {tools.map((label, i) => (
          <Text key={i} textAlign="center">
            {label}
          </Text>
        ))}
      </Grid> */}
      <Box gap="large">
        <Marquee gradient={false} speed={10}>
          {tools.web3.map(v => (
            <Text key={v} textAlign="center" margin={{ horizontal: 'medium' }}>
              {v}
            </Text>
          ))}
        </Marquee>
        <Marquee gradient={false} direction="right" speed={10}>
          {tools.back.map(v => (
            <Text key={v} textAlign="center" margin={{ horizontal: 'medium' }}>
              {v}
            </Text>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={10}>
          {tools.front.map(v => (
            <Text key={v} textAlign="center" margin={{ horizontal: 'medium' }}>
              {v}
            </Text>
          ))}
        </Marquee>
      </Box>
    </Column>
  );
};

export default Tech;
