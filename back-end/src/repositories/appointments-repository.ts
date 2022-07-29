export interface AppointmentCreateData {
    startTime: Date
    endTime: Date
    location: string
    type: string
    reminderId: string
}

export interface AppointmentsRepository {
    create: (data: AppointmentCreateData) => Promise<void>
}