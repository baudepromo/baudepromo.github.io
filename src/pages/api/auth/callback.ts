import type { APIRoute } from "astro";
import { serverAuth } from "../../../lib/firebase/server"; // Ajuste o caminho conforme necessário

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  // No Firebase, você geralmente recebe um 'idToken' enviado pelo cliente
  const idToken = url.searchParams.get("idToken");

  if (!idToken) {
    return new Response("No token provided", { status: 400 });
  }

  try {
    // Define o tempo de expiração (ex: 5 dias)
    const expiresIn = 60 * 60 * 24 * 5 * 1000; 

    // Cria o Session Cookie usando o Firebase Admin
    const sessionCookie = await serverAuth.createSessionCookie(idToken, { expiresIn });

    // Define o cookie de sessão
    cookies.set("session", sessionCookie, {
      path: "/",
      httpOnly: true, // Segurança: impede acesso via JS no cliente
      secure: true,
      sameSite: "strict",
      maxAge: expiresIn / 1000,
    });

    return redirect("/dashboard");
  } catch (error: any) {
    console.error("Firebase Auth Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};