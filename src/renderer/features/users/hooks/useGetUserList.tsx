import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  return useQuery({
    queryKey: ['user-list'],
    queryFn: () => {
      return window.sqlite.findAll();
    },
  });
};
