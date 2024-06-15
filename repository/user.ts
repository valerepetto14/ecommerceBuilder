import prisma from "@/lib/database";
import { Prisma } from "@prisma/client";

class UserRepositoy {
  async create(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data });
  }

  async findMany(attrs: Prisma.UserFindManyArgs) {
    return prisma.user.findMany(attrs);
  }

  async findOne(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return prisma.user.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}
