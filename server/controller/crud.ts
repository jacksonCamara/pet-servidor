import { Document } from 'mongoose'
import { Request, Response } from 'express'
import * as HttpStatus from 'http-status-codes'
import { Error as RepositoryError } from '../repository/error'
import { CRUD as CRUDService } from '../service/crud'
import { Entity } from '../entity/entity'

export class CRUD<TEntity extends Entity> {
    constructor(
        private readonly service: CRUDService<TEntity>
    ) { }

    public list(request: Request, response: Response) {

        const entities = this.service.list()
        return response.json(entities)
    }

    public add(request: Request, response: Response) {
        console.log("entrou no list controller/crud/cliente")
        let entity = request.body as TEntity
        return this.service.add(entity).then(ser => {
            return response
                .status(HttpStatus.CREATED)
                .json(ser)
        }).catch(error => {
            if (error === RepositoryError.duplicateKey) {
                return response
                    .status(HttpStatus.BAD_REQUEST)
                    .json(`Entity has some duplicate unique key.`)
            }
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json()
        })
    }
}