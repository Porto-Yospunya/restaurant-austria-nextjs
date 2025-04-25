import { NextRequest, NextResponse } from "next/server";
import images from "@/database/image.test.json";

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ images }, { status: 200 });
}