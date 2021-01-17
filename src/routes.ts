import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({name: 'show', 
                            email:'show@gmail', 
                            password:'123',
                            techs: ['Node', 'React', {title: 'java',
                                                    experience: 100}]
                                    })
    return response.json({message:  'Hello World'})
}