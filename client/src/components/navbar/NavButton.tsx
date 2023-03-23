import * as React from "react";
import Link from "next/link";

export interface DropdownProps {
  className?: string;
  text: string;
  href: string;
}

/**
 * @name NavButton
 * @description Button on the mobile navbar dropdown.
 */
export const NavButton = (props: DropdownProps) => {
  const { className, text, href } = props;

  return (
    <Link href={href}>
      <div className="border border-black rounded-full p-4 mb-4 w-full hover:bg-moonstone">
        <h1 className="text-center text-3xl">{text}</h1>
      </div>
    </Link>
  );
};
