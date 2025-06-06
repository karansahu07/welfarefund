import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function GET(req: Request) {
  try {
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
