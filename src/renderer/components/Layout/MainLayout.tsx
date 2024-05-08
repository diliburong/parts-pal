import React, { FC, useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Image,
  Progress,
  CardProps,
  Slider,
  CardFooter,
  Link,
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarContent,
  NavbarItem,
  ButtonProps,
  LinkProps,
  Breadcrumbs as NBreadcrumbs,
  BreadcrumbItem as NBreadcrumbItem,
} from '@nextui-org/react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

import { NavLink, NavLinkProps, useLocation, useNavigate, useParams } from 'react-router-dom';

interface ISideBarItemProps {
  icon?: React.ReactNode;
  to: string;
}

const SideBarItem = (props: ButtonProps & NavLinkProps) => {
  return (
    <NavLink to={props.to} className='w-full'>
      {({ isActive }) => (
        <Button
          startContent={<Icon icon='solar:home-2-broken' />}
          variant='light'
          className='justify-start'
          fullWidth
          {...props}
        ></Button>
      )}
    </NavLink>
  );
};

const SideBar = () => {
  return (
    <Card className='flex flex-shrink-0 pt-10'>
      <CardBody className='py-[10vh flex w-32 overflow-y-auto p-0'>
        <div className='relative flex w-full list-none flex-col gap-1 p-1'>
          <div className='flex w-full flex-col items-center gap-0.5 outline-none'>
            <SideBarItem to='/parts'>parts</SideBarItem>
            <SideBarItem to='/products'>Products</SideBarItem>
            <SideBarItem to='/test'>Home</SideBarItem>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div>card footer</div>
      </CardFooter>
    </Card>
  );
};

const Breadcrumbs = () => {
  return (
    <NBreadcrumbs>
      <NBreadcrumbItem>Home</NBreadcrumbItem>
      <NBreadcrumbItem>Tast</NBreadcrumbItem>
    </NBreadcrumbs>
  );
  // return
};

type IMainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className='relative flex h-screen overflow-hidden bg-background text-foreground dark'>
      <SideBar />

      <main className='relative flex w-full flex-1 flex-col gap-y-4 p-4'>
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
};
