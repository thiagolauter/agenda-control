import { Router } from 'express'

import { routes as appointment } from './appointments.routes'

const routes = Router()

routes.use(appointment)

export { routes }