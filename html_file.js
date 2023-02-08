const http = require("http");
const fs = require("fs").promises;
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const html = await fs.readFile("./index.html");
  res.end(html);
});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
    }
);