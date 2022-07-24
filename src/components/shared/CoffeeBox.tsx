import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ShoppingCart } from "phosphor-react";
import { AmountInput } from "./AmountInput";

export function CoffeeBox() {
  return (
    <VStack
      maxW="256px"
      w="100%"
      minH="310px"
      h="100%"
      bg="gray.100"
      borderRadius="6px 36px 6px 36px"
      p={4}
      justify="space-between"
      position="relative"
    >
      <Image src="/Coffee.svg" alt="Cafe expresso" mt="-40px" />
      <HStack spacing={1}>
        <Box
          bg="yellow.100"
          fontSize="0.7rem"
          fontWeight="700"
          px={2}
          borderRadius={8}
        >
          <Text color="yellow.300" textTransform="uppercase">
            Tradicional
          </Text>
        </Box>
      </HStack>

      <Box>
        <Heading fontWeight="700" fontSize="1.5rem">
          Expresso Tradicional
        </Heading>
        <Text color="gray.500" fontSize="0.875rem" textAlign="center">
          O tradicional café feito com água quente e grãos moídos
        </Text>
      </Box>

      <Flex justify="space-between" w="100%">
        <Box display="flex" color="gray.600" alignItems="center" gap="2px">
          <Text>R$</Text>
          <Text
            fontWeight="800"
            fontSize="1.5rem"
            fontFamily={`"Baloo 2", sans-serif`}
          >
            9,90
          </Text>
        </Box>

        <ButtonGroup gap={5}>
          <AmountInput />

          <Button bg="purple.300">
            <ShoppingCart weight="fill" color="white" size={20} />
          </Button>
        </ButtonGroup>
      </Flex>
    </VStack>
  );
}
