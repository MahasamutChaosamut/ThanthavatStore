import { CartProvider } from 'contexts/cart/cart.provider';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { SearchProvider } from 'contexts/search/use-search';
import { CategoryProvider } from 'contexts/category/use-category';
import { useCategory } from "contexts/category/use-category";
import { useEffect } from "react";
import { getProducts } from "helpers/get-products";
import { getCategories } from "helpers/get-categories";
import 'typeface-open-sans';
import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/overlayscrollbars.css';
import 'assets/styles/scrollbar.css';
import 'assets/styles/rc-collapse.css';
import 'assets/styles/index.css';

export default function CustomApp({ Component, pageProps}) {
  return (
    <SearchProvider>
      <CategoryProvider>
        <DrawerProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </DrawerProvider>
      </CategoryProvider>
    </SearchProvider>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return {
    props: {
      products,
      categories,
    },
  };
}