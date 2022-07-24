import { Button, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <Flex w="100%" justify="space-between">
      <Image src="/logo.svg" />

      <ButtonGroup>
        <Button bg="purple.100" color="purple.300">
          <MapPin size={20} weight="fill" />
          <Text fontSize="0.875rem" lineHeight="130%" fontWeight="400">
            Porto Alegre, RS
          </Text>
        </Button>

        <Button bg="yellow.100" color="yellow.300">
          <ShoppingCart size={24} weight="fill" />
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
