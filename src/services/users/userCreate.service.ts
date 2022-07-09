import { User } from "../../entities/user.entity";
import { IUserCreate, IUser } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt"

const userCreateServices = async ({name, email, password, age}: IUserCreate) =>{

  const userRepository = AppDataSource.getRepository(User)
  const users = await userRepository.find()

    const emailAlreadyExists = users.find((user)=> user.email === email)
    if (emailAlreadyExists){
      throw new Error ("Email already Exists") 
    }
    const user = new User()
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password, 10);
    user.age = age;
    user.created_at = new Date();
    user.updated_at = new Date();

    userRepository.create(user)
    await userRepository.save(user)

    return user;
}

export default userCreateServices