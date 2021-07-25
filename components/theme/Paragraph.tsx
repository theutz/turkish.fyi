import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Paragraph({ children }: Props) {
  return <p className="text-blue-500">{children}</p>;
}
