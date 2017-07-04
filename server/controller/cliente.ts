import {Cliente as ClienteEntity} from '../entity/cliente';
import {Cliente as ClienteService} from '../service/cliente';
import { CRUD } from './crud'

export class Cliente extends CRUD<ClienteEntity>{
    constructor(){
        const service = new ClienteService();
        super(service);
    }
}