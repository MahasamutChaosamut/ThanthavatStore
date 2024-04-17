import { useState } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import Product from 'containers/products';
import { useCategory } from 'contexts/category/use-category';
import Button from 'components/button';
import { getProducts } from 'helpers/get-products';

export default function Products({ product }) {
  const uniqueTypes = [...new Set(product.map(item => item.type))];
  const [filteredProducts, setProducts] = useState();
  const [selectedType, setSelectedType] = useState('');

  const { category, setCategory } = useCategory();
  setCategory('');

  const handleTypeSelect = (type) => {
    const filteredProducts = product.filter(x => x.type === type);
    setProducts(filteredProducts);
    setSelectedType(type);
  };
  const handleclearSelect = () => {
    const filteredProducts = product;
    setProducts(filteredProducts);
    setCategory('');
    setSelectedType('');
  };

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>สินค้า</title>
      </Head>
      <div style={{ display: 'flex', padding: 30 }}>
        <div style={{ flexDirection: 'column', width: '300px', height: '400px', wordWrap: 'break-word', padding: 40, border: '1px solid #ccc', borderRadius: '5px', marginRight: '40px' }}>
          {uniqueTypes.map((type, index) => (
            <div key={index}>
              <button
                onClick={() => handleTypeSelect(type)}
                className='selected'
              >
                {selectedType === type ? '✓ ' : ''}
                {type as React.ReactNode}
              </button>
            </div>
          ))}
          <Button className="big w-full" style={{marginTop:20}} onClick={() => handleclearSelect()}>
            ล้างตัวเลือก
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <h1>รายการสินค้า</h1>
          <Product items={filteredProducts || product} />
        </div>
      </div>
      <style jsx>{`
        .selected {
          color: black;
        }

        .selected:hover {
          color: #797db7; 
        }
      `}</style>
    </Layout>
  );
}
export async function getServerSideProps() {
  const product = await getProducts();
  return {
    props: {
      product,
    },
  };
}