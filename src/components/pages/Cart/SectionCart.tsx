import { CoffeeMinimalBox } from "@/components/shared/CoffeeMinimalBox";
import { VStack, Heading, HStack, Text, Button } from "@chakra-ui/react";

export function SectionCart() {
  return (
    <VStack as="section" flex="1" spacing="15px" align="start">
      <Heading fontSize="1.125rem">Cafés selecionados</Heading>

      <VStack
        spacing="12px"
        w="100%"
        bg="gray.100"
        align="start"
        p={10}
        borderRadius="6px 44px"
      >
        <CoffeeMinimalBox />
        <CoffeeMinimalBox />

        <VStack w="100%">
          <HStack justify="space-between" w="100%">
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              Total de itens
            </Text>
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              R$ 29,70
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              Entrega
            </Text>
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              R$ 29,70
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="1.25rem" fontWeight="700">
              Total
            </Text>
            <Text fontSize="1.25rem" fontWeight="700">
              R$ 29,70
            </Text>
          </HStack>
        </VStack>

        <Button
          w="100%"
          bg="yellow.200"
          colorScheme="white"
          fontSize="0.875rem"
          fontWeight="700"
          textTransform="uppercase"
        >
          Confirmar pedido
        </Button>
      </VStack>
    </VStack>
  );
}
