import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"));

    console.log(id);

    const prisma = new PrismaClient();
    const result = await prisma.blog_list.findUnique({ where: { id: id }, include: { categories: true } });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
