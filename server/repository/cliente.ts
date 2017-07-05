import { Cliente as ClienteEntity } from '../entity/cliente'
import { Cliente as ClienteModel } from '../model/cliente'
import { CRUD } from './crud'

export class Cliente extends CRUD<ClienteEntity> {

    constructor() {
        super(ClienteModel)
    }
}