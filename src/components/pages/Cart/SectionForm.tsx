import { Input } from "@/components/shared/Form/Input";
import { PaymentButton } from "@/components/shared/PaymentButton";
import {
  VStack,
  Heading,
  Flex,
  Box,
  HStack,
  ButtonGroup,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address, addressSchema } from "@/schemas/address";

interface SectionFormProps {
  onFillAddress(fields: Address): void;
  onSelectPayment(payment: string): void;
  payment: string;
}

export function SectionForm({
  onFillAddress,
  onSelectPayment,
  payment,
}: SectionFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Address>({ resolver: zodResolver(addressSchema) });

  return (
    <VStack as="section" maxW="640px" w="100%" spacing="15px" align="start">
      <Heading fontSize="1.125rem">Complete seu pedido</Heading>

      <VStack
        spacing="12px"
        w="100%"
        bg="gray.100"
        align="start"
        p={8}
        borderRadius="6px"
      >
        <Flex align="start" mb="50px" gap="5px">
          <Icon as={MapPinLine} w="22px" h="22px" color="yellow.300" />
          <Box>
            <Text fontSize="1rem" color="gray.700">
              Endereço de entrega
            </Text>
            <Text fontSize="0.875rem" color="gray.600">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </Box>
        </Flex>

        <VStack
          as="form"
          onSubmit={handleSubmit(onFillAddress)}
          spacing={4}
          w="100%"
          align="start"
        >
          <Input
            placeholder="CEP"
            maxW="200px"
            w="100%"
            error={errors.cep}
            {...register("cep")}
          />
          <Input
            placeholder="Rua"
            error={errors.street}
            {...register("street")}
          />
          <HStack w="100%" spacing={4}>
            <Input
              placeholder="Numero"
              maxW="200px"
              w="100%"
              error={errors.number}
              {...register("number")}
            />
            <Input
              placeholder="Complemento"
              flex="1"
              error={errors.complement}
              {...register("complement")}
            />
          </HStack>
          <HStack w="100%" spacing={4}>
            <Input
              placeholder="Bairro"
              maxW="200px"
              w="100%"
              error={errors.neighbor}
              {...register("neighbor")}
            />
            <Input
              placeholder="Cidade"
              maxW="276px"
              w="100%"
              error={errors.city}
              {...register("city")}
            />
            <Input
              placeholder="UF"
              flex="1"
              error={errors.uf}
              {...register("uf")}
            />
          </HStack>
          <Button type="submit">Submit</Button>
        </VStack>
      </VStack>

      <VStack
        spacing="12px"
        w="100%"
        bg="gray.100"
        align="start"
        p={8}
        borderRadius="6px"
      >
        <Flex align="start" mb="20px" gap="5px">
          <Icon as={CurrencyDollar} w="22px" h="22px" color="purple.300" />
          <Box>
            <Text fontSize="1rem" color="gray.700">
              Pagamento
            </Text>
            <Text fontSize="0.875rem" color="gray.600">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </Box>
        </Flex>

        <ButtonGroup w="100%" justifyContent="space-between">
          <PaymentButton
            type="submit"
            w="33%"
            paymentType="credit"
            onClick={() => onSelectPayment("credit")}
            active={payment === "credit"}
          >
            Cartão de crédito
          </PaymentButton>
          <PaymentButton
            w="33%"
            paymentType="debit"
            onClick={() => onSelectPayment("debit")}
            active={payment === "debit"}
          >
            Cartão de débito
          </PaymentButton>
          <PaymentButton
            w="33%"
            paymentType="money"
            onClick={() => onSelectPayment("money")}
            active={payment === "money"}
          >
            Dinheiro
          </PaymentButton>
        </ButtonGroup>
      </VStack>
    </VStack>
  );
}
