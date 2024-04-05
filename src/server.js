import http from 'node:http'
import { json } from './middiewares/json.js'

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

const server = http.createServer(async (req, res) => {
   const {method, url} = req

   await json(req, res)
   
   if (method === "GET" && url === "/users") {
      return res
       .end(JSON.stringify(users))
   }

   if (method === "POST" && url === "/users") {
      const { name, email } = req.body

      users.push({
         id: 1,
         name,
         email,
      })

      return res.writeHead(201).end()
//    _res.end_ para retornar um texto        
   }
   return res.writeHead(404).end()
})

server.listen(3333);
