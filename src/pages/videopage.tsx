import Head from 'next/head';
import Layout from 'containers/layout/layout';
import Link from 'next/link';

export default function Videopage() {
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
      <div style={{ display: 'flex', padding: 30,justifyContent: 'space-between' }}>
      <div>
        <h1 style={{ color: '#2f368e' }}>วีดีโอทางร้าน</h1>
        </div>
        <div>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 15 }}>
            <li style={{ margin: '0 10px', color: '#2f368e'  }}>
              การเกษตร
            </li>
            <li style={{ margin: '0 10px', color: '#2f368e'  }}> 
              เกี่ยวกับดิน
            </li>
            <li style={{ margin: '0 10px', color: '#2f368e'  }}>
              ไร่นา
            </li>
            <li style={{ margin: '0 10px', color: '#2f368e'  }}>
              ผลิตภัณฑ์
            </li>
          </ul>
      </div>
      </div>
    </Layout>
  );
}
