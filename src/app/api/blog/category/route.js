import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.blog_list.findMany({ where: { cat_id: categoryId }, select: { id: true, title: true, short_description: true, image_1: true, image_2: true, image_3: true } });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
