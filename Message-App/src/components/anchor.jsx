import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').AnchorHTMLAttributes<HTMLAnchorElement>} AnchorHTMLProps
 * @typedef {AnchorHTMLProps} AnchorProps
 */

/**
 * Anchor component
 *
 * @param {AnchorProps} props - The props for the Anchor component
 * @returns {JSX.Element} The rendered anchor element
 */
export function Anchor({ className, children, ...props }) {
  const baseStyles = "text-indigo-600 hover:text-indigo-500";

  const classes = twMerge(clsx(baseStyles), className);

  return (
    <Link className={classes} {...props} to={props.href}>
      {children}
    </Link>
  );
}