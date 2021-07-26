import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Wrapper({ children }: Props) {
  return <main className="container mx-auto px-4">{children}</main>;
}

export default Wrapper;
