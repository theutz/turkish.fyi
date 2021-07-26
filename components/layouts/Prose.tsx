import { ReactNode } from "react";
import Container from "../Container";

type Props = {
  children: ReactNode;
};

export function Prose({ children }: Props) {
  return (
    <Container>
      <article className="prose">{children}</article>
    </Container>
  );
}

export default Prose;
