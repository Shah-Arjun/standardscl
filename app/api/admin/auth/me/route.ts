// api route to check if the user authenticate or not

import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"



export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value
   
    // console.log("token----->", token)

    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 })
    }


    // console.log(token)

    const decoded = await verifyToken(token)

    // console.log("user", decoded)

    return NextResponse.json({ user: decoded }, { status: 200 })
  } catch {
    return NextResponse.json({ user: null }, { status: 401 })
  }
}