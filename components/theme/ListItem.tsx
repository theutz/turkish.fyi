import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ListItem({ children }: Props) {
  return <li>{children}</li>;
}
