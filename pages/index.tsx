import type { NextPage } from 'next';
import { Box, Heading, Paragraph, Text } from 'grommet';
import { Column, Layout, Row } from 'components/layout';
import { Link } from 'components/common';
import LogoOutline from 'components/common/LogoOutline';
import { XLine } from 'components/misc';
import SlideUpText from 'components/animation/SlideUpText';
import { ScrollCue } from 'components/animation';

const Home: NextPage = () => {
  return (
    <Layout>
      <Column height={{ min: '80vh' }} justify="center" gap="xlarge">
        <LogoOutline />
      </Column>

      <Column
        width="fit-content"
        align="start"
        pad={{ horizontal: 'xlarge' }}
        margin={{ vertical: 'large' }}
      >
        <Row gap="small" justify="start" pad={{ top: 'xlarge', bottom: 'medium' }}>
          <Heading margin="0">
            <SlideUpText>dev making</SlideUpText>
            <SlideUpText>some dope stuff</SlideUpText>
          </Heading>
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
          <Link href="/about">
            <Text size="medium"> know more </Text>
          </Link>
        </Row>
      </Column>

      <ScrollCue pad={{ vertical: '12px' }} />
    </Layout>
  );
};

export default Home;
