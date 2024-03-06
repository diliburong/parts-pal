import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

export const useGetCountryList = () => {
  return useQuery({
    queryKey: ['country-list'],
    queryFn: () => supabase.from('countries').select(),
  });
};
