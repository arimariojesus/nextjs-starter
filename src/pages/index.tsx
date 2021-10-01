import { NextPage } from 'next';

import Layout from '@/components/Layout';
import configClient from '@/config/client';

const Home: NextPage<Record<string, unknown>> = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <h1>{configClient.title}</h1>
      </div>
    </Layout>
  );
};

export default Home;
