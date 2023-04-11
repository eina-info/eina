import * as React from "react";
import Link from "next/link";
import { NavHamburger } from "./NavHamburger";
import { Dropdown } from "./NavDropdown";

export interface NavBarProps {
  className?: string;
}

/**
 * @name NavBar
 * @description Navigation bar.
 */
export const NavBar = (props: NavBarProps) => {
  const { className } = props;

  // Hooks
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    console.log("clicked!");
    setIsOpen(!isOpen);
  };

  // Styles
  const cssBtn = "flex justify-right items-center pt-2 h-full";

  return (
    <nav>
      <div className="flex justify-between p-8 text-4xl bg-alabaster">
        <div>
          <Link href="/">
            <h1>eina</h1>
          </Link>
        </div>
        <div>
          <h3 onClick={handleClick}>
            {isOpen ? "x" : <NavHamburger className={cssBtn} />}
          </h3>
        </div>
      </div>
      <div>{isOpen ? <Dropdown /> : null}</div>
    </nav>
  );
};
