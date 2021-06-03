// Marketing Simulation
// JDLinares
// 2 June 2021

var basehtml = require('./view/baseView')



const http = require('http')
const port = 3000 	//process.env.PORT				// NOTE: Default 3000

const server = http.createServer((req,res) => {
		res.statusCode = 200
		res.setHeader('Content-Type','text/html')
		res.end(basehtml.base)
})

server.listen(port,()=>{
		console.log(`Server running at port ${port}`)
		console.log(basehtml)
})



