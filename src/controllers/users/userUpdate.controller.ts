import { Request, Response } from 'express'
import userUpdateService from '../../services/users/userUpdate.service'
    
    const userUpdateController = async (req: Request, res: Response) => {
    
        try {
    
            const {id} = req.params
            const {name, password, age} = req.body
            
            const user = await userUpdateService(id, name, password, age)

            return res.status(201).json({message: "User Updated"})
    
        } catch (err) {
    
            if (err instanceof Error) {
    
                return res.status(200).send({
                    "error": err.name,
                    "message": err.message
                })
            }
        }
    }
export default userUpdateController