import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

export const Layout = () => {
  return (
    <div className="layout-container">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
