import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import FRYSTIC_index from '../components/frystic-index';

const IndexPage = () => {

  return (
  <>
  <Header/>
    <FRYSTIC_index/>
    <Layout>
      <PageIntro />
      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  </>
  )
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default IndexPage
