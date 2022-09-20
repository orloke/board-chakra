import { useQuery } from 'react-query';
import { api } from '../../api';

export function useUsers() {
  return useQuery('userList', async () => {
    const response = await api.get('users');
    return response.data;
  });
}
