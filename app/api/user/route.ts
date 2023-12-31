import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import jwt from "jsonwebtoken";
import User from "@/models/User";

export const GET = async (request: NextRequest) => {
  try {
    await connect();

    const token =
      request?.cookies?.get("token")?.value ||
      request.headers.get("Authorization")?.split(" ")[1];

    if (!token) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    const decoded: any = await new Promise((resolve, reject) => {
      jwt.verify(
        token,
        "askdhakdbasjhdbasjhdbjh32j23j423h4b2kuhg23i7udkqwj%%^",
        (err: any, decoded: any) => {
          if (err) {
            reject(err);
            console.log(err);
          } else {
            console.log(decoded);
            resolve(decoded);
          }
        }
      );
    });

    // Assuming User.findOne returns a Promise
    const user = await User.findOne({ email: decoded.User.id });

    if (!user) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    // Return the user information in the response
    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    } else {
      return new NextResponse(error.message || "Internal Server Error", {
        status: 500,
      });
    }
  }
};
