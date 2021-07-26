import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Heading1({ children }: Props) {
  return <h1 className="text-3xl pb-4">{children}</h1>;
}
