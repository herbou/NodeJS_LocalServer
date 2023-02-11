var nodeStatic = require("node-static")

const PORT = 9000
const folder = "./public"
var file = new nodeStatic.Server(folder)


require("http").createServer((req,res) => {
	console.log(".    # Http Request.")
	req.addListener("end",() => file.serve(req,res)).resume()
}).listen(PORT)


console.log(".    Listening on :  http://127.0.0.1:"+PORT+"/")
console.log(".")
console.log(".")
