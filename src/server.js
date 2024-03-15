import http from 'node:http'

const server = http.createServer((rec, res) => {
   return res.end('Hello Word')
})


