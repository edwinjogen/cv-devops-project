import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RESUME_DATA } from "@/data/resume-data";
import { Summary } from "./summary";

const summary = RESUME_DATA.summary;

describe("Summary", () => {
  test("Test summary", () => {
    render(<Summary summary={summary} />);

    expect(screen.getByText(summary)).toBeInTheDocument();
  });
});
