import { Coffee } from "@/@types";
import { SectionAbout } from "@/components/pages/Home/SectionAbout";
import { SectionCoffees } from "@/components/pages/Home/SectionCoffees";
import { api } from "@/services/api";
import { VStack } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface HomeProps {
  coffees: Coffee[];
}

export default function Home({ coffees }: HomeProps) {
  return (
    <VStack as="main" py="90px" spacing="90px" alignItems="start">
      <Head>
        <title>Coffe Delivery</title>
      </Head>
      <SectionAbout />
      <SectionCoffees coffees={coffees} />
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get("/coffees");
  const coffees = response.data;

  return {
    props: { coffees },
  };
};
