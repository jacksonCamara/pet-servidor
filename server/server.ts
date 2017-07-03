import { connect, ConnectionOptions } from 'mongoose'
import * as mongoose from 'mongoose'
import { app } from './app'
import Bluebird = require("bluebird");
(<any>mongoose).Promise = Bluebird;


connect('localhost:27017/e-commerce')
    .then(() => {
        console.log('conectado ao banco de dados')
        app.listen(8080, () => {
            console.log('escutando na porta 8080')
        })
    })
    .catch(console.error)
