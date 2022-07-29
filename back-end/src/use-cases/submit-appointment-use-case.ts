import moment from 'moment'
import { AppointmentsRepository } from '../repositories/appointments-repository'

interface SubmitAppointmentUseCaseRequest {
    startTime: Date
    endTime: Date
    location: string
    type: string
    reminderId: string
}

export class SubmitAppointmentUseCase {
    constructor(
        private appointmentsRepository: AppointmentsRepository
    ) { }

    async create(request: SubmitAppointmentUseCaseRequest) {
        const {
            location,
            type,
            reminderId } = request

        
        
            
            if (!moment(request.startTime, moment.ISO_8601, true).isValid()) {
                throw new Error('startTime is not valid')
            }
            const startTime = new Date(request.startTime)
            const endTime = new Date(request.endTime)

        console.log(startTime)
        console.log(typeof (startTime))



        await this.appointmentsRepository.create({
            startTime,
            endTime,
            location,
            type,
            reminderId
        })
    }
}

