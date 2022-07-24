import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { Bank, CreditCard, IconProps, Money } from "phosphor-react";

type PaymentType = "money" | "credit" | "debit";

interface PaymentButtonProps extends ButtonProps {
  paymentType: PaymentType;
  active?: boolean;
}

const icons: Record<
  PaymentType,
  React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
> = {
  credit: CreditCard,
  money: Money,
  debit: Bank,
};

export function PaymentButton({
  active = false,
  paymentType,
  ...rest
}: PaymentButtonProps) {
  const PaymentIcon = icons[paymentType];

  return (
    <Button
      {...rest}
      bg="gray.300"
      textTransform="uppercase"
      borderRadius="6px"
      p="1rem"
      fontSize="12px"
      color="gray.600"
      fontWeight="400"
      display="flex"
      alignItems="center"
      gap="5px"
      _hover={{
        "&:not(:focus)": {
          bg: "gray.400",
        },
      }}
      sx={
        active
          ? {
              bg: "purple.100",
              borderWidth: "1px",
              borderColor: "purple.200",
            }
          : {}
      }
    >
      <Icon as={PaymentIcon} w="16px" h="16px" color="purple.200" m="0" />
      {rest.children}
    </Button>
  );
}
