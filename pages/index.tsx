import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, Heading, Paragraph, Text } from 'grommet';
import { Column, Layout, Row } from 'components/layout';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link, Logo } from 'components/common';
import LogoOutline from 'components/common/LogoOutline';
import { VerticalText, XLine } from 'components/misc';

const A = (
  <Column height={{ min: '80vh' }} justify="center">
    <LogoOutline />
  </Column>
);
const B = (
  <Column
    width="fit-content"
    align="start"
    pad={{ horizontal: 'xlarge' }}
    margin={{ vertical: 'large' }}
  >
    <Row gap="small" justify="start" pad={{ top: 'xlarge', bottom: 'medium' }}>
      <Heading margin="0">
        dev making <br /> some dope stuff
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
      <Link size="large" href="/about">
        know more
      </Link>
      <Text size="large" weight={900}>
        /
      </Text>
      <Link size="large" href="/">
        contact
      </Link>
    </Row>
  </Column>
);

const Home: NextPage = () => {
  return (
    <Layout>
      {A}
      {B}
      {/* <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax> */}
    </Layout>
  );
};

export default Home;
