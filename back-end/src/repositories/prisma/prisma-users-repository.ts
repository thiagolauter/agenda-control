import { FindUserData, UserCreateData, UsersRepository } from '../users-repository'
import { prisma } from '../../prisma'


export class PrismaUsersRepository implements UsersRepository {
    async create({ email, name }: UserCreateData) {
        return await prisma.user.create({
            data: {
                email,
                name
            }
        })
    }

    async findOne({ email }: FindUserData) {
        return await prisma.user.findUniqueOrThrow({
            where: {
                email
            }
        })
    }
}