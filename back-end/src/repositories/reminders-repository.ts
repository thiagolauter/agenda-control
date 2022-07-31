import { Reminder } from "@prisma/client"

export interface ReminderCreateData {
    userId: string
    appointmentId: string
    time: Date
    dismiss: boolean
}

export interface ReminderUpdateData {
    id: string
    userId: string
    appointmentId: string
    time: Date
    dismiss: boolean
}

export interface ReminderFindByUserData {
    id: string
}

export interface RemindersRepository {
    create: (data: ReminderCreateData) => Promise<Reminder>
    update: (data: ReminderFindByUserData) => Promise<Reminder>
    findByUser: (data: ReminderFindByUserData) => Promise<Reminder[]>
}