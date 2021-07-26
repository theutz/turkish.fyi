import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

export type Props = LinkProps & {
  children: ReactNode;
};

export function Link({ children, className, ...props }: Props) {
  return (
    <NextLink {...props}>
      <a className="text-red-600">{children}</a>
    </NextLink>
  );
}

export default Link;
