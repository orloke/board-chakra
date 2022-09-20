import { useQuery } from 'react-query';
import { DateUser } from '../../../@types';
import { api } from '../../api';

export function useUsers() {
  return useQuery('userList', async () => {
    const response = await api.get<Promise<DateUser>>('users');
    return response.data;
  });
}
