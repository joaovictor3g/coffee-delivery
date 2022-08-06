import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import type { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  error?: FieldError;
  placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, name, placeholder, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraInput
        {...rest}
        id={name}
        name={name}
        ref={ref}
        placeholder={placeholder}
        variant="address"
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
