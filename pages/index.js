import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import WebLayout from '../Layout/WebLayout';
import { wrapper } from '../redux/store';
import { getProducts } from '../redux/actions/productAction';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <WebLayout />
      </div>
    </div>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req }) => {
//       async ({ req, store }) => {
//         await store.dispatch(getProducts(req));
//       };
//     }
// );

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(getProducts(req));
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (_context) => {
    await store.dispatch(getProducts());

    return {
      props: {},
    };
  }
);
