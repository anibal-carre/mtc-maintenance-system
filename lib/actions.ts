"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "./db";
import bcrypt from "bcryptjs";

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

const UpdateKey = FormKeySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function updateKey(id: string, formData: FormData) {
  const { key, door } = UpdateKey.parse({
    key: formData.get("key"),
    door: formData.get("door"),
  });

  const updatedAt = new Date();

  try {
    await db.key.update({
      where: { id: id },
      data: {
        key,
        door,
        updatedAt,
      },
    });

    console.log("Key Updated Successfully");
  } catch (error) {
    return { message: "Database Error: Failed to Update Key." };
  }

  revalidatePath("/dashboard/keys");
  redirect("/dashboard/keys");
}

export async function deleteKey(id: string) {
  // Simulate an error
  //throw new Error('Failed to Delete Invoice');
  try {
    await db.key.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/keys");
    return { message: "Deleted Key." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Key." };
  }
}

export async function deleteUser(id: string) {
  // Simulate an error
  //throw new Error('Failed to Delete Invoice');
  try {
    await db.user.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/users");
    return { message: "Deleted User." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete User." };
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({ where: { username } });
    return user;
  } catch (error) {}
};

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  password: z.string(),
  isAdmin: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const createUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createUser(formData: FormData) {
  const validatedFields = createUserSchema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    password: formData.get("password"),
    isAdmin: formData.get("isAdmin"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { name, username, password, isAdmin } = validatedFields.data;

  const rol = isAdmin == "Admin" ? true : false;

  const createdAt = new Date();
  const updatedAt = new Date();

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByUsername(username);

  if (existingUser) {
    return { error: "Username already in use" };
  }

  console.log({
    name,
    username,
    hashedPassword,
    rol,
    createdAt,
    updatedAt,
  });

  //const rawFormData = Object.fromEntries(formData.entries())

  try {
    await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
        isAdmin: rol,
        createdAt,
        updatedAt,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
