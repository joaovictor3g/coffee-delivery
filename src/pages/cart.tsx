import { SectionCart } from "@/components/pages/Cart/SectionCart";
import { SectionForm } from "@/components/pages/Cart/SectionForm";
import { Address } from "@/schemas/address";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function Cart() {
  const [address, setAddress] = useState({} as Address);
  const [paymentMode, setPaymentMode] = useState("");

  function onFillAddress(fields: Address) {
    console.log(fields);
  }

  return (
    <Flex as="main" mt="90px" gap="2rem">
      <SectionForm
        onFillAddress={onFillAddress}
        onSelectPayment={setPaymentMode}
        payment={paymentMode}
      />
      <SectionCart />
    </Flex>
  );
}
