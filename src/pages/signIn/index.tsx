import { Button, Flex, Stack } from '@chakra-ui/react';
import { FormInput } from '../../components/FormInput';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={6}>
          <FormInput type="email" name="email" placeholder="Digiet seu email" />
          <FormInput
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit" colorScheme="pink">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
