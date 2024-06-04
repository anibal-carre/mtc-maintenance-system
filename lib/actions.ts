"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const prisma = new PrismaClient();

const FormKeySchema = z.object({
  id: z.string(),
  key: z.string({
    invalid_type_error: "Please enter a valid key name",
  }),
  door: z.string({
    invalid_type_error: "Please enter a valid key door",
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const createKeySchema = FormKeySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createKey(formData: FormData) {
  const validatedFields = createKeySchema.safeParse({
    key: formData.get("key"),
    door: formData.get("door"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Key.",
    };
  }

  const { key, door } = validatedFields.data;

  const createdAt = new Date();
  const updatedAt = new Date();

  console.log({
    key,
    door,
    createdAt,
    updatedAt,
  });

  //const rawFormData = Object.fromEntries(formData.entries())

  try {
    await prisma.key.create({
      data: {
        key,
        door,
        createdAt,
        updatedAt,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath("/dashboard/keys");
  redirect("/dashboard/keys");
}
