import { useQuery } from 'react-query';
import { DateUser } from '../../../@types';
import { api } from '../../api';

export function useUsers(page: number) {
  return useQuery(['userList', page], async () => {
    const response = await api.get<Promise<DateUser>>('users', {
      params: {
        page,
      },
    });
    return response.data;
  });
}
