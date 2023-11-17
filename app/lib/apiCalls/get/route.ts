import { cookies } from "next/headers";

export async function GET() {
  const cookie = cookies();
  const token = cookie.get(process.env.TOKEN_NAME);

  console.log(token);
}
