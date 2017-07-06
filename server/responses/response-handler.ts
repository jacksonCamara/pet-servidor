import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export class ResponseHandler {

    public onSuccess(res: Response, data: any) {
        res.status(HTTPStatus.OK).json(data);
    }

    public onSuccessNoContent(res: Response) {
        res.status(HTTPStatus.NO_CONTENT).end();
    }

    public onError(res: Response, err: any, message: string, ) {
        console.log(`Error: ${err}`);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message)
    }

    public onErrorBadRequest(res: Response, message: string, ) {
        res.status(HTTPStatus.BAD_REQUEST).send(message)
    }
}

