import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="women">Women</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
