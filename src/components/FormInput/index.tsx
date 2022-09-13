import { Input, InputProps } from '@chakra-ui/react';

interface FormInputProps extends InputProps {
  name: string;
  placeholder?: string;
}

export function FormInput({ name, placeholder, ...rest }: FormInputProps) {
  return (
    <Input
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bg="gray.900"
      variant="filled"
      placeholder={placeholder}
      _hover={{
        bgColor: 'gray.900',
      }}
      size="lg"
      {...rest}
    />
  );
}
