import path from "node:path";
import { readFile } from "node:fs/promises";

const contentTypes = {
  "Nitin_Mishra_AI_LLM_Resume_V1.0.pdf": "application/pdf",
  "nitin-mishra-portrait.png": "image/png",
  "performance-of-the-year-award.jpg": "image/jpeg",
};

export default async function uploadHandler(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const filename = request.query.filename;
  const contentType = contentTypes[filename];

  if (!contentType) {
    return response.status(404).json({ error: "Upload not found." });
  }

  const filePath = path.join(process.cwd(), "uploads", filename);

  try {
    const file = await readFile(filePath);
    response.setHeader("Content-Type", contentType);
    response.setHeader("Content-Length", file.length);
    response.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
    return response.status(200).send(request.method === "HEAD" ? undefined : file);
  } catch (error) {
    console.error(`Unable to read portfolio upload "${filename}":`, error);
    return response.status(500).json({ error: "Unable to serve upload." });
  }
}
