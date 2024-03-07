import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

const getCountries = async () => {
  const result = await supabase.from('countries').select();

  return result.data;
  // console.log(result.data);
  // console.log(result);
};

export const useGetCountryList = () => {
  return useQuery({
    queryKey: ['country-list'],
    queryFn: async () => await getCountries(),
  });
};
