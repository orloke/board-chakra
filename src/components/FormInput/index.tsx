import {
  FormControl,
  FormErrorMessage,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends InputProps {
  name: string;
  placeholder?: string;
  reft: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

export function FormInput({
  name,
  placeholder,
  reft,
  error,
  ...rest
}: FormInputProps) {
  return (
    <FormControl isInvalid={!!error}>
      <Input
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        placeholder={placeholder}
        {...reft}
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
        autoComplete="on"
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
