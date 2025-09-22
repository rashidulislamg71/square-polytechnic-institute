
import React from "react";
import { Link } from "react-router-dom";

export default function FooterLink({ icon, children, to }) {
  return (
    <li className="flex items-center gap-2 text-white hover:text-green-300 transition text-sm">
      {icon} 
      <Link to={to}>{children}</Link>
    </li>
  );
}
