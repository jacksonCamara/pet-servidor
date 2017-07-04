import * as express from 'express'
import { cliente} from './router/cliente'
export const router = express.Router()


router.use('/clientes', cliente)