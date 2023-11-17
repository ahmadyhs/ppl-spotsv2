import { serialize } from "cookie";
import { AxiosError } from "axios";
import api from "../apiCalls/api";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  async function post() {
    try {
      const response = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return err.response?.data;
    }
  }

  const result = await post();

  if (!result?.accessToken) {
    return Response.json(result.message);
  } else {
    const serialized = serialize(process.env.TOKEN_NAME, result.accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 30,
      path: "/",
    });

    return new Response(result.message, {
      status: 200,
      headers: { "Set-Cookie": serialized },
    });
  }
}
