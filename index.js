// Local development server
const http = require('http');
const url = require('url');

const handler = require('./api/merge').default;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  req.query = parsedUrl.query;
  await handler(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Example: http://localhost:${PORT}/api/merge?input=@god_sasuke_01`);
});
