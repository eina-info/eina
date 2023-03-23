import * as React from "react";

export interface NavHamburgerProps {
  className?: string;
}

/**
 * @name NavHamburger
 * @description Menu icon.
 */
export const NavHamburger = (props: NavHamburgerProps) => {
  const { className } = props;

  // Setup
  const src = `/images/svg/menu.svg`;

  return (
    <div className={className}>
      <img
        alt="Open navigation"
        className="flex items-center"
        loading="eager"
        src={src}
      />
    </div>
  );
};
