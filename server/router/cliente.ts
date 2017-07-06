import { Router } from 'express'
import { Cliente as ClienteController } from '../controller/cliente'

export const cliente = Router()
const controller = new ClienteController()

cliente.get('/', (request, response) => {
    console.log("entrou no router cliente")
    controller.list(request, response)
})

cliente.get('/:id', (request, response) => {
    controller.find(request, response)
})

cliente.post('/', (request, response) => {
    console.log("entrou no post do servidor")
    controller.add(request, response)
})

cliente.get('/nome/:nome', (request, response) => {
    controller.findNome(request, response)
})

cliente.put('/cliente/:cliente', (request, response) => {
    controller.update(request, response)
})

