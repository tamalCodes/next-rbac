import User from "@/models/User.js";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { email, ...data } = await request.json();
    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      ...data,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}
