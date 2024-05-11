import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.socials.findUnique({ where: { id: 1 } });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
