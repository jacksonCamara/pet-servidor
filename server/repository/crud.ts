import { Document, Model } from 'mongoose'
import { Entity } from '../entity/entity'
import { Error } from './error'
import { Mapper } from './mapper'
import { Cliente as ClienteModel } from '../model/cliente'

export class CRUD<TEntity extends Entity> {

    constructor(
        private readonly model: Model<TEntity & Document>,
        private readonly mapper: Mapper<TEntity>
    ) { }

    public list(): Promise<TEntity[]> {
        //ClienteModel.
        let documentsQuery = this.model.find()
        return documentsQuery.exec().then(doc => {
            return doc.map(this.mapper.toEntity)
        })
    }

    public find(id: number): Promise<TEntity | undefined> {
        return this.model.findOne({ id: id }).then(doc => {
            if (!doc) {
                return undefined
            } else {
                return this.mapper.toEntity(doc)
            }
        })
    }

    add(entity: TEntity): Promise<TEntity> {
        console.log("entrou nolist repository/crud/cliente")
        console.log(entity);
        return this.mapper.toDocument(entity).save().then(doc => {
            console.log(doc);
            const teste = this.mapper.toEntity(doc)
            console.log('=======================================')
            console.log(teste);
            return teste
        }).catch(error => {
            throw Error.duplicateKey
        })
    }
}