import { NextPage } from 'next';
import { HeroAvatar, SlideUpHeading } from 'components/animation';
import { Hidden, Layout } from 'components/layout';
import { Box } from 'grommet';
import { Connect, Story, Works } from 'components/sections';
import { Mark, SEO } from 'components/common';

const About: NextPage = () => {
  return (
    <Layout style={{ overflow: 'visible' }}>
      <SEO title="About" />
      <Box
        pad={{ horizontal: 'large', top: 'large' }}
        justify="around"
        style={{ position: 'relative', overflow: 'visible' }}
      >
        <SlideUpHeading>
          the <Mark>story</Mark>...
        </SlideUpHeading>
        <Hidden above="small">
          <HeroAvatar size={320} alignSelf="center" />
        </Hidden>

        <Story pad={{ top: 'medium' }} style={{ position: 'relative', zIndex: 1 }} />

        <Hidden below="medium">
          <HeroAvatar style={{ position: 'absolute', right: 0, top: 64 }} />
        </Hidden>
      </Box>

      {/* <Works pad={{ vertical: 'xlarge', horizontal: 'large' }} /> */}

      <Connect pad={{ vertical: 'large' }} />
    </Layout>
  );
};

export default About;
