import { Router } from 'express'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'
import { AuthenticationService } from '../services/authentication-service'
import { SubmitUserUseCase } from '../use-cases/submit-user-use-case'


const routes = Router()

routes.post(
    '/user/auth',
    async (req, res) => {
        const { email, name } = req.body

        try {
            const prismaUsersRepository = new PrismaUsersRepository()

            const authenticationService = new AuthenticationService(
                prismaUsersRepository
            )
            const submitUserUseCase = new SubmitUserUseCase(
                authenticationService,
                prismaUsersRepository
            )


            const user = await submitUserUseCase.authUser({
                email,
                name
            })

            return res.status(200).send(user)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
)

export { routes }