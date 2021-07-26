import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Paragraph({ children }: Props) {
  return <p className="pb-1">{children}</p>;
}
