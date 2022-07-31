import { ReminderCreateData, ReminderUpdateData } from './../reminders-repository'
import { prisma } from '../../prisma'
import { ReminderFindByUserData, RemindersRepository } from '../reminders-repository'
import { Reminder } from '@prisma/client'


export class PrismaRemindersRepository implements RemindersRepository {
    async create({ userId, appointmentId, time, dismiss }: ReminderCreateData) {
        return await prisma.reminder.create({
            data: {
                userId,
                appointmentId,
                time,
                dismiss
            }
        })
    }
    async update({ id, userId, appointmentId, time, dismiss }: ReminderUpdateData) {
        return await prisma.reminder.update({
            where:{
                id
            },
            data: {
                userId,
                appointmentId,
                time,
                dismiss
            }
        })
    }
    async findByUser({ id }: ReminderFindByUserData) {
        return await prisma.reminder.findMany({
            where: {
                userId: id
            }
        })
    }

}