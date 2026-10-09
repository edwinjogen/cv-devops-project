import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RESUME_DATA } from "@/data/resume-data";
import { Projects } from "./projects";

const projects = RESUME_DATA.projects;

describe("Projects", () => {
  test("Test projects contents", () => {
    render(<Projects projects={projects} />);

    projects.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });
});
