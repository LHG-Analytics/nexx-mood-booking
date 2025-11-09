"use client";

import Link from "next/link";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName: _activeClassName, href, ...props }, ref) => {
    return <Link ref={ref} href={href} className={cn(className)} {...props} />;
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
