import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredKeys(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const keys = await prisma.key.findMany({
      where: {
        OR: [
          { key: { contains: query, mode: "insensitive" } },
          { door: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        key: "desc",
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return keys;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch keys.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchKeysPages(query: string) {
  noStore();
  try {
    const count = await prisma.key.count({
      where: {
        OR: [
          {
            key: {
              contains: query,
              mode: "insensitive", // ILIKE equivalente en Prisma
            },
          },
          {
            door: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            createdAt: {
              gte: isNaN(Date.parse(query)) ? undefined : new Date(query),
              lte: isNaN(Date.parse(query)) ? undefined : new Date(query),
            },
          },
          {
            updatedAt: {
              gte: isNaN(Date.parse(query)) ? undefined : new Date(query),
              lte: isNaN(Date.parse(query)) ? undefined : new Date(query),
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of keys.");
  }
}

export async function fetchKeyById(id: string) {
  noStore();
  try {
    const key = await prisma.key.findUnique({
      where: { id: id },
    });

    if (key) {
      console.log(key);
      return key;
    } else {
      console.log("Key not found");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (product) {
      console.log(product);
      return product;
    } else {
      console.log("Product not found");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}

export async function fetchUsersPages(query: string) {
  noStore();

  try {
    const count = await prisma.user.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive", // ILIKE equivalente en Prisma
            },
          },
          {
            username: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            createdAt: {
              gte: isNaN(Date.parse(query)) ? undefined : new Date(query),
              lte: isNaN(Date.parse(query)) ? undefined : new Date(query),
            },
          },
          {
            updatedAt: {
              gte: isNaN(Date.parse(query)) ? undefined : new Date(query),
              lte: isNaN(Date.parse(query)) ? undefined : new Date(query),
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function fetchFilteredUsers(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { username: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        name: "desc",
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  } finally {
    await prisma.$disconnect();
  }
}

export const getUserById = async (id: string) => {
  try {
    const findUser = await prisma.user.findUnique({ where: { id } });

    const user = {
      id: findUser?.id,
      name: findUser?.name,
      username: findUser?.username,
      isAdmin: findUser?.isAdmin,
      createdAt: findUser?.createdAt,
      updatedAt: findUser?.updatedAt,
    };
    return user;
  } catch (error) {}
};

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [{ name: { contains: query, mode: "insensitive" } }],
      },
      orderBy: {
        name: "desc",
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  } finally {
    await prisma.$disconnect();
  }
}
