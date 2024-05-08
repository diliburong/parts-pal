import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getParts, useGetPartsList } from '../hooks';
import { supabase } from '@/lib/supabase';

export const PartsList = () => {
  const { data, isLoading } = useGetPartsList();

  if (isLoading) return <div>loading</div>;

  return <div>{data?.map((x) => <div key={x.id}>{x.name}</div>)}</div>;
};
