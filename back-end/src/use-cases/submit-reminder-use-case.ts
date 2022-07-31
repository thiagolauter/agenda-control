import moment from 'moment'
import { RemindersRepository } from '../repositories/reminders-repository'

interface SubmitReminderUseCaseRequest {
    userId: string
    appointmentId: string
    time: Date
    dismiss: boolean
}

export class SubmitReminderUseCase {
    constructor(
        private remindersRepository: RemindersRepository
    ) { }

    async create(request: SubmitReminderUseCaseRequest) {
        const { userId,
            appointmentId,
            time,
            dismiss } = request


        return await this.remindersRepository.create({
            userId,
            appointmentId,
            time,
            dismiss
        })
    }

    async update(request: SubmitReminderUseCaseRequest) {
        const { userId } = request

        return await this.remindersRepository.update({
            id: userId
        })
    }

    async findByUser(request: SubmitReminderUseCaseRequest) {
        const { userId } = request

        return await this.remindersRepository.findByUser({
            id: userId
        })
    }
}

