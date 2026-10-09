import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RESUME_DATA } from "@/data/resume-data";
import { Skills } from "./skills";

const skills = RESUME_DATA.skills;

describe("Skills", () => {
  test("Test skills", () => {
    render(<Skills skills={skills} />);

    const renderedSkills = screen.getAllByRole("listitem");

    for (let i = 0; i < skills.length; i++) {
      expect(renderedSkills[i]).toHaveTextContent(skills[i]);
    }
  });
});
