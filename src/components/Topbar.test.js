import { render, fireEvent } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import Topbar from "./Topbar";

it("topbar render check", () => {
  const { queryByTitle } = render(
    <Router>
      <Topbar />
    </Router>
  );

  const topbar = queryByTitle("topbar");

  expect(topbar).toBeTruthy();
});
