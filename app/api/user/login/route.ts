import User from "@/models/User.js";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { email, password } = await request.json();
    await connect();

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return new NextResponse("Email is not in use", { status: 400 });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return new NextResponse("Password is incorrect", { status: 400 });
    }

    return new NextResponse("user is logged in", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
