import { Route, Routes, useNavigate, useRoutes } from "react-router-dom";

import { Tab, Button, Tabs, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const routesMap = [
  {
    path: "/",
    element: <div>test</div>,
    exact: true,
  },
  {
    path: "/two",
    element: <div>two</div>,
    exact: true,
  },
];

export const AppRoutes = () => {
  // const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routesMap]);
  const navigate = useNavigate();
  return (
    <>
      <Button>Button</Button>
      <div className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/two">About</Link>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button>Open</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Navigation">
          <DropdownItem key="home" onClick={()=> navigate('/')}>Home</DropdownItem>
          <DropdownItem key="about" onClick={()=> navigate('/two')}>About</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {element}

    </>
  );
};
