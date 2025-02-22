import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').HTMLAttributes<HTMLHeadingElement>} HeadingHTMLProps
 * @typedef {HeadingHTMLProps & {
 *   type?: 1 | 2 | 3 | 4 | 5 | 6
 * }} HeadingProps
 */

/**
 * Heading component
 *
 * @param {HeadingProps} props - The props for the Heading component
 * @returns {JSX.Element} The rendered heading element
 */
export function Heading({ type = 1, className, children, ...props }) {
  const baseStyles = "font-bold text-gray-900";

  const sizes = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };

  const classes = twMerge(clsx(baseStyles, sizes[type]), className);

  const Component = `h${type}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}