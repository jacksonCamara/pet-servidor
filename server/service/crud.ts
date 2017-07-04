import { Document } from 'mongoose'
import { Entity } from '../entity/entity'
import { CRUD as CrudRepository } from '../repository/crud'
import { Error } from '../repository/error'


export class CRUD<TEntity extends Entity> {
    constructor(
        private readonly repository: CrudRepository<TEntity>
    ) { }


    list(): Promise<TEntity[]> {
        return this.repository.list();
    }

    add(user: TEntity): Promise<TEntity> {
        console.log("entrou nolist service/crud/cliente")
        return this.repository.add(user)
    }

}