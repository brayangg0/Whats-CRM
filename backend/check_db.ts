import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const t = await prisma.messageTemplate.findMany();
  console.log(JSON.stringify(t, null, 2));
}
main().finally(() => prisma.$disconnect());
