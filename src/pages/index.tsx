import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IGridProduct } from "@/@types/Product";
import { GridProduct } from "@/components/GridProduct";
import Skeleton from "@/components/Skeleton";
import { fetchProducts } from "@/services/products";

export default function Home({ products }: IGridProduct) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    //TODO: adicionar Delay para exibir o Skeleton
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Mks-frontend-challenge</title>
      </Head>
      <main>
        {loading ? <Skeleton /> : <GridProduct products={products} />}
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
