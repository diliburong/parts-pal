import { Route, Routes, useNavigate, useRoutes } from 'react-router-dom';
import {
  Tab,
  Button,
  Tabs,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

import { supabase } from '@/lib/supabase';

import { Users } from '@/features/users';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

export const AppRoutes = () => {
  const routes = true ? protectedRoutes : publicRoutes;

  const element = useRoutes([...protectedRoutes]);
  const navigate = useNavigate();

  const handleBtnClick = async () => {
    const result = await window.sqlite.insertUser();

    console.log(result);
  };

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);

      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);

      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // } else {
  //   return <div>Logged in!</div>;
  // }

  return <>{element}</>;
};
