import { Document } from 'mongoose'
import { Entity } from '../entity/entity'

export interface Mapper<TEntity extends Entity> {
    toEntity(document: TEntity & Document): TEntity
    toDocument(entity: TEntity, target?: TEntity & Document): TEntity & Document
}

export class DefaultMapper<TEntity extends Entity>
    implements Mapper<TEntity> {

    constructor(
        private readonly documentFactory: new (values: any) => TEntity & Document
    ) { 
        this.toEntity = this.toEntity.bind(this)
        this.toDocument = this.toDocument.bind(this)
    }

    toEntity(document: TEntity & Document): TEntity {
        const documentValues = (document as any)._doc
        const entityValues: any = {}
        for (const key in documentValues) {
            if (key === '_id' || key === '__v') continue
            if (typeof documentValues[key] === 'object') {
                entityValues[key] = this.toEntity(documentValues[key])
            }
            else {
                entityValues[key] = documentValues[key]
            }
        }
        return entityValues as TEntity
    }

    toDocument(entity: TEntity, target?: TEntity & Document): TEntity & Document {
        const entityValues = entity as any
        const documentValues: any = target || {}
        for (const key in entityValues) {
            documentValues[key] = entityValues[key]
        }
        return target || new this.documentFactory(documentValues)
    }
}