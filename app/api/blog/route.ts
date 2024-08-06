import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBlog = await prisma.post.findMany();
  return NextResponse.json(allBlog);
}
