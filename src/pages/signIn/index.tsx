import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { FormInput } from '../../components/FormInput';
import { SigInType } from '../../@types';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email valido!')
      .required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  })
  .required();

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SigInType>({
    resolver: yupResolver(schema),
  });
  const handleSignIn: SubmitHandler<SigInType> = values => {
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={6}>
          <FormInput
            type="email"
            name="email"
            placeholder="Digiet seu email"
            reft={register('email')}
            error={formState.errors.email}
          />
          <FormInput
            type="password"
            name="current-password"
            placeholder="Digite sua senha"
            reft={register('password')}
            error={formState.errors.password}
          />
          <Button
            type="submit"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
