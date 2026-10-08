import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Education } from "./education";
import { RESUME_DATA } from "@/data/resume-data";

type Education = (typeof RESUME_DATA)["education"][number];

const educationData: Education[] = [
    {
        school: "Some school",
        degree: "Some degree",
        start: "2022",
        end: "2027",
    },
]

describe("Education", () => {
    test("Test Education heading", () => {
        render(<Education education={educationData} />);

        expect(
            screen.getByRole("heading", { name: "Education" })
        ).toBeInTheDocument();

    });

    test("Test Education data", () => {
        render(<Education education={educationData} />);

        const education = educationData[0];
        expect(
            screen.getByText(education.school)
        ).toBeInTheDocument();

        expect(
            screen.getByText(education.degree)
        ).toBeInTheDocument();

        expect(
            screen.getByText(education.start + " - " + education.end)
        ).toBeInTheDocument()

    })
})
