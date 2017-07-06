import { Document, Model } from 'mongoose'
import { Entity } from '../entity/entity'
import { Error } from './error'
import { Mapper } from './mapper'
import { Cliente as ClienteModel } from '../model/cliente'

export class CRUD<TEntity extends Entity> {

    constructor(private readonly model: Model<TEntity & Document>) { }

    public list(): Promise<TEntity[]> {
        return this.model.find();
    }

    public find(id: number): Promise<TEntity | undefined> {
        console.log("repository find Cliente")
        console.log(id)
        return this.model.findOne({_id: id })
    }

    public add(entity: TEntity): Promise<TEntity> {
        let cliente = new this.model(entity);
        return cliente.save();
    }

    public findNome(nome: string): Promise<TEntity[]> {
        return this.model.find({ nome: nome })
    }

    public update(dado: TEntity): Promise<TEntity | undefined> {
        console.log("repository update Cliente")
        return this.model.findByIdAndUpdate(dado.id, dado)
    }
}