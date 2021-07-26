import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Heading2({ children }: Props) {
  return <h2 className="text-2xl pb-3">{children}</h2>;
}
