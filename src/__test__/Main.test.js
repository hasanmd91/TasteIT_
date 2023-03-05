import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "../components/Main/Main";

test("renders main element with correct class name", () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  const mainElement = screen.getByRole("main");
  expect(mainElement).toHaveClass("main");
});
