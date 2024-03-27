import http from 'node:http'

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atulaizar um informação especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Aplicação STATEFUL - Salvam os dados localmente em memoria
// Aplicação STATELESS - Salvam os dados em BD externos

// Cabeçalhos (Requisições/respostas) => Metadados

// HTTP Status Code

const users = []

const server = http.createServer((req, res) => {
   const {method, url} = req

   if (method === "GET" && url === "/users") {
      return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
   }

   if (method === "POST" && url === "/users") {
      users.push({
         id: 1,
         name: "George San",
         email: "georgesant@example.com",
      })
      return res.writeHead(201).end()
//    _res.end_ para retornar um texto        
   }
   return res.end("Olá")
})

server.listen(3333);
