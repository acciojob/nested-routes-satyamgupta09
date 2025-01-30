import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Category() {
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <Link to="grooming">Grooming</Link> {/* FIXED: Relative path */}
        </li>
        <li>
          <Link to="shirt">Shirt</Link>
        </li>
        <li>
          <Link to="trouser">Trouser</Link>
        </li>
        <li>
          <Link to="jewellery">Jewellery</Link>
        </li>
      </ul>

      <Outlet />
      {/* This will render the selected item below the list */}
    </div>
  );
}
