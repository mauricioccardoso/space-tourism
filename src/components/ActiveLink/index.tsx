import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ActiveLinkProps {
  children: ReactNode;
  activeClassName: string;
  to: string;
}

export function ActiveLink({ children, to, activeClassName }: ActiveLinkProps) {
  const { pathname } = useLocation();

  const className = pathname === to ? activeClassName : '';

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
