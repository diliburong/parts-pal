import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";

import reactLogo from "../assets/react.svg";

// import viteLogo from '/electron-vite.animate.svg'
import "./App.css";
import { AppRoutes } from '@/routes';
import { queryClient } from "@/lib/reactQuery";

function App() {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate}>
        {/* <div className='bg-red-500'>
        {
          data.map(item=>(
            <div>
              {item.name}
            </div>
          ))
        }
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
        <AppRoutes />
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
