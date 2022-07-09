import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";


const userUpdateService = async (id: string, name: string, password: string, age: number) => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find(user => user.id === id)
    
    if(bcrypt.compareSync(password, account!.password)){
        throw new Error("Inform a different password.")
    }

    const newPassword = bcrypt.hashSync(password,10)

    await userRepository.update(account!.id, {name: name, password: newPassword, age: age})
    
    return true

}

export default userUpdateService