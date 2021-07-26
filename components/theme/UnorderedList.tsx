import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function UnorderedList({ children }: Props) {
  return <ul className="list-disc list-inside">{children}</ul>;
}
