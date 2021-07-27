import { ReactNode } from "react";
import Container from "../Container";
import Head from "../Head";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

export function Default({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Default;
