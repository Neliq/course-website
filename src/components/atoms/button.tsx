import Link from "next/link";

type ButtonProps = {
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "danger"
    | "success";
  children: React.ReactNode;
  href?: string;
  newTab?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  classNameProp?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  href,
  newTab,
  type,
  classNameProp,
  onClick,
}) => {
  const commonClasses =
    "inline-flex items-center rounded-full px-6 py-2 gap-2 text-md font-regular";
  let variantClasses;

  switch (variant) {
    case "primary":
      variantClasses =
        "border border-transparent bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
      break;
    case "secondary":
      variantClasses =
        "border border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
      break;
    case "tertiary":
      variantClasses =
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2";
      break;
    case "disabled":
      variantClasses =
        "border border-gray-300 bg-gray-200 text-gray-700 opacity-50 cursor-not-allowed";
      break;
    case "danger":
      variantClasses =
        "border border-transparent bg-red-500 text-white hover:bg-red-700 focus:ring-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2";
      break;
    case "success":
      variantClasses =
        "border border-transparent bg-green-500 text-white hover:bg-green-700 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2";
      break;
    default:
      variantClasses = "";
  }

  const className = `${commonClasses} ${variantClasses}`;

  return variant === "disabled" ? (
    <button
      type={type}
      className={`${className} ${classNameProp}`}
      onClick={onClick}
      disabled
    >
      {children}
    </button>
  ) : href ? (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      <button
        type={type}
        className={`${className} ${classNameProp}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`${className} ${classNameProp}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

export { Button };
