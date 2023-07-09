import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LeftContainer from "@/app/login/leftContainer";


describe("LeftContainer component", () => {
    it("renders without crashing", () => {
      render(<LeftContainer />);
    });
  
    // Add more tests as needed
  });