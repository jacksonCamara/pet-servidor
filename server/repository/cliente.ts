import { Cliente as ClienteEntity } from '../entity/cliente'
import { Cliente as ClienteModel } from '../model/cliente'
import { CRUD } from './crud'
import { DefaultMapper } from './mapper'

export class Cliente extends CRUD<ClienteEntity> {

    constructor() {
        const mapper = new DefaultMapper<ClienteEntity>(ClienteModel)
        super(ClienteModel, mapper)
    }
}