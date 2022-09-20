import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { DateUser } from '../../@types';
import { convertedData } from '../../helpers';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { Pagination } from '../Pagination';

interface PropsRenderUsersList {
  data: DateUser | undefined;
  error: unknown;
  isLoading: boolean;
  total: number | undefined;
  page: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}

export default function RenderUsersList({
  data,
  error,
  isLoading,
  total,
  page,
  onPageChange,
}: PropsRenderUsersList) {
  const handlePerfetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);
      return response.data;
    });
  };

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
          {data?.users.map(item => (
            <Tr key={item.id}>
              <Td pl="0" pr="6">
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Link
                    href="##"
                    color="purple.400"
                    onMouseEnter={() => handlePerfetchUser(item.id)}
                  >
                    <Text fontWeight="bold">{item.name}</Text>
                  </Link>
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
      <Pagination
        total={total}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </>
  );
}
