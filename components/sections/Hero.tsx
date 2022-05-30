import { HeroLogo } from 'components/animation';
import { Row } from 'components/layout';
import { BoxTypes } from 'grommet';

const Hero: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Row height={{ min: '80vh' }} justify="center" {...props}>
      <HeroLogo />
    </Row>
  );
};

export default Hero;
