import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Condition from "@/app/components/homePageComponents/condition";

describe("Condition component", () => {
  it("renders without crashing", () => {
    render(<Condition />);
  });

  it("displays the correct heading", () => {
    render(<Condition />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Condition We Treat");
  });
  
  it("renders the correct disease names", () => {
    render(<Condition />);
    const diseaseNames = screen.getAllByText("Hormone Issues");
    expect(diseaseNames).toHaveLength(3);
  });

  // Add more tests as needed

  it("matches the snapshot", () => {
    const { container } = render(<Condition />);
    expect(container).toMatchSnapshot();
  });
});
