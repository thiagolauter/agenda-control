import { Router } from "express"
import { ensureAuthenticated } from '../middlewares/ensure-authenticated'
import { PrismaRemindersRepository } from "../repositories/prisma/prisma-reminders-repository"
import { SubmitReminderUseCase } from "../use-cases/submit-reminder-use-case"


const routes = Router()

routes.post(
    '/reminder',
    ensureAuthenticated(),
    async (req, res) => {
        const { userId,
            appointmentId,
            time,
            dismiss } = req.body

        console.table(req.userId)

        try {
            const prismaRemindersRepository = new PrismaRemindersRepository()

            const submitReminderUseCase = new SubmitReminderUseCase(
                prismaRemindersRepository,
            )

            await submitReminderUseCase.create({
                userId,
                appointmentId,
                time,
                dismiss
            })

            return res.status(201).send()
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

routes.get(
    '/reminder',
    async (req, res) => {
        const { userId } = req.body

        console.table(req.userId)

        try {
            const prismaRemindersRepository = new PrismaRemindersRepository()

            const submitReminderUseCase = new SubmitReminderUseCase(
                prismaRemindersRepository,
            )

            return res.status(200).send(
                await submitReminderUseCase.findByUser({
                    userId,
                    appointmentId: "",
                    time: undefined,
                    dismiss: false
                })
            )
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

export { routes }