import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { profile, projects } = require("./data.cjs");

export default function portfolioHandler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed." });
  }

  return response.status(200).json({ profile, projects });
}
