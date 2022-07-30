import { User } from "@prisma/client"

export interface UserCreateData {
    email: string,
    name: string
}
export interface FindUserData {
    email: string,
}

export interface UsersRepository {
    create: (data: UserCreateData) => Promise<User>
    findOne: (data: FindUserData) => Promise<User>
}