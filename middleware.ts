import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/penyewa", request.url));
  }
}
