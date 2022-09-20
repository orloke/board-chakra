import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import { User } from '../../@types';
import { Pagination } from '../Pagination';

interface PropsRenderUsersList {
  data: User[] | undefined;
  error: unknown;
  isLoading: boolean;
}

export default function RenderUsersList({
  data,
  error,
  isLoading,
}: PropsRenderUsersList) {
  if (isLoading) {
    return (
      <Flex justify="center">
        <Spinner />
      </Flex>
    );
  }
  if (!isLoading && error) {
    return (
      <Flex justify="center">
        <Text>Falha ao obter os dados</Text>
      </Flex>
    );
  }
  return (
    <>
      <Table px="6" color="gray.300" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th pl="0" pr="6">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuarios</Th>
            <Th>Data de cadastro</Th>
            <Th width="0" />
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td pl="0" pr="6">
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">Júnior Dering</Text>
                <Text fontSize="sm" color="gray.300">
                  juniordering@hotmail.com
                </Text>
              </Box>
            </Td>
            <Td>11 de setembro, 2022</Td>
            <Td pr="0">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                bg="pink.200"
                color="black"
                leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
              >
                Adicionar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Pagination />
    </>
  );
}
