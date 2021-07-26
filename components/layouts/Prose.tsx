import { ReactNode } from "react";
import Container from "../Container";
import Head from "../Head";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

export function Prose({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      <Container>
        <article className="prose">{children}</article>
      </Container>
    </>
  );
}

export default Prose;
