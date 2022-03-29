import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../entity/User";

export async function userRepo() {
  //   const connection = await createConnection();
  //   const userRepo = await connection.getRepository(User);
  const user = new User();
  user.firstName = "Time";
  user.lastName = "King";
  user.age = 20;
  //   await user.save();
  const allUsers = await User.find();
  const firstUser = await User.findOne({ firstName: "Time" });
  console.log(firstUser);
  //   await firstUser.remove();
  console.log(allUsers);
}
