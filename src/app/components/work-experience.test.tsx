import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { WorkExperience } from "./work-experience";
import { RESUME_DATA } from "@/data/resume-data";

const work = RESUME_DATA.work;

describe('Work experience', () => {
    test("Test work experience company", () => {
        render(<WorkExperience work={work} />);

        work.forEach((item) => {
            expect(screen.getByText(item.company)).toBeInTheDocument();
        });
    });
});
