import { PaymentButton } from "@/components/shared/PaymentButton";
import {
  VStack,
  Heading,
  Flex,
  Box,
  Input,
  HStack,
  ButtonGroup,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MapPinLine, CurrencyDollar } from "phosphor-react";

export function SectionForm() {
  return (
    <VStack as="section" maxW="640px" w="100%" spacing="15px" align="start">
      <Heading fontSize="1.125rem">Complete seu pedido</Heading>

      <VStack
        spacing="12px"
        w="100%"
        bg="gray.100"
        align="start"
        p={8}
        borderRadius="6px"
      >
        <Flex align="start" mb="50px" gap="5px">
          <Icon as={MapPinLine} w="22px" h="22px" color="yellow.300" />
          <Box>
            <Text fontSize="1rem" color="gray.700">
              Endereço de entrega
            </Text>
            <Text fontSize="0.875rem" color="gray.600">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </Box>
        </Flex>

        <VStack as="form" spacing={4} w="100%" align="start">
          <Input placeholder="CEP" variant="address" maxW="200px" w="100%" />
          <Input placeholder="Rua" variant="address" />
          <HStack w="100%" spacing={4}>
            <Input
              placeholder="Numero"
              variant="address"
              maxW="200px"
              w="100%"
            />
            <Input placeholder="Complemento" variant="address" flex="1" />
          </HStack>
          <HStack w="100%" spacing={4}>
            <Input
              placeholder="Bairro"
              variant="address"
              maxW="200px"
              w="100%"
            />
            <Input
              placeholder="Cidade"
              variant="address"
              maxW="276px"
              w="100%"
            />
            <Input placeholder="UF" variant="address" flex="1" />
          </HStack>
        </VStack>
      </VStack>

      <VStack
        spacing="12px"
        w="100%"
        bg="gray.100"
        align="start"
        p={8}
        borderRadius="6px"
      >
        <Flex align="start" mb="20px" gap="5px">
          <Icon as={CurrencyDollar} w="22px" h="22px" color="purple.300" />
          <Box>
            <Text fontSize="1rem" color="gray.700">
              Pagamento
            </Text>
            <Text fontSize="0.875rem" color="gray.600">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </Box>
        </Flex>

        <ButtonGroup w="100%" justifyContent="space-between">
          <PaymentButton w="33%" paymentType="credit">
            Cartão de crédito
          </PaymentButton>
          <PaymentButton w="33%" paymentType="debit">
            Cartão de débito
          </PaymentButton>
          <PaymentButton w="33%" paymentType="money">
            Dinheiro
          </PaymentButton>
        </ButtonGroup>
      </VStack>
    </VStack>
  );
}
