import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({ children, href }) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href} passHref>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null,
      })}
    </Link>
  );
};
