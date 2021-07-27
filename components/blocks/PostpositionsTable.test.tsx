import { render } from "@testing-library/react";
import { PostpositionsTable as Sut } from "./PostpositionsTable";

test("matches the snapshot", () => {
  const { asFragment } = render(<Sut />);
  expect(asFragment()).toMatchSnapshot();
});
