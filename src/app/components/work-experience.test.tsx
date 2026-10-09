import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./work-experience";

const work = RESUME_DATA.work;

describe("Work experience", () => {
  test("Test work experience company", () => {
    render(<WorkExperience work={work} />);

    work.forEach((item) => {
      expect(screen.getByText(item.company)).toBeInTheDocument();
    });
  });
});
