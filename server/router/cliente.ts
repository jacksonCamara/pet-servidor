import { Router } from 'express'
import { Cliente as ClienteController } from '../controller/cliente'


export const cliente = Router()

const controller = new ClienteController()

cliente.get('/', (request, response) => {
    controller.list(request, response)
})


cliente.post('/', (request, response) => {
        console.log("entrou no get router/cliente")
    controller.add(request, response)

})

