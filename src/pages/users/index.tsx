import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { RiAddLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RenderUsersList from '../../components/RenderUsersList';

export default function UsersList() {
  const { data, isLoading, error } = useQuery('userList', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();
    return users;
  });

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
          <RenderUsersList error={error} isLoading={isLoading} data={data} />
        </Box>
      </Flex>
    </Box>
  );
}
