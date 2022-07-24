import {
  Flex,
  Image,
  Box,
  Text,
  Button,
  Divider,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { Trash } from "phosphor-react";
import { AmountInput } from "./AmountInput";

export function CoffeeMinimalBox() {
  return (
    <VStack w="100%">
      <Flex gap="10px" mb="30px" w="100%">
        <Image src="/Coffee.svg" alt="Cafe" w="64px" h="64px" />
        <Box w="100%">
          <Flex justify="space-between" mb="10px">
            <Text fontWeight="700" fontSize="1rem" color="gray.700">
              Expresso Tradicional
            </Text>
            <Text fontWeight="700" fontSize="1rem" color="gray.600">
              R$ 9,90
            </Text>
          </Flex>
          <Flex align="center" gap="10px">
            <AmountInput />
            <Button bg="gray.300" _hover={{ bg: "gray.400" }}>
              <Icon as={Trash} color="purple.200" w="16px" h="16px" />
              <Text fontSize="0.75rem" color="gray.500" fontWeight="400">
                REMOVER
              </Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Divider w="100%" borderColor="gray.300" />
    </VStack>
  );
}
