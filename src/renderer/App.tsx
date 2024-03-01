import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import reactLogo from "../assets/react.svg";

// import viteLogo from '/electron-vite.animate.svg'
import "./App.css";
import { AppRoutes } from "@/routes";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.sqlite?.readAll();
      if (result) {
        setData(result);
      }

      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <NextUIProvider navigate={navigate}>
      {/* <div className='bg-red-500'>
        {
          data.map(item=>(
            <div>
              {item.name}
            </div>
          ))
        }
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <AppRoutes />
    </NextUIProvider>
  );
}

export default App;
