import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import React from 'react';
import { FormInput } from '../../../components/FormInput';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { CreateUserForm } from '../../../@types';

const schema = yup
  .object({
    name: yup.string().required('Escreva seu nome!'),
    email: yup
      .string()
      .email('Digite um email valido!')
      .required('O email é obrigatório!'),
    password: yup
      .string()
      .min(6, 'Precisa ter no mínimo 6 caracteres!')
      .required('A senha é obrigatória!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais!')
      .required('Por favor digite uma senha!'),
  })
  .required();

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserForm>({
    resolver: yupResolver(schema),
  });
  const handleSignIn: SubmitHandler<CreateUserForm> = values => {
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius="8"
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <FormInput
                name="name"
                placeholder="Nome Completo"
                reft={register('name')}
                error={formState.errors.name}
              />
              <FormInput
                name="email"
                type="email"
                placeholder="E-mail"
                reft={register('email')}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <FormInput
                name="password"
                placeholder="Senha"
                type="password"
                reft={register('password')}
                error={formState.errors.password}
              />
              <FormInput
                name="confirmPassword"
                type="password"
                placeholder="Confirme sua Senha"
                reft={register('confirmPassword')}
                error={formState.errors.confirmPassword}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
