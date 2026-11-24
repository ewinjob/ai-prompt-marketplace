"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const linkBase =
  "rounded-lg border-2 border-gray-700 px-4 py-2 text-sm font-semibold " +
  "transition-all duration-200 ease-out hover:rounded-2xl " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30 " +
  "active:scale-95 md:border-2 md:p-0 md:px-4 md:py-2";

const ghost =
  `${linkBase} bg-transparent text-gray-700 hover:bg-gray-700 hover:text-white md:hover:bg-gray-700 md:hover:text-white`;

const solid =
  `${linkBase} bg-gray-700 text-white hover:bg-gray-500 hover:border-gray-500 md:hover:bg-gray-500 md:hover:text-white`;

export default function Header() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 border-b border-white/50 bg-sky-100/70 px-6 py-4 shadow-lg shadow-sky-900/10 backdrop-blur-md md:px-10"
    >
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap font-mono text-lg font-bold tracking-tight text-blue-600 md:text-xl">
          AI PROMPT MARKETPLACE
        </span>
      </NavbarBrand>

      <NavbarToggle className="text-gray-700 hover:bg-sky-200 focus:ring-gray-700/30" />

      <NavbarCollapse>
        <NavbarLink href="/prompts" className={solid}>
          Browse Prompts
        </NavbarLink>
        <NavbarLink href="/collection" className={solid}>
          Collection
        </NavbarLink>
        <NavbarLink href="/add" className={solid}>
          Add Prompt
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}