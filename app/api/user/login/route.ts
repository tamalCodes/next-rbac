import User from "@/models/User.js";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (request: any) => {
  try {
    const { email, password } = await request.json();
    await connect();

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return new NextResponse("User doesn't exist", {
        status: 401,
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

    const payload = { User: { id: existingUser.email } };
    const token = jwt.sign(
      payload,
      "askdhakdbasjhdbasjhdbjh32j23j423h4b2kuhg23i7udkqwj%%^"
    );

    return NextResponse.json({
      token,
      user: { email: existingUser.email },
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
