import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/users-repository'
import { AuthenticationService } from '../services/authentication-service'

interface SubmitUserUseCaseRequest {
    email: string
    name: string
}

export class SubmitUserUseCase {
    constructor(
        private authenticationService: AuthenticationService,
        private usersRepository: UsersRepository
    ) { }

    async authUser(request: SubmitUserUseCaseRequest) {
        const { email, name } = request


        let user: User = await this.usersRepository.findOne({
            email,
        })
        if (!user) {
            user = await this.usersRepository.create({
                email,
                name
            })
        }

        return await this.authenticationService.execute(user)


    }
}

