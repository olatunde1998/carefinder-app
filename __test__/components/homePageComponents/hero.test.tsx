import React from "react";  
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/app/components/homePageComponents/hero";


describe("Hero component", () => {
    it("renders without crashing", () => {
      render(<Hero />);
    });
  
    it("displays the correct heading", () => {
      render(<Hero />);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toHaveTextContent("Healthcare when All Else Fails");
    });
  
    it("renders the sign up link with the correct href", () => {
      render(<Hero />);
      const link = screen.getByRole("link", { name: "Sign up" });
      expect(link).toHaveAttribute("href", "/signup");
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<Hero />);
      expect(container).toMatchSnapshot();
    });
  });