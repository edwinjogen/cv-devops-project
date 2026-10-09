import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Projects } from "./projects";
import { RESUME_DATA } from "@/data/resume-data";

const projects = RESUME_DATA.projects;

describe('Projects', () => {
    test("Test projects contents", () => {
        render(<Projects projects={projects}/>);
        
        projects.forEach((project) => {
            expect(screen.getByText(project.description)).toBeInTheDocument();
        })
        
    });
});

