import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UsersList() {
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => {
        return response.json();
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6" overflowX="auto">
        <Sidebar />
        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
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
        </Box>
      </Flex>
    </Box>
  );
}
