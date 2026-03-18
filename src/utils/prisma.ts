import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
// const prisma = new PrismaClient({ adapter: pool })

const prismaClientSingleton = () => {
  return new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL as string,
  }).$extends(withAccelerate())
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@/generated/prisma/client'

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient
// }

// const prisma =
// globalForPrisma.prisma ||
// new PrismaClient({
//   adapter,
// })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma

// import { withAccelerate } from '@prisma/extension-accelerate'
// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     accelerateUrl: process.env.DATABASE_URL as string,
//   }).$extends(withAccelerate())
