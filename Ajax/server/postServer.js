var http = require("http")
var strMath = require("querystring")
var server = http.createServer(function (req, res) {
  var str = ""
  req.on("data", function (_data) {
    str += _data
  })
  req.on("end", function () {
    var obj = strMath.parse(str)
    obj.age = Number(obj.age) + 5
    res.writeHeader(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" })
    res.write(JSON.stringify(obj))
    res.end()
  })
})
server.listen(3010, "192.168.31.167", function () {
  console.log("开始服务");
})
