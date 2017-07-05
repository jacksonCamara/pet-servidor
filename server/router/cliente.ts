import { Router } from 'express'
import { Cliente as ClienteController } from '../controller/cliente'

export const cliente = Router()
const controller = new ClienteController()

cliente.get('/', (request, response) => {
    controller.list(request, response)
})

cliente.get('/:id', (request, response) => {
    controller.find(request, response)
})

cliente.post('/', (request, response) => {
    controller.add(request, response)
})

cliente.get('/nome/:nome', (request, response) => {
    controller.findNome(request, response)
})

cliente.put('/cliente/:cliente', (request, response) => {
    controller.update(request, response)
})

