/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  authKey,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth_service";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const router = useRouter();
  const userLoggedIn = isLoggedIn();

  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.refresh();
  };

  const menuItems = [
    "service",
    "Product",
    "Bolg",
    "About Us",
    "Contact Us",
    "Dashboard",
    "Help & Feedback",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-black-2"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            Bolg
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="#"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      {userLoggedIn ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              className="text-black font-bold hover:text-[#00045F]"
              href="/login"
            >
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-xl text-black-2 hover:text-white hover:bg-[#E83A15]"
              href="/registration"
              variant="flat"
            >
              Register
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
