// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';

import { supabase } from '@/lib/supabase';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>publicRoutes</div>,
    // element: <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />,
  },
];
