import { ReactNode } from "react";
import Container from "../Container";
import Head from "../Head";
import Header from "../Header";
import Article from "../Article";

type Props = {
  children: ReactNode;
};

export function Prose({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      <Container>
        <Article isProse>{children}</Article>
      </Container>
    </>
  );
}

export default Prose;
