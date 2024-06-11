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
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar isBordered maxWidth="full" className="bg-[#184076]">
      <NavbarContent className="">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3">
        <NavbarBrand>
          <Image src="/qxutelogo.png" alt="qxute logo" />
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
