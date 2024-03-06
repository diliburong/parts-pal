import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';

// import viteLogo from '/electron-vite.animate.svg'
import './App.css';
import { AppRoutes } from '@/routes';
import { queryClient } from '@/lib/reactQuery';

function App() {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate}>
        <AppRoutes />
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
