import { NextRequest, NextResponse } from "next/server";
import menu from "@/database/menu.test.json";

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ menu }, { status: 200 });
}