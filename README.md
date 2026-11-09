# Professional Portfolio

A personal engineering portfolio built with React 19 and Vite. It presents the profile, engineering principles, selected systems, academic projects, technical domains, and professional record defined in `src/data.js`.

## Requirements

- Node.js compatible with the installed Vite 8 release (use a current Node.js 22 LTS release).
- npm.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run Oxlint. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Updating portfolio information

Edit `src/data.js` to update profile details, project case studies, technical domains, and education information.

Contact links and the resume download are optional. Leave `email`, `linkedin`, or `resumePdf` empty until a verified destination is available. To publish a resume, add the approved PDF to `public/` and set `resumePdf` to its public path (for example, `/resume.pdf`).

The interface hides unavailable contact links and displays a non-clickable resume status until a PDF path is configured. This avoids presenting placeholder destinations as working contact or download links.
