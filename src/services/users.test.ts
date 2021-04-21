import { Prisma, User } from "@prisma/client";

import { prismaMock } from "../tests/mockPrisma";

import { createUser, getUsers } from "./users";

describe("Users tests", () => {
  it("can fetch existing users", async () => {
    prismaMock.user.findMany.mockResolvedValue([{ id: 1, name: "Bruce" }]);

    const users = await getUsers();

    expect(users).toHaveLength(1);
    expect(users[0].name).toEqual("Bruce");
  });

  it("can create new user", async () => {
    prismaMock.user.create.mockImplementation((input) => {
      return Promise.resolve({
        id: 1,
        name: input.data.name,
      }) as Prisma.Prisma__UserClient<User>; // TODO: This could be improve by the prisma team
    });

    const user = await createUser({ name: "Bruce" });

    expect(user.name).toEqual("Bruce");
  });

  it("resets mock on each test", async () => {
    const users = await getUsers();

    expect(users).toBeUndefined();
  });
});
