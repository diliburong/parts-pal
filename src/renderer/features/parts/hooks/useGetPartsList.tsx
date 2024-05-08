import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js';

import { Tables } from '@/types/database.types';

import { supabase } from '@/lib/supabase';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { TypedSupabaseClient } from '@/types';
// import { useQuery } from '@tanstack/react-query';

export type IPartsList = Tables<'parts'>[];

export const getParts = (client: TypedSupabaseClient, id: number) => {
  return client.from('parts').select(`id,name`, { count: 'exact' }).eq('id', id).throwOnError();
};

export const useGetPartsList = () => {
  return useQuery(getParts(supabase, 1));
};

// import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

// const countriesWithCitiesQuery = supabase.from('countries').select(`
//   id,
//   name,
//   cities (
//     id,
//     name
//   )
// `)
// type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>

// const { data, error } = await countriesWithCitiesQuery
// if (error) throw error
// const countriesWithCities: CountriesWithCities = data
