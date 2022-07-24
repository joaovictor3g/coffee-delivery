import { Coffee } from "@/@types";
import { CoffeeBox } from "@/components/shared/CoffeeBox";
import { Box, Flex, Heading } from "@chakra-ui/react";

interface SectionCoffeesProps {
  coffees: Coffee[];
}

export function SectionCoffees({ coffees }: SectionCoffeesProps) {
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
        {coffees?.map((coffee) => (
          <CoffeeBox key={coffee.id} coffee={coffee} />
        ))}
      </Flex>
    </Box>
  );
}
