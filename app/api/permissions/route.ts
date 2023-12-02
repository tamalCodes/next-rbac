import Permission from "@/models/Permissions.js";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connect();

    // fetch the permission based on the role

    const role = request.nextUrl.searchParams.get("role");
    const perms = await Permission.find({ roles: { $in: [role] } });

    return NextResponse.json({
      perms,
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}
