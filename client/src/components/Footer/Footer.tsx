import * as React from "react";
import Link from "next/link";

export interface FooterProps {
  className?: string;
}

/**
 * @name Footer
 * @description This component contains the eina footer.
 */
export const Footer = (props: FooterProps) => {
  const { className } = props;

  return (
    <footer className="flex  justify-between p-8 bg-alabaster">
      <div>
        <h1 className="text-2xl">eina</h1>
        <p>@2023 by eina</p>
        <p>
          <br />
          built with &hearts; in San Cris
        </p>
      </div>
      <div className="text-right">
        <Link href="/events">
          <p>eventos</p>
        </Link>
        <Link href="/resources">
          <p>recursos</p>
        </Link>
        <Link href="/login">
          <p>iniciar sesión</p>
        </Link>
        <Link href="/contact">
          <p>contacto</p>
        </Link>
      </div>
    </footer>
  );
};
