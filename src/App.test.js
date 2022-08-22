import { render, screen } from "@testing-library/react";
import NextApp from "./NextApp";

test("renders learn react link", () => {
  render(<NextApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
