import { SectionAbout } from "@/components/pages/Home/SectionAbout";
import { SectionCoffees } from "@/components/pages/Home/SectionCoffees";
import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <VStack as="main" py="90px" spacing="90px" alignItems="start">
      <Head>
        <title>Coffe Delivery</title>
      </Head>
      <SectionAbout />
      <SectionCoffees />
    </VStack>
  );
};

export default Home;
