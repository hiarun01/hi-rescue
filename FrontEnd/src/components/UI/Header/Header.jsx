import {useState} from "react";
import Logo from "./Logo";
import {Menu, X} from "lucide-react";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  const NavLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Report", path: "/report"},
    {name: "Join", path: "/join"},
    {name: "Contact", path: "/contact"},
  ];

  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Component */}
            <Logo />
            {/* Logo Component */}

            {/* Desktop Nav */}

            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-6 text-md ">
                  {NavLinks.map((link) => {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </div>
            {/* Desktop Nav */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <NavLink to="/login">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    href="#"
                  >
                    Login
                  </a>
                </NavLink>

                <div className="hidden sm:flex ">
                  <NavLink to="/register">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="#"
                    >
                      Register
                    </a>
                  </NavLink>
                </div>
              </div>
              <div className="block md:hidden">
                <button
                  onClick={toggleNav}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  {open ? <X /> : <Menu />}
                </button>
                {open && (
                  <div className="xl:hidden absolute bg-teal-600 w-[100vw] top-[65px] z-0 flex flex-col left-0 h-screen text-white text-center py-5 pb-5 gap-10 font-bold ">
                    {NavLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="hover:underline hover:text-teal-400"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="flex gap-5 justify-center ">
                      <NavLink to="/login">
                        <button>
                          <a
                            className="rounded-md bg-white  py-2.5 px-10 text-sm font-medium text-teal-600 shadow-sm"
                            href="#"
                          >
                            Login
                          </a>
                        </button>
                      </NavLink>
                      <NavLink to="/register">
                        <button>
                          <a
                            className="rounded-md bg-white  py-2.5 px-10 text-sm font-medium text-teal-600 shadow-sm"
                            href="#"
                          >
                            Register
                          </a>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
