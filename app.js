const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const run = async () => {
  const allUsers = await prisma.company.findMany()
  console.log(allUsers);
}

run();