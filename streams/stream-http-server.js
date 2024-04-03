import http from "node:http"
import {Transform} from "node:stream"


class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async(req, res) => {
    const buffers = []

// A sitaxe de (for await) permite percorrer todo o array, e ser garregado ao final da leitura de toda stream.
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)

})

server.listen(3334)