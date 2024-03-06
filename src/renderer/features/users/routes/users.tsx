import React from 'react';
import { useGetUserList } from '../hooks/useGetUserList';
import { useGetCountryList } from '../hooks/useGetCountryList';

export const Users = () => {
  const { data, isLoading } = useGetUserList();
  const { data: countryList } = useGetCountryList();
  console.log(countryList, 'countryList');

  return (
    <div className='flex flex-col'>
      {data?.map((user) => {
        return (
          <div key={user.id} className='text-3xl'>
            {user.name}
          </div>
        );
      })}
      {/* <ul>
        {(countryList || []).map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
