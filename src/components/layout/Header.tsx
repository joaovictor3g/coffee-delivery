import { Button, ButtonGroup, Flex, Image, Text, Link } from "@chakra-ui/react";
import { MapPin, ShoppingCart } from "phosphor-react";
import NextLink from "next/link";

export function Header() {
  return (
    <Flex w="100%" justify="space-between">
      <NextLink href="/" passHref>
        <Link>
          <Image src="/logo.svg" />
        </Link>
      </NextLink>

      <ButtonGroup>
        <Button bg="purple.100" color="purple.300">
          <MapPin size={20} weight="fill" />
          <Text fontSize="0.875rem" lineHeight="130%" fontWeight="400">
            Porto Alegre, RS
          </Text>
        </Button>

        <NextLink href="/cart" passHref>
          <Link
            bg="yellow.100"
            color="yellow.300"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="6px"
            w="38px"
            h="38px"
          >
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
}
