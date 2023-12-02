import { NextResponse } from "next/server";
import connect from "@/utils/db";
import jwt from "jsonwebtoken";

export const GET = async (request: any) => {
  try {
    await connect();

    const token = request.headers.get("Authorization");

    if (!token) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    await new Promise((resolve, reject) => {
      jwt.verify(
        token.split(" ")[1],
        "askdhakdbasjhdbasjhdbjh32j23j423h4b2kuhg23i7udkqwj%%^",
        (err: any, decoded: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        }
      );
    });

    return new NextResponse("Authorized", {
      status: 200,
    });
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    } else {
      return new NextResponse(error, {
        status: 500,
      });
    }
  }
};
