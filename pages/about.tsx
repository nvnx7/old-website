import SlideUpText from 'components/animation/SlideUpText';
import { Layout } from 'components/layout';
import { Box, Heading, Paragraph } from 'grommet';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Layout>
      <Box pad={{ horizontal: 'xlarge' }}>
        <Heading>
          <SlideUpText>a wee bit of</SlideUpText>
          <SlideUpText>intro</SlideUpText>
        </Heading>
        <Box width={{ width: '70%', min: 'medium' }}>
          <Paragraph>
            Ut amet donec placerat et dolor posuere at. Scelerisque pellentesque tristique cursus
            eget fermentum eget. Tempus mi placerat enim placerat purus ornare enim proin et.
            Pretium lectus tristique tempor neque consequat feugiat. Mi quisque in euismod tortor,
            sollicitudin commodo, elementum egestas congue. Ultricies enim, enim, pharetra aenean
            amet massa, tellus risus.
          </Paragraph>
          <Paragraph>
            Sollicitudin et pellentesque ipsum mi natoque vulputate suspendisse. Eget sodales libero
            bibendum aenean id. Enim vivamus vitae vitae accumsan justo. Sed sed enim magna ac
            mauris rhoncus varius nullam odio. Nisl, mattis non laoreet et. Arcu, lacus neque massa
            adipiscing venenatis. Lacus nec quam mollis ultricies sit at. Elit morbi aenean aliquam
            sodales venenatis vulputate a. Pretium interdum vitae dolor nec viverra quam amet.
          </Paragraph>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
