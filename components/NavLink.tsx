import { useRouter } from "next/router";
import { clsx } from "clsx";
import { Link } from "../types";

const NavLink: React.FC<Link> = ({ label, href }) => {
  const router = useRouter();
  const isCurrent = router.pathname == href;

  const style = clsx(
    "block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
    {
      "text-brand font-bold": isCurrent,
    }
  );

  return (
    <a
      href={href}
      className={style}
      aria-current={isCurrent ? "page" : undefined}
    >
      {label}
    </a>
  );
};

export default NavLink;
