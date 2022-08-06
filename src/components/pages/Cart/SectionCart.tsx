import { CoffeeMinimalBox } from "@/components/shared/CoffeeMinimalBox";
import { useCart } from "@/hooks/useCart";
import { VStack, Heading, HStack, Text, Button } from "@chakra-ui/react";
import Router from "next/router";

interface SectionCartProps {}

const DELIVERY_PRICE = 3.3;

const priceFormat = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

export function SectionCart() {
  const { data } = useCart();

  const itensPrice = data
    .map((item) => item.amount * item.value)
    .reduce((acc, price) => acc + price, 0);

  const totalPrice = itensPrice + DELIVERY_PRICE;

  const itensPriceFormatted = priceFormat(itensPrice);
  const totalPriceFormatted = priceFormat(totalPrice);
  const deliveryPriceFormatted = priceFormat(DELIVERY_PRICE);

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
              {itensPriceFormatted}
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              Entrega
            </Text>
            <Text fontSize="0.87rem" fontWeight="400" color="gray.600">
              {deliveryPriceFormatted}
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="1.25rem" fontWeight="700">
              Total
            </Text>
            <Text fontSize="1.25rem" fontWeight="700">
              {totalPriceFormatted}
            </Text>
          </HStack>
        </VStack>

        <Button
          onClick={() => Router.push("/success")}
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
