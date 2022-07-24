import { CoffeeBox } from "@/components/shared/CoffeeBox";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

export function SectionCoffees() {
  return (
    <Box as="section">
      <Heading>Nossos cafés</Heading>

      <Flex
        flexWrap="wrap"
        gap="32px"
        justify="space-between"
        w="100%"
        mt="50px"
      >
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
        <CoffeeBox />
      </Flex>
    </Box>
  );
}
