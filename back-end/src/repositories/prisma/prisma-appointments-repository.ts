import { AppointmentCreateData, AppointmentUpdateData, AppointmentsRepository } from '../appointments-repository'
import { prisma } from '../../prisma'


export class PrismaAppointmentsRepository implements AppointmentsRepository {
    async create({ startTime, endTime, location, type, reminderId }: AppointmentCreateData) {
        return await prisma.appointment.create({
            data: {
                startTime,
                endTime,
                location,
                type,
                reminderId
            }
        })
    }

    async update({ id, startTime, endTime, location, type, reminderId }: AppointmentUpdateData) {
        return await prisma.appointment.update({
            where: {
                id
            },
            data: {
                startTime,
                endTime,
                location,
                type,
                reminderId
            }
        })
    }

}