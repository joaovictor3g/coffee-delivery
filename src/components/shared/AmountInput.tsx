import { HStack, Button, Input, Text } from "@chakra-ui/react";

interface AmountInputProps {
  onChange(value: number): void;
  value: number;
}

export function AmountInput({ onChange, value }: AmountInputProps) {
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
        onClick={() => onChange(-1)}
      >
        {"-"}
      </Button>
      <Text color="gray.800" fontSize="1rem">
        {value}
      </Text>
      <Button
        onClick={() => onChange(1)}
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
