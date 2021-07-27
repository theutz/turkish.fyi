import { render } from "@testing-library/react";
import { PostpositionsTable as Sut } from "./PostpositionsTable";

test("works", () => {
  const { asFragment } = render(<Sut />);
  expect(asFragment()).toMatchSnapshot();
});
