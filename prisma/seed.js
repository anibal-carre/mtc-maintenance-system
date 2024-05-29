const { PrismaClient } = require("@prisma/client");
const { users, keys, products } = require("./data");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.deleteMany();
    console.log("Deleted records in users table");

    await prisma.key.deleteMany();
    console.log("Deleted records in key table");

    await prisma.product.deleteMany();
    console.log("Deleted records in product table");

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          password: hashedPassword,
        };
      })
    );

    await prisma.user.createMany({
      data: hashedUsers,
      skipDuplicates: true, // Prevent conflicts for unique constraints
    });

    console.log("Added users data");

    await prisma.key.createMany({
      data: keys,
    });

    console.log("Added key data");

    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
