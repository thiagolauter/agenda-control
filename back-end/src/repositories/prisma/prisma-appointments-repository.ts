import { AppointmentCreateData, AppointmentsRepository } from '../appointments-repository'
import { prisma } from '../../prisma'


export class PrismaAppointmentsRepository implements AppointmentsRepository {
    async create({ startTime, endTime, location, type, reminderId }: AppointmentCreateData) {
        await prisma.appointment.create({
            data: {
                startTime,
                endTime,
                location,
                type,
                reminderId
            }
        })
    }
    async findAll({ startTime, endTime, location, type, reminderId }: AppointmentCreateData) {
        await prisma.appointment.findMany()
    }
}