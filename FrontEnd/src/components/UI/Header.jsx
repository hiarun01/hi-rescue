import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className="block bg-transparent text-teal-500 border-2 rounded-md px-7 py-2 font-bold"
                href="/"
              >
                <span>AniSavior</span>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-md">
                  <NavLink to="/">
                    <a className="text-gray-700 transition hover:text-gray-500/75">
                      Home
                    </a>
                  </NavLink>

                  <NavLink to="/about">
                    <a className="text-gray-700 transition hover:text-gray-500/75">
                      About
                    </a>
                  </NavLink>

                  <NavLink to="/report">
                    <a
                      className="text-gray-700 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Report
                    </a>
                  </NavLink>

                  <NavLink to="/join">
                    <a
                      className="text-gray-700 transition hover:text-gray-500/75 "
                      href="#"
                    >
                      Join
                    </a>
                  </NavLink>

                  <NavLink to="/contact">
                    <a
                      className="text-gray-700 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Contact
                    </a>
                  </NavLink>
                </ul>
              </nav>
            </div>

            <div className=" flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
