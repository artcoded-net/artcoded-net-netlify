import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
//@ts-ignore
import navMenuItems from "../content/nav-menu.yml";
//@ts-ignore
import companyInfo from "../content/company-info.yml";
import { LinkItem } from "../lib/types";

const Navbar: React.FC = () => {
  const menuItems: LinkItem[] = navMenuItems["menu-items"];
  const { logo, companyName } = companyInfo;
  console.log(companyInfo);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          {/* {logo && (
            <div className="relative h-6 w-6 sm:h-12 sm:w-12 mr-3">
              <Image src={logo} layout="fill" alt="Artcoded Logo" />
            </div>
          )} */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Artcoded
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems &&
              menuItems.map((item, index) => (
                <li key={`navlink-${index}`}>
                  <NavLink label={item!.label} href={item!.link} />
                </li>
              ))}
            <li>
              <NavLink label="Login" href="/auth" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
