import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "b7e8b62b-2498-4903-9d2e-4efdf91d11a0",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento legal",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
