import Permission from "@/models/Permissions.js";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { ...data } = await request.json();
    await connect();

    const newPermission = new Permission({
      ...data,
    });

    await newPermission.save();

    return NextResponse.json({
      message: "Permission created successfully",
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}
