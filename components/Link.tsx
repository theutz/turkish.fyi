import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import classNames from "classnames";

export type Props = LinkProps & {
  children: ReactNode;
  colorClassName: `text-white` | `text-red-600`;
};

export function Link({
  children,
  colorClassName = "text-red-600",
  ...props
}: Props) {
  return (
    <NextLink {...props}>
      <a className={classNames(colorClassName)}>{children}</a>
    </NextLink>
  );
}

export default Link;
