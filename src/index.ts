import { createConnection } from "typeorm";
import { userRepo } from "./repository/user";
// import { Bootstrap, find } from "./bootstrap";

createConnection()
  .then(async () => {
    await userRepo();
    // await Bootstrap();
    // const user = await find();
    // console.log(user);
    // console.log(await user.tweets);
  })
  .catch((error) => console.error(error));
