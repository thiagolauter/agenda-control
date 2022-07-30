import { Request, Response, NextFunction } from 'express'
import { decode, verify } from 'jsonwebtoken'

export function ensureAuthenticated() {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.headers.authorization

    if (!authToken) {
      return response.status(401).json({ message: 'Token missing' })
    }

    const [, token] = authToken.split(' ')

    try {
      verify(token, process.env.SECRET_JWT)

      const { sub } = decode(token)
      
      request.userId = sub.toString()

      return next()
    } catch (error) {
      return response.status(401).json({ message: 'Unauthorized token!' })
    }
  }
}