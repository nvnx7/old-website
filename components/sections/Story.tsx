import { Box, BoxTypes, Paragraph } from 'grommet';
import { DirectionType } from 'grommet/utils';
import useBreakpointValue from 'hooks/useBreakpointValue';

const Story: React.FC<BoxTypes> = ({ ...props }) => {
  const dir = useBreakpointValue<DirectionType>({ small: 'column-reverse', medium: 'row' });

  return (
    <Box {...props}>
      <Box direction={dir}>
        <Box width={{ width: '50%', min: 'medium' }}>
          <Paragraph>
            A potato pc at home, 50mb-ish mobile data pack and a spark of curiosity on a boring day
            - was what, you would probably say, red-pilled him as a kid to start tinkering in a now
            extinct IDE and write the famous <i>Hello World</i> program in C++. Naveen has always
            been a curious, rabbit-hole explorer, and not-so talkative, kind of being. Being good at
            mathematics (arguably), computers fascinated him. So, at 14, after school hours, he
            would teach himself programming using whatever at his disposal. He is allergic to
            monotonous tasks.
          </Paragraph>
          <Paragraph>
            Naveen is a computer engineer coming from a small-time town in India. He skipped formal
            college education to learn a lot (pun intended). He taught himself everything from
            discrete mathematics, algorithms, cryptography, ML to writing quality software -
            websites, apps, backend etc. He is naturally drawn towards the tech at the edge.
            Currently, he is focused on blockchains - Ethereum mostly, smart - contracts,
            zero-knowledge proofs and web3.0 in general. Also, contributing to open-source that
            interests him.
          </Paragraph>
          <Paragraph>
            His interest is not only limited to code. You can also find him to reading books of
            varying subjects - economics, psychology, biographies and a wee-bit fiction. Apart, from
            being fluent in Hindi and English, he&apos;s also learnt Spanish with working
            proficiency.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
