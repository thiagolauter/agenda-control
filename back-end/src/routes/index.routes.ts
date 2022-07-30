import { Router } from 'express'

import { routes as appointment } from './appointments.routes'
import { routes as user } from './users.routes'

const routes = Router()

routes.use(appointment)
routes.use(user)

export { routes }