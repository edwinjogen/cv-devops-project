import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Header } from "./header";
import { RESUME_DATA } from "@/data/resume-data";

describe("Header", () => {
    test("Test name", () => {
        render(<Header />);

        expect(screen.getByText(RESUME_DATA.name)).toBeInTheDocument();
    });

    test("Test about", () => {
        render(<Header />);

        expect(screen.getByText(RESUME_DATA.about)).toBeInTheDocument();
    });

    test("Test location", () => {
        render(<Header />);

        expect(screen.getByText(RESUME_DATA.location)).toBeInTheDocument();

        expect(screen.getByText(RESUME_DATA.location)).
            toHaveAttribute('href', RESUME_DATA.locationLink);
    });
})
