# DevOps course project

This project is based on an existing project by Bartosz Jarocki which can be found [here](https://github.com/BartoszJarocki/cv). It renders a CV in the browser based on a TypeScript configuration. We have implemented core DevOps principles around this existing project, since it didn't have anything at all. The report can be found in `DD2482/report.pdf`

The original README.md has been moved to ORIGINAL_README.md


### Requirements

To build the project, you need `pnpm` and for terraform you need `terraform`.

### Building and running

The project's production deployment can be found [here](https://cv-devops-project.vercel.app/), rendering the CV based on configurations found in `src/data/resume-data.ts`

To run the project locally, do the following. The CV will then be rendered and available on localhost port 3000.

```
pnpm install
pnpm dev
```

To run tests, linting, and formatting checks, these commands can be used:

```
pnpm test
pnpm run check # For both linting and formatting
```

To perform terraform validation, run this from the project's root:

```
terraform -chdir=terraform init # If not yet initialized
terraform -chdir=terraform validate
```
