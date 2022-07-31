import { Appointment } from "@prisma/client"

export interface AppointmentCreateData {
    startTime: Date
    endTime: Date
    location: string
    type: string
    reminderId: string
}

export interface AppointmentUpdateData {
    id: string
    startTime: Date
    endTime: Date
    location: string
    type: string
    reminderId: string
}

export interface AppointmentFindByUserData {
    id: string
}

export interface AppointmentsRepository {
    create: (data: AppointmentCreateData) => Promise<Appointment>
    update: (data: AppointmentUpdateData) => Promise<Appointment>
}