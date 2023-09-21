const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  } else if (req.url === "/about") {
    // BLOCKING CODE
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} and ${j}`);
      }
    }
    res.end("about page");
  } else {
    res.end("error page");
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
