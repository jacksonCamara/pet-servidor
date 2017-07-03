import * as express from 'express'


import { noticia } from './router/noticia'

export const router = express.Router()


router.use('/noticias', noticia)