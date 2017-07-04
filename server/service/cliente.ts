import { Cliente as ClienteEntity } from '../entity/cliente'
import { Cliente as ClienteRepository } from '../repository/cliente'
import { CRUD } from './crud'

export class Cliente extends CRUD<ClienteEntity> {
    constructor() {
        const repository = new ClienteRepository()
        super(repository)
    }
}