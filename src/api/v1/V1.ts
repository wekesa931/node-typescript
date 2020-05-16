import { Router } from 'express'
import { logger } from '../../utils/logger'
import { todoRouter } from './Routes/Todos/Todos'

export const routerV1 = Router()

routerV1.use(logger)
const apiPrefix = '/api'

routerV1.get('/', (req, res) => {
  res.send('Welcome to Centfinity wheree magic happens')
})
// routerV1.use(todoRouter)
routerV1.use(`${apiPrefix}/todo`, todoRouter)
