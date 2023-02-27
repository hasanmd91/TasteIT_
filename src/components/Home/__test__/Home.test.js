import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./../Home";
import { MemoryRouter } from "react-router-dom";

test("renders the main heading", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const headingElement = screen.getByText("TasteIT");
  expect(headingElement).toBeInTheDocument();
});

test("render the browse recipe button", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const mainbuttonElement = screen.getByRole("button", {
    name: "Browse recipes",
  });
  expect(mainbuttonElement).toBeInTheDocument();
});

test("render two cards", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const cardElement = screen.getAllByRole("link", { name: /see more/i });
  expect(cardElement).toHaveLength(2);
});
