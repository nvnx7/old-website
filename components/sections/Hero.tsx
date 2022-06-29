import Marquee from 'react-fast-marquee';
import { HeroLogo } from 'components/animation';
import { Row } from 'components/layout';
import { OutlineText } from 'components/misc';
import { Box, BoxTypes } from 'grommet';

const Hero: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Row height={{ min: '80vh' }} justify="center" {...props}>
      <Box
        fill
        style={{ position: 'absolute', top: 0, bottom: 0, zIndex: 0 }}
        margin={{ top: 'auto', bottom: 'auto' }}
        justify="center"
      >
        <Marquee gradient={false}>
          <OutlineText>NAVEEN SAHU&nbsp;</OutlineText>
        </Marquee>
      </Box>
      <HeroLogo />
    </Row>
  );
};

export default Hero;
