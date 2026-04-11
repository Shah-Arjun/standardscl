import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "./lib/auth"


export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  try {
    const decoded = await verifyToken(token)

    if (decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/admin/:path*"],
}