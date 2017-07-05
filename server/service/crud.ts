import { Document } from 'mongoose'
import { Entity } from '../entity/entity'
import { CRUD as CrudRepository } from '../repository/crud'
import { Error } from '../repository/error'


export class CRUD<TEntity extends Entity> {

    constructor(private readonly repository: CrudRepository<TEntity>) { }

    public list(): Promise<TEntity[]> {
        return this.repository.list();
    }

    public add(dado: TEntity): Promise<TEntity> {
        return this.repository.add(dado)
    }

    public find(id: number): Promise<TEntity | undefined> {
        return this.repository.find(id)
    }


    public findNome(nome: string): Promise<TEntity[]> {
        return this.repository.findNome(nome)
    }

    public update(dado: TEntity): Promise<TEntity[]> {
        return this.repository.update(dado)
    }

}