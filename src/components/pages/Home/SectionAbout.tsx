import { Cart } from "@/components/layout/Icons/Cart";
import { Coffee } from "@/components/layout/Icons/Coffee";
import { Pack } from "@/components/layout/Icons/Pack";
import { Time } from "@/components/layout/Icons/Time";
import { Flex, Box, Text, Image, SimpleGrid, Heading } from "@chakra-ui/react";

const characteristics = [
  {
    id: 1,
    text: "Compra simples e segura",
    icon: () => <Cart />,
  },
  {
    id: 2,
    text: "Embalagem mantém o café intacto",
    icon: () => <Pack />,
  },
  {
    id: 3,
    text: "Entrega rápida e rastreada",
    icon: () => <Time />,
  },
  {
    id: 4,
    text: "O café chega fresquinho até você",
    icon: () => <Coffee />,
  },
];

export function SectionAbout() {
  return (
    <Flex as="section" align="center">
      <Box>
        <Heading fontWeight="800" fontSize="3rem" lineHeight="130%">
          Encontre o café perfeito para qualquer hora do dia
        </Heading>
        <Text fontWeight="400" fontSize="1.25rem" color="gray.700">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>

        <SimpleGrid minChildWidth="300px" spacing="20px" mt="60px">
          {characteristics.map(({ icon: Icon, ...characteristic }) => (
            <Flex
              key={characteristic.id}
              align="center"
              gap="10px"
              fontSize="1rem"
            >
              <Icon />
              <Text fontWeight="400" lineHeight="130%" color="gray.600">
                {characteristic.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Image src="/coffee-delivery.png" minW="400px" />
      </Box>
    </Flex>
  );
}
