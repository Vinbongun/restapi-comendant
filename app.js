const http = require("http")
const PORT = process.env.PORT || 5000
const options = {
  hostname: "85.30.196.223",
  port: 8071,
  path: "/cgi-bin/alarmout_cgi?action=set&user=admin&pwd=Rjvtylfyn2016&Output=0&Status=1%E2%81%A0%E2%81%A0%E2%81%A0%E2%81%A0",
  method: "GET",
}

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/api" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" })
    //set the response
    res.write("Сервер стартанул")
    //end the response
    res.end()
    
    const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on("data", (d) => {
      process.stdout.write(d)
      })
    })
    req.on("error", (error) => {
      console.error(error)
    })
    req.end()
    
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
