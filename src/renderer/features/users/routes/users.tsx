import React from 'react';
import { useGetUserList } from '../hooks/useGetUserList';

export const Users = () => {
  const {data, isLoading} = useGetUserList();

  return (
    <div className='flex flex-col'>
      {
        data?.map((user) => {
          return (
            <div key={user.id} className='text-3xl'>
              {user.name}
            </div>
          )
        })
      }
    </div>
  )
}