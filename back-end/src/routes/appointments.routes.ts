import { Router } from 'express'
import { PrismaAppointmentsRepository } from '../repositories/prisma/prisma-appointments-repository'
import { SubmitAppointmentUseCase } from '../use-cases/submit-appointment-use-case'
import { ensureAuthenticated } from '../middlewares/ensure-authenticated'


const routes = Router()

routes.post(
    '/appointment',
    ensureAuthenticated(),
    async (req, res) => {
        const {
            startTime,
            endTime,
            location,
            type,
            reminderId } = req.body

        console.table(req.userId)

        try {
            const prismaAppointmentsRepository = new PrismaAppointmentsRepository()

            const submitAppointmentUseCase = new SubmitAppointmentUseCase(
                prismaAppointmentsRepository,
            )

            return res.status(201).send(
                await submitAppointmentUseCase.create({
                    startTime,
                    endTime,
                    location,
                    type,
                    reminderId
                })
            )
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

routes.put(
    '/appointment',
    //ensureAuthenticated(),
    async (req, res) => {
        const {
            id,
            startTime,
            endTime,
            location,
            type,
            reminderId } = req.body

        console.table(req.userId)

        try {
            const prismaAppointmentsRepository = new PrismaAppointmentsRepository()

            const submitAppointmentUseCase = new SubmitAppointmentUseCase(
                prismaAppointmentsRepository,
            )

            return res.status(201).send(
                await submitAppointmentUseCase.update({
                    id,
                    startTime,
                    endTime,
                    location,
                    type,
                    reminderId
                })
            )
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

export { routes }