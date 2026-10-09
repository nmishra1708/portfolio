# Full-Stack & AI Systems Engineer Portfolio

A React and Vite portfolio backed by a Node.js and Express API. The API supplies the profile and project data; the browser provides project filtering and search.
The resume and photos are stored in `server/uploads` and served by Express at `/uploads`. Vite proxies `/uploads` to the API during local development, and the frontend uses `VITE_API_URL` for assets when the API is hosted on a separate origin.
The portfolio includes a photo-led introduction, measurable outcomes, selected projects, career history, interactive engineering-stack categories, and direct contact links.

## Requirements

- Node.js 18 or later
- npm

## Run locally

From the project root, install dependencies and start the API and web app:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The Vite development server proxies `/api` requests to the Express server on port `4000`.

Create an optimized frontend build with `npm run build`. Run the API independently in production with `npm start`. Set `PORT` to change the API port; set `VITE_API_URL` when the frontend needs to call an API hosted on a different origin.

## Deploy to Vercel

Import the repository into Vercel with the **repository root** as the Root Directory (do not select `client`). The checked-in `vercel.json` builds the React app into the root `dist` directory, deploys the `api/` serverless functions, and routes `/uploads/:filename` to the upload function. The serverless upload function includes the files in `server/uploads`.

After deploying, the API endpoint is `https://<your-deployment>.vercel.app/api/portfolio` (note the final `o` in `portfolio`); the health endpoint is `/api/health`. No separate Express server or `VITE_API_URL` is needed when frontend and API are deployed to this same Vercel domain.

### Fix: "No Output Directory named dist found"

In Vercel **Project Settings → Build and Deployment**, configure:

- **Root Directory:** repository root (`.`); leave **Include files outside the Root Directory** disabled.
- **Framework Preset:** Vite, or Other if you want to use the checked-in build settings directly.
- **Build Command:** `npm run build:vercel`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

The Vercel-specific build script writes the frontend into the root `dist` directory, matching Vercel's Output Directory setting. Do not set the Root Directory to `client`: Vercel would not include the root-level `api/` functions or `vercel.json`. If Vercel Project Settings override the build command or output directory, change them to `npm run build:vercel` and `dist`, or disable the overrides so Vercel can use `vercel.json`. Verify that the latest deployment's Git commit contains the root-level `vercel.json`, then redeploy.

## API

- `GET /api/health` — service health check
- `GET /api/portfolio` — profile and project data for the portfolio
- `GET /uploads/<filename>` — resume PDF and portfolio images
