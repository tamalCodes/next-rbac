import User from "@/models/User.js";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connect();

    const user = await User.findById(request.url.split("user/")[1]);
    return NextResponse.json({
      user,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}
