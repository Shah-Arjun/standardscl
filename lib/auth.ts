import { SignJWT, jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)



// 🔐 Sign token
export async function signToken(payload: { email: string; role: string }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(SECRET)
}



// 🔍 Verify token
export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, SECRET)

  return payload as {
    email: string
    role: string
  }
}