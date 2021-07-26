import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

export type Props = LinkProps & {
  children: ReactNode;
  color: `white` | `red-600`;
};

export function Link({
  children,
  color = "red-600",
  className,
  ...props
}: Props) {
  return (
    <NextLink {...props}>
      <a className={`text-${color}`}>{children}</a>
    </NextLink>
  );
}

export default Link;
