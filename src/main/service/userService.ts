import { AppDataSource } from "../dataSource";
import { User } from "../entity/User";

// const userRepository = AppDataSource.getRepository(User);
const getUserQueryBuilder = async () => {
  return AppDataSource.getRepository(User).createQueryBuilder("user");
};

export const insertUser = async () => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.email = "test";
    user.name = "test";
    user.password = "3";

    const res = await userRepository.save(user);
    return res;
  } catch (e) {
    console.log(e, "error");
  }
};

export const findAll = async () => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const res = await userRepository.find();
    console.log(res);
    return res;
  } catch (e) {
    console.log(e, "error");
  }
};

// export const finder
