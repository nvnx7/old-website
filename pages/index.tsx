import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Connect, Hero, Intro, Tech } from 'components/sections';
import { ScrollCue } from 'components/animation';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro pad={{ horizontal: 'large' }} margin={{ vertical: 'large' }} />
      <Tech pad={{ horizontal: 'large' }} />
      <Connect margin={{ vertical: 'xlarge' }} />

      <ScrollCue pad={{ vertical: '12px' }} />
    </Layout>
  );
};

export default Home;
