import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').ButtonHTMLAttributes<HTMLButtonElement>} ButtonHTMLProps
 * @typedef {ButtonHTMLProps & {
 *   variant?: 'filled' | 'outline',
 *   size?: 'sm' | 'md' | 'lg',
 * }} ButtonProps
 */

/**
 * Button component
 *
 * @param {ButtonProps} props - The props for the Button component
 * @returns {JSX.Element} The rendered button element
 */
export function Button({
  variant = "filled",
  size = "sm",
  className,
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium shadow-sm";

  const variants = {
    filled:
      "border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = twMerge(
    clsx(baseStyles, variants[variant], sizes[size]),
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}