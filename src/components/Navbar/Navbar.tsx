/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { authKey, isLoggedIn, removeUserInfo } from "@/services/auth_service";

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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../assets/logo.svg";

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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-4">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <button onClick={() => router.push("/")}>
            <Image src={logo} alt="logo" width={150} height={200} />
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-black-2"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="text-black-2 font-medium hover:text-[#E83A15]"
            href="/services"
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
            href="/dashboard"
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
              <DropdownItem
                onClick={() => router.push("dashboard")}
                key="settings"
              >
                Dashboard
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
