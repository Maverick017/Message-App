import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').HTMLAttributes<HTMLParagraphElement>} TextHTMLProps
 * @typedef {TextHTMLProps} TextProps
 */

/**
 * Text component
 *
 * @param {TextProps} props - The props for the Text component
 * @returns {JSX.Element} The rendered paragraph element
 */
export function Text({ className, children, ...props }) {
  const baseStyles = "text-gray-900";

  const classes = twMerge(clsx(baseStyles), className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}