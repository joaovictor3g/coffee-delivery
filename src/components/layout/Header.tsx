import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import { MapPin, ShoppingCart } from "phosphor-react";
import NextLink from "next/link";
import { useCart } from "@/hooks/useCart";
import { useGeoLocation } from "@/hooks/useGeoLocation";

export function Header() {
  const { data } = useCart();
  const totalItens = data.length;

  const { location } = useGeoLocation();

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
            {location}
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
            position="relative"
          >
            <ShoppingCart size={24} weight="fill" />

            <Box
              position="absolute"
              bg="yellow.200"
              w="20px"
              h="20px"
              borderRadius="50%"
              top="-10px"
              right="-5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="700" fontSize="0.75rem" color="white">
                {totalItens}
              </Text>
            </Box>
          </Link>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
}
