import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Connect, Hero, Intro, Tech, Works } from 'components/sections';
import { ScrollCue } from 'components/animation';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />

      <Intro pad={{ horizontal: 'large' }} margin={{ vertical: 'xlarge' }} />

      <Works pad={{ horizontal: 'large' }} />
      <Tech margin={{ vertical: 'xlarge' }} />
      <Connect margin={{ bottom: 'xlarge' }} />

      <ScrollCue pad={{ vertical: '12px' }} />
    </Layout>
  );
};

export default Home;
