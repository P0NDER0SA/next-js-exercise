import { render, screen } from "@testing-library/react";
import Pond from "../pages/pond";

describe("Pond", () => {
  it("renders without crashing", () => {
    render(<Pond />);
    expect(
      screen.getByRole("heading", { name: "Lord Poopenfall" })
    ).toHaveTextContent("Poopenfall");
  });
});
