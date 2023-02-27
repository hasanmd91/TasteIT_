import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../Card";

test("render card component", () => {
  render(
    <MemoryRouter>
      <Card title="title" text="text" moreText="moreText" />
    </MemoryRouter>
  );
  const cardElement = screen.getByText(/title/i);
  expect(cardElement).toBeInTheDocument();
});
