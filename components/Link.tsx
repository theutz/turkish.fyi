import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

export type Props = LinkProps & {
  children: ReactNode;
};

export function Link({ children, className, ...props }: Props) {
  return (
    <NextLink {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default Link;
