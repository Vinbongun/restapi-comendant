const https = require("http")
const options = {
  hostname: "85.30.196.223",
  port: 8071,
  path: "/cgi-bin/alarmout_cgi?action=set&user=admin&pwd=Rjvtylfyn2016&Output=0&Status=1%E2%81%A0%E2%81%A0%E2%81%A0%E2%81%A0",
  method: "GET",
}

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
