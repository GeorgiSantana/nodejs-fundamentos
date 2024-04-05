export async function json(req,res) {
    const buffers = []

   // A sitaxe de (for await) permite percorrer todo o array, e ser garregado ao final da leitura de toda stream.
       for await (const chunk of req) {
           buffers.push(chunk)
       }

       try {
         req.body = JSON.parse(Buffer.concat(buffers).toString() || '{}')
         //req.body = JSON.parse(Buffer.concat(buffers).toString())
       } catch  {
         req.body = null
       }

       res.setHeader('Content-type', 'application/json')

    
}