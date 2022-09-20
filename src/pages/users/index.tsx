import { Box, Button, Flex, Heading, Icon, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RenderUsersList from '../../components/RenderUsersList';
import { useUsers } from '../../services/hooks/useUsers';

export default function UsersList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6" overflowX="auto">
        <Sidebar />
        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
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
          <RenderUsersList
            error={error}
            isLoading={isLoading}
            data={data}
            total={data?.total}
            page={page}
            onPageChange={setPage}
          />
        </Box>
      </Flex>
    </Box>
  );
}
