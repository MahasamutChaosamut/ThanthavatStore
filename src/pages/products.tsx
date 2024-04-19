import { useState } from "react";
import Head from "next/head";
import Layout from "containers/layout/layout";
import Product from "containers/products";
import { useCategory } from "contexts/category/use-category";
import Button from "components/button";
import { getProducts } from "helpers/get-products";
import { getCategories } from "helpers/get-categories";

export default function Products({ product, categories }) {
  const uniqueTypes = [...new Set(product.map((item) => item))];
  const [filteredProducts, setProducts] = useState();
  const [selectedType, setSelectedType] = useState("");
  const { category, setCategory } = useCategory();
  setCategory('');

  const handleclearSelect = () => {
    const Products = product;
    setProducts(Products);
    setSelectedType("");
    setCategory('');
  };
  const handleCategorySelect = (id) => {
    const filteredProducts = product.filter((x) => x.category_ids.split(',')?.includes(id));
    setProducts(filteredProducts);
    console.log(filteredProducts);
    if (category !== id) {
      setCategory(id);
    }
    setSelectedType(id);
  };
  console.log(category);
  console.log(product);

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
      <div style={{ display: "flex", padding: 30 }}>
        <div
          style={{
            flexDirection: "column",
            width: "350px",
            wordWrap: "break-word",
            padding: 40,
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "40px",
          }}
        >
          <h1>ประเภทสินค้า</h1>
          {categories?.map((c) => {
            return (
              <div key={c.id}>
                {c.parent == 0 ? (
                  <button onClick={() => handleCategorySelect(c.id)} className={`selected ${selectedType === c.id ? 'bold' : ''}`}>
                    {selectedType === c.id ? "✓  " : ""}
                    {c.name}
                  </button>
                ) : (
                  <div style={{ marginLeft: 20 }}>
                    <button onClick={() => handleCategorySelect(c.id)} className={`selected ${selectedType === c.id ? 'bold' : ''}`}>
                      {selectedType === c.id ? "✓  " : ""}
                      {c.name}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          <Button
            className="big w-full"
            style={{ marginTop: 20 }}
            onClick={() => handleclearSelect()}
          >
            ล้างตัวเลือก
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
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

        .bold {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
export async function getServerSideProps() {
  const product = await getProducts();
  const categories = await getCategories();
  return {
    props: {
      product,
      categories
    },
  };
}
