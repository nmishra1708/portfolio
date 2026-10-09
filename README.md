# Full-Stack & AI Systems Engineer Portfolio

A React and Vite portfolio backed by a Node.js and Express API. The API supplies the profile and project data; the browser provides project filtering and search.
The resume and photos are stored in `client/uploads` and served by the API at `/uploads`. Vite proxies `/uploads` to the Express API during local development; on Vercel, the upload serverless function serves the same files.
The portfolio includes a photo-led introduction, measurable outcomes, selected projects, career history, interactive engineering-stack categories, a contact form that opens a pre-filled email in the visitor's email app, and direct contact links.

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

Import the repository into Vercel and set the **Root Directory** to `client`. The checked-in `client/vercel.json` builds the React app into `client/dist`, deploys the `client/api/` serverless functions, and routes `/uploads/:filename` to the upload function. The serverless upload function includes the files in `client/uploads`.

After deploying, the API endpoint is `https://<your-deployment>.vercel.app/api/portfolio` (note the final `o` in `portfolio`); the health endpoint is `/api/health`. No separate Express server or `VITE_API_URL` is needed when frontend and API are deployed to this same Vercel domain.

### Vercel project settings

In Vercel **Project Settings → Build and Deployment**, configure these values to match the `client` Root Directory:

- **Root Directory:** `client`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

The `client` directory is self-contained for Vercel: its package scripts, `vercel.json`, API functions, shared portfolio data, and uploads all live under the configured Root Directory. This avoids the missing workspace script and missing output-directory errors when Vercel builds from `/vercel/path0/client`. If the project was previously configured with a different Root Directory, update it to `client`, ensure the build settings above are used, and redeploy a commit containing `client/vercel.json`.

## API

- `GET /api/health` — service health check (Vercel function: `client/api/health.js`)
- `GET /api/portfolio` — profile and project data (Vercel function: `client/api/portfolio.js`)
- `GET /uploads/<filename>` — resume PDF and portfolio images
