import clsx from "clsx";

interface ButtonProps {
  type: "primary" | "secondary";
  href: string;
  label: string;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, href, label, withArrow }) => {
  const Arrow = () => (
    <svg
      className="w-5 h-5 ml-2 -mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  const buttonStyle = clsx({
    "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white hover:text-white rounded-lg bg-accent hover:bg-accent-dark focus:ring-4 focus:ring-accent":
      type == "primary",
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-dark":
      type == "secondary",
  });

  return (
    <>
      <a href={href} className={buttonStyle}>
        {label}
        {withArrow && <Arrow />}
      </a>
    </>
  );
};
export default Button;
