// Marketing Simulation
// JDLinares
// 2 June 2021

const http = require('http')
const port = 3000 	//process.env.PORT				// NOTE: Default 3000

const server = http.createServer((req,res) => {
		res.statusCode = 200
		res.setHeader('Content-Type','text/html')
		res.end('<h1>Hello World</h1>')
})

server.listen(port,()=>{
		console.log(`Server running at port ${port}`)
})


