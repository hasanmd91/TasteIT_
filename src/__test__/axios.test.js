import axios from "axios";
import mockAxios from "axios";

// mocked api test

jest.mock("axios");

test("should mock api return Recipe", async () => {
  mockAxios.get.mockResolvedValue({
    data: [
      {
        name: "Recipe",
      },
    ],
  });
  const result = await axios
    .get("http://localhost:3001/recipes")
    .then((res) => {
      return res.data[0].name;
    })
    .catch((err) => console.log(err));
  expect(result).toBe("Recipe");
});
