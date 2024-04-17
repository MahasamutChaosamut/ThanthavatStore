import Head from 'next/head';
import Layout from 'containers/layout/layout';

export default function EventandNews() {
  return (
    <Layout style={{ height: 'auto' }}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Terms &amp; Condition</title>
      </Head>
    </Layout>
  );
}
