import { HStack, Button, Input, Text } from "@chakra-ui/react";

export function AmountInput() {
  return (
    <HStack
      bg="gray.300"
      borderRadius="6px"
      maxW="72px"
      w="100%"
      px={2}
      justify="space-between"
    >
      <Button
        variant="unstyled"
        bg="inherit"
        color="purple.200"
        p={0}
        minW="initial"
      >
        {"-"}
      </Button>
      <Text color="gray.800" fontSize="1rem">
        0
      </Text>
      <Button
        variant="unstyled"
        bg="inherit"
        color="purple.200"
        minW="initial"
        p={0}
      >
        {"+"}
      </Button>
    </HStack>
  );
}
