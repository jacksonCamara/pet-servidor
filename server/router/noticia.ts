import { Router } from 'express'
//import { Produto as ProdutoController } from '../controller/produto'

export const noticia = Router()

//const controller = new ProdutoController()

noticia.get('/', (request, response) => {
       console.log("entrou no get")
   // controller.list(request, response)
})


noticia.post('/', (request, response) => {
   // controller.add(request, response)
   console.log("entrou no post")
})

