import { Router } from 'express'

import { routes as appointment } from './appointments.routes'
import { routes as user } from './users.routes'
import { routes as reminder } from './reminders.routes'

const routes = Router()

routes.use(appointment)
routes.use(user)
routes.use(reminder)

export { routes }