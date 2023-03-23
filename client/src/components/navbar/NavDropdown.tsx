import * as React from "react";
import { NavButton } from "./NavButton";

export interface DropdownProps {
  className?: string;
}

/**
 * @name Dropdown
 * @description Content of navbar dropdown.
 */
export const Dropdown = (props: DropdownProps) => {
  const { className } = props;

  // Hooks

  // Handlers

  return (
    <div className="absolute w-full pr-6 pl-6 bg-alabaster">
      <NavButton href="/events" text="eventos" />
      <NavButton href="/resources" text="recursos" />
      <NavButton href="/login" text="iniciar sesión" />
      <NavButton href="/contact" text="contacto" />
    </div>
  );
};
