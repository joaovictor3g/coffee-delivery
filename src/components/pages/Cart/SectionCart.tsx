import { CoffeeMinimalBox } from "@/components/shared/CoffeeMinimalBox";
import { useCart } from "@/hooks/useCart";
import { VStack, Heading, HStack, Text, Button } from "@chakra-ui/react";

export function SectionCart() {
  const { data } = useCart();

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    data
      .map((item) => item.amount * item.value)
      .reduce((acc, price) => acc + price, 0)
  );

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
        {data.map((cartItem) => (
          <CoffeeMinimalBox key={cartItem.id} data={cartItem} />
        ))}

        <VStack w="100%">
          <HStack justify="space-between" w="100%">
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              Total de itens
            </Text>
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              {totalPrice}
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              Entrega
            </Text>
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              {totalPrice}
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="1.25rem" fontWeight="700">
              Total
            </Text>
            <Text fontSize="1.25rem" fontWeight="700">
              {totalPrice}
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
          _hover={{
            bg: "yellow.300",
          }}
        >
          Confirmar pedido
        </Button>
      </VStack>
    </VStack>
  );
}
