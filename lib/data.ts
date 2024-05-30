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
        key: "asc",
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
