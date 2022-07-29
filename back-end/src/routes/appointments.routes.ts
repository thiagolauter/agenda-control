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

        try {
            const prismaAppointmentsRepository = new PrismaAppointmentsRepository()

            const submitAppointmentUseCase = new SubmitAppointmentUseCase(
                prismaAppointmentsRepository,
            )

            await submitAppointmentUseCase.create({
                startTime,
                endTime,
                location,
                type,
                reminderId
            })

            return res.status(201).send()
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

export { routes }