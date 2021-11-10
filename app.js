const http = require("http")
const PORT = process.env.PORT || 5000

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/api" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" })
    //set the response
    res.write("Сервер стартанул")
    //end the response
    res.end()
    
    require('http').get('http://85.30.196.223:8071/cgi-bin/alarmout_cgi?action=set&user=admin&pwd=Rjvtylfyn2016&Output=0&Status=1%E2%81%A0%E2%81%A0%E2%81%A0%E2%81%A0', (res) => {
      res.setEncoding('utf8');
      res.on('data', function (body) {
          console.log("Запрос отправлен");
      });
     });
    
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Route not found" }))
  }
})

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
})
