import User from "@/models/User.js";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();

    const users = await User.find({});

    return NextResponse.json({
      users,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}
