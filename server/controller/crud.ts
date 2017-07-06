import { Document } from 'mongoose'
import { Request, Response } from 'express'
import * as HttpStatus from 'http-status-codes'
import { Error as RepositoryError } from '../repository/error'
import { CRUD as CRUDService } from '../service/crud'
import { Entity } from '../entity/entity'
import { ResponseHandler } from '../responses/response-handler';
import { ClienteInterface } from '../view-model/cliente-view-model'

export class CRUD<TEntity extends Entity> {
    private responseHandler: ResponseHandler;
    private readonly service: CRUDService<TEntity>
    private tipo: string;

    constructor(service: CRUDService<TEntity>, tipo: String) {
        this.responseHandler = new ResponseHandler();
        this.service = service;
    }

    public list(request: Request, response: Response): void {
        this.service.list()
            .then(dado => {
                this.responseHandler.onSuccess(response, dado)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao pesquisar ${this.tipo}`)
            })
    }

    public add(request: Request, response: Response) {
        let entity = request.body as TEntity
        this.service.add(entity)
            .then(dado => {
                this.responseHandler.onSuccess(response, dado)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao adiciionar ${this.tipo}`)
            })
    }

    public find(request: Request, response: Response): void {
        this.service.find(request.params.id)
            .then(dado => {
                this.responseHandler.onSuccess(response, dado)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao pesquisar ${this.tipo}`)
            })
    }

    public findNome(request: Request, response: Response): void {
        this.service.findNome(request.params.nome)
            .then(dado => {
                this.responseHandler.onSuccess(response, dado)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao pesquisar ${this.tipo}`)
            })
    }

    public update(request: Request, response: Response): void {
        const dado = request.body as TEntity;
        if (dado._id !== request.params.id) {
            this.responseHandler.onErrorBadRequest(response, `Erro ao atualizar ${this.tipo}`)
        }
        this.service.update(dado)
            .then(dado => {
                this.responseHandler.onSuccessNoContent(response)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao atualizar ${this.tipo}`)
            })
    }

    public delete(request: Request, response: Response): void {
        const id =  request.params.id;
        this.service.delete(id)
            .then(dado => {
                this.responseHandler.onSuccessNoContent(response)
            })
            .catch(error => {
                this.responseHandler.onError(response, error, `Erro ao atualizar ${this.tipo}`)
            })
    }

}