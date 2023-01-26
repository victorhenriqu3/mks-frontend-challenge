import { GetStaticProps } from "next";
import Head from "next/head";
import { IGridProduct } from "@/@types/Product";
import { GridProduct } from "@/components/GridProduct";
import { fetchProducts } from "@/services/products";

export default function Home({ products }: IGridProduct) {
  return (
    <>
      <Head>
        <title>Mks-frontend-challenge</title>
      </Head>
      <main>
        <GridProduct products={products} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  const oneHour = 60 * 60 * 1;

  return {
    props: {
      products,
    },
    revalidate: oneHour, // TODO: revalida a cada 1 Hora
  };
};
