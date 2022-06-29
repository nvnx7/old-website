import { SlideUpHeading } from 'components/animation';
import { Link, Mark } from 'components/common';
import { Column, Row } from 'components/layout';
import { OutlineText, XLine } from 'components/misc';
import { Box, BoxTypes, Paragraph } from 'grommet';

const Intro: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Column align="start" {...props}>
      <Row gap="small" justify="start" pad={{ top: 'xlarge', bottom: 'medium' }}>
        <Box>
          <SlideUpHeading>building things</SlideUpHeading>
          <SlideUpHeading>
            that are <Mark>dope</Mark>
          </SlideUpHeading>
        </Box>
        <XLine alignSelf="end" />
      </Row>

      <Box fill style={{ position: 'absolute', right: 0 }} justify="end" align="end">
        <OutlineText>web3.0</OutlineText>
      </Box>

      <Box width={{ width: '50%', min: 'medium' }}>
        <Paragraph>
          A web3 engineer from India with experience in building things breathing on code - from
          web/mobile apps to servers and everything in between. Built stuff with sigma-tools
          including React, NextJs, React-Native, Kotlin, Node, Python, Solidity, Rust etc.
        </Paragraph>
        <Paragraph>
          Currently focused on blockchain tech - smart-contracts, zk-cryptography and decentralized
          web3 protocols.
        </Paragraph>
      </Box>

      <Row margin={{ vertical: 'large' }} gap="large">
        <Link href="/about">know more</Link>
      </Row>
    </Column>
  );
};

export default Intro;
