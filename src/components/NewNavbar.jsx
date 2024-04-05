import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import logo from "../assets/icons/logo.svg";
import {SearchIcon} from "./SearchIcon.jsx";

const NewNavbar = () => {
  return (
    <div className="">
      <Navbar isBordered className="bg-gray-900 w-full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
        <img src={logo} alt="Logo" className=" -ml-4 w-24 md:w-28" />
        <p className="hidden md:block font-bold text-white font-custom text-3xl text-inherit -ml-9 -mb-2 align-bottom">
          niconn
        </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-[70%] sm:max-w-[13rem] h-9 sm:h-10 -ml-12",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Dropdown className="mt-4" placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform rounded-full"
                color="default"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu
              className="p-2"
              aria-label="Profile Actions"
              variant="flat"
            >
              <DropdownItem className="mb-1">
                <div className="flex">
                  <Avatar
                    isBordered
                    color="default"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    size="sm"
                  />
                  <div className="ml-4">
                    <p className="text-s font-semibold">Rakesh Guru</p>{" "}
                    {/* here props will be used */}
                    <p className="text-xs">example123@gmail.com</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="profile">Profile</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="theme">Theme</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout">Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
    </Navbar>
    </div>
  );
}

export default NewNavbar