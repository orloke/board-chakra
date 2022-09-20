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
import { DateUser } from '../../@types';
import { convertedData } from '../../helpers';
import { Pagination } from '../Pagination';

interface PropsRenderUsersList {
  data: DateUser;
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
          {data.users.map(item => (
            <Tr key={item.id}>
              <Td pl="0" pr="6">
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text fontSize="sm" color="gray.300">
                    {item.email}
                  </Text>
                </Box>
              </Td>
              <Td>{convertedData(item.createdAt)}</Td>
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
          ))}
        </Tbody>
      </Table>
      <Pagination />
    </>
  );
}
