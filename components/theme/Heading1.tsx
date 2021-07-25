import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Heading1({ children }: Props) {
  return <h1 className="text-red-500">{children}</h1>;
}
