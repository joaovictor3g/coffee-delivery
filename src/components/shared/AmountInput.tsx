import { HStack, Button, Input } from "@chakra-ui/react";

export function AmountInput() {
  return (
    <HStack bg="gray.300" borderRadius="6px" maxW="72px" w="100%">
      <Button variant="unstyled" bg="inherit" color="purple.200">
        {"-"}
      </Button>
      <Input variant="unstyled" value="1" color="black" />
      <Button variant="unstyled" bg="inherit" color="purple.200">
        {"+"}
      </Button>
    </HStack>
  );
}
