import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  Link,
  Image,
} from '@nextui-org/react'

export default function App() {
  const menuItems = [
    {
      menuItem: 'Home',
      route: '/',
    },
    {
      menuItem: 'Login',
      route: '/login',
    },
    {
      menuItem: 'Recuperar senha',
      route: '/recover-password',
    },
  ]

  return (
    <Navbar isBordered maxWidth="full" className="bg-[#184076]">
      <NavbarContent className="">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-16">
        <NavbarBrand>
          <Link className="cursor-pointer" href="/">
            <Image src="/qxutelogo.png" alt="qxute logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href={item.route.toLowerCase()}
              size="lg"
            >
              {item.menuItem}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
