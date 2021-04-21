import prisma from "../common/prisma"

type CreateUserInput = {
  name: string
}

export const createUser = async (input: CreateUserInput) => {
  const user = await prisma.user.create({ data: input })
  return user
}

export const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}