const { profile, projects } = require("../server/src/data");

module.exports = function portfolioHandler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed." });
  }

  return response.status(200).json({ profile, projects });
};
