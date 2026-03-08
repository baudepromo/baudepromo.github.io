import type { APIRoute } from "astro";
import { serverAuth } from "../../../lib/firebase/server";

// No seu arquivo signin.ts
export const POST: APIRoute = async ({ request, cookies }) => {
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

  if (!idToken) {
    return new Response("Token não fornecido", { status: 401 });
  }

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await serverAuth.createSessionCookie(idToken, { expiresIn });

    cookies.set("session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: expiresIn / 1000, // Adicione o maxAge aqui também
    });

    // Em vez de redirect, retorne OK para o fetch do front-end
    return new Response(JSON.stringify({ message: "Sucesso" }), { status: 200 });
  } catch (error: any) {
    return new Response("Erro ao criar sessão: " + error.message, { status: 401 });
  }
};