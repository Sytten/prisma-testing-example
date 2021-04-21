// NORMALLY A SERVER OR SOMETHING
// BUT HERE JUST A CALL TO DEMONSTRATE

import prisma from "./common/prisma";
import { createUser, getUsers } from "./services/users";

const main = async () => {
  console.log("**My Super Server**");

  const newUser = await createUser({ name: "Emile" });
  console.log(`New user: ${JSON.stringify(newUser)}`);

  const users = await getUsers();
  for (const user of users) {
    console.log(`Existing user: ${JSON.stringify(user)}`);
  }
};

main()
  .catch((error) => {
    console.error(error);
  })
  .then(() => {
    prisma.$disconnect();
  });
