import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

test("Header component renders without errors", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

test("Header component contains a Navbar component", async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const navbarElement = screen.getByRole("navigation");
  expect(navbarElement).toBeInTheDocument();
});
