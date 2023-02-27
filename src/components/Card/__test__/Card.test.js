import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../Card";

test("should render same text passed into the title props", () => {
  render(
    <MemoryRouter>
      <Card title="tasteit" text="text" moreText="moreText" />
    </MemoryRouter>
  );
  const cardElement = screen.getByText(/tasteit/i);
  expect(cardElement).toBeInTheDocument();
});

test("renders a div with a role of card", () => {
  render(
    <MemoryRouter>
      <Card />
    </MemoryRouter>
  );
  const divElement = screen.getByRole("card");
  expect(divElement).toBeInTheDocument();
});
