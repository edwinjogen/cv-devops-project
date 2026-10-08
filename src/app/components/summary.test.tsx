import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Summary } from "./summary";
import { RESUME_DATA } from "@/data/resume-data";

const summary = RESUME_DATA.summary;

describe('Summary', () => {
    test("Test summary", () => {
        render(<Summary summary={summary}/>);

        expect(screen.getByText(summary)).toBeInTheDocument();
    });
});
