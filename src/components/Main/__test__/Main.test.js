import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "../Main";

test("Main component renders a main element", () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
});

// test("Main component contains an Outlet component", () => {
//   render(
//     <MemoryRouter>
//       <Main />
//     </MemoryRouter>
//   );
//   const outletElement = screen.getByRole("region", { hidden: true });
//   expect(outletElement).toBeInTheDocument();
// });
