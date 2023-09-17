import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="py-6 bg-yellow-200">
      <div className="md:hidden" onClick={() => setopen(!open)}>
        {open ? (
          <AiOutlineClose className="text-2xl"></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 px-6 md:px-0 md:space-x-4 bg-yellow-200 absolute md:static ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
