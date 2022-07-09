import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListOneService = async(id:string) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    if(!id){
        throw new Error("No authorization token found")
    }
        const user = users.find(user => user.id === id)

    return user

}

export default userListOneService