import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <main className="container px-4 mx-auto">{children}</main>;
}

export default Container;
