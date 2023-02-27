import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

test("should footer component renders without errors", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const footerElement = screen.getByTitle("footer");
  expect(footerElement).toBeInTheDocument();
});

test("footer component should renders five links", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const footerElement = screen.getAllByRole("link");
  expect(footerElement).toHaveLength(5);
});
