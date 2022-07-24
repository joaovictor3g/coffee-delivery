import { Money } from "@/components/layout/Icons/Money";
import { Pin } from "@/components/layout/Icons/Pin";
import { Time } from "@/components/layout/Icons/Time";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Success() {
  return (
    <Flex align="center" h="calc(100vh - 100px)" justify="space-between">
      <Box maxW="526px" w="100%">
        <Heading color="yellow.300">Uhu! Pedido confirmado</Heading>
        <Text>Agora é só aguardar que logo o café chegará até você</Text>

        <VStack
          mt="40px"
          borderWidth="1px"
          borderColor="yellow.100"
          borderRadius="6px 36px"
          p={8}
          align="flex-start"
          spacing={6}
        >
          <Flex align="center" gap="5px">
            <Pin />
            <Text fontSize="1rem" color="gray.600">
              Entrega em{" "}
              <Text fontSize="1rem" color="gray.600" as="strong">
                Rua João Daniel Martinelli, 102
              </Text>{" "}
              Farrapos - Porto Alegre, RS
            </Text>
          </Flex>
          <Flex align="center" gap="5px">
            <Time />
            <Text fontSize="1rem" color="gray.600">
              Previsão de entrega{" "}
              <Text fontSize="1rem" color="gray.600" as="strong">
                20 min - 30 min
              </Text>
            </Text>
          </Flex>
          <Flex align="center" gap="5px">
            <Money />
            <Text fontSize="1rem" color="gray.600">
              Pagamento na entrega{" "}
              <Text fontSize="1rem" color="gray.600" as="strong">
                Cartão de Crédito
              </Text>
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Image src="/deliveryman.png" alt="Entregador" />
    </Flex>
  );
}
