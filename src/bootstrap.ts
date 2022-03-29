import "reflect-metadata";
import { getRepository } from "typeorm";
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User";

export const Bootstrap = async () => {
  const userRepo = getRepository(User);

  const user = userRepo.create({
    firstName: "King",
    lastName: "Dreamer",
    age: 20,
  });
  await userRepo.save(user);
  const users = await userRepo.findOne({
    where: { firstName: "King" },
  });

  const tweetRepo = getRepository(Tweet);
  const tweet = new Tweet();
  tweet.title = "毛这点";
  tweet.content = "来玩呀！";
  tweet.user = Promise.resolve(user);
  await tweetRepo.save(tweet);
  console.log("users: ", users);
};

export const find = async () => {
  const user = await getRepository(User).findOne({
    where: { firstName: "King" },
  });
  return user;
  /*   console.log("user", user);
  console.log(await user.tweets); */
};
