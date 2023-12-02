import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  if (!token) return NextResponse.redirect(new URL("/user/auth", request.url));
}

export const config = {
  matcher: "/user/edit-profile",
};
