import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "John Doe",
  initials: "JD",
  location: "Anytown, Anycountry",
  locationLink: "",
  about: "Doing work during work hours",
  summary: "A lot of experience with working and doing stuff.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "john.doe@example.com",
    tel: "+X XXX XXX XXXX",
    social: [
      {
        name: "GitHub",
        url: "",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Example university",
      degree: "PhD in Example",
      start: "1970",
      end: "1975",
    },
  ],
  work: [
    {
      company: "Example Inc.",
      link: "",
      badges: ["Programming", "Coding"],
      title: "Work Expert",
      start: "2000",
      end: null,
      description: "Working with work",
    },
    {
      company: "Example Co.",
      link: "",
      badges: ["Not programming", "Not coding"],
      title: "Junior Worker",
      start: "1975",
      end: "2000",
      description: "Worked with work",
    },
  ],
  skills: [
    "Programming",
    "React/Next.js",
    "TypeScript",
    "Node.js",
    "Java",
    "GNU/Linux",
  ],
  projects: [
    {
      title: "Example Project",
      techStack: ["Github", "React", "Next.js"],
      description: "Advanced project that does things",
      link: {
        label: "Example link",
        href: "",
      },
    },
    {
      title: "Another project",
      techStack: ["Gitlab", "Node.js"],
      description: "Another project that does things",
      link: {
        label: "Another link",
        href: "",
      },
    },
  ],
} as const;
