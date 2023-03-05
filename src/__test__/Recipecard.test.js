import "@testing-library/jest-dom/extend-expect"; // import jest-dom
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Recipecard from "../components/Recipecard/Recipecard";

test("Recipe card should have recipe details", () => {
  const details = {
    name: "Recipe",
    image:
      "http://www.womenfitness.net/wp/wp-content/uploads/2016/10/fast-food.jpg",
    country: "Bangladesh",
    id: "123",
  };

  render(
    <MemoryRouter>
      <Recipecard {...details} />
    </MemoryRouter>
  );

  const image = screen.getByAltText("Recipe");
  expect(image).toHaveAttribute("src", details.image);

  const recipeName = screen.getByRole("heading", { level: 4 });
  expect(recipeName).toHaveTextContent(details.name);

  const recipeFlag = screen.getByAltText("flag");
  expect(recipeFlag).toHaveAttribute(
    "src",
    `https://countryflagsapi.com/svg/${details.country}`
  );
});
