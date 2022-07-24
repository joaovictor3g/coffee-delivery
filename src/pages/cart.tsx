import { SectionCart } from "@/components/pages/Cart/SectionCart";
import { SectionForm } from "@/components/pages/Cart/SectionForm";
import { Flex } from "@chakra-ui/react";

export default function Cart() {
  return (
    <Flex as="main" mt="90px" gap="2rem">
      <SectionForm />
      <SectionCart />
    </Flex>
  );
}
