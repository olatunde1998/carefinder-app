import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "@/app/signup/page";
import RightContainer from "@/app/signup/rightContainer";


describe("SignUp component", () => {
    it("renders without crashing", () => {
      render(<SignUp />);
    });
  
    it("renders the LeftContainer component", () => {
      render(<SignUp />);
      const leftContainer = screen.getByTestId("left-container-component");
      expect(leftContainer).toBeInTheDocument();
    });
  
    it("renders the RightContainer component", () => {
      render(<SignUp />);
      const rightContainer = screen.getByTestId("right-container-component");
      expect(rightContainer).toBeInTheDocument();
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<SignUp />);
      expect(container).toMatchSnapshot();
    });
  });
  
  describe("RightContainer component", () => {
    it("renders without crashing", () => {
      render(<RightContainer />);
    });
  
    // it("updates the username state when the input value changes", () => {
    //   render(<RightContainer />);
    //   const usernameInput = screen.getByLabelText("Username");
    //   fireEvent.change(usernameInput, { target: { value: "testusername" } });
    //   expect(usernameInput.value).toBe("testusername");
    // });
  
    // Add more tests for other form inputs and interactions
  
    it("matches the snapshot", () => {
      const { container } = render(<RightContainer />);
      expect(container).toMatchSnapshot();
    });
  });