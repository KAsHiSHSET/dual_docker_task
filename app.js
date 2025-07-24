const http = require('http');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "Default";

http.createServer((req, res) => {
  res.writeHead(200);
  // res.end("Hello from version: " + VERSION);
  //updated , making changes 
  // the change
  
  res.end("Hello from version: " + VERSION + " ✅ Updated by Kashish");

}).listen(PORT, () => {
  console.log("Server running on port", PORT, "Version:", VERSION);
});