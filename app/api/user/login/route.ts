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
      return NextResponse.json({
        message: "User doesn't exist",
        status: 400,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json({
        message: "Invalid Credentials",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "Logged in successfully",
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
