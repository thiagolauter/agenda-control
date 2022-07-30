import { sign } from 'jsonwebtoken'
import { UsersRepository } from '../repositories/users-repository'


interface AuthenticationRequest {
  id: string
}

interface SubjectToken {
  token: string
}

class AuthenticationService {
  constructor(
    private usersRepository: UsersRepository
  ) { }

  async execute({ id }: AuthenticationRequest): Promise<SubjectToken> {
    try {
      const token = sign({ id }, process.env.SECRET_JWT, {
        subject: id,
        expiresIn: '1d',
      })

      return { token }

    } catch (error) {
      return error
    }
  }
}

export { AuthenticationService }