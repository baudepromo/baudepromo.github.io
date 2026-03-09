import type { APIRoute } from "astro";
import { serverAuth } from "../../../lib/firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString(); // <-- 1. Pegue o nome
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email e senha são obrigatórios", { status: 400 });
  }

  try {
    // 2. Envie o displayName para o Firebase
    await serverAuth.createUser({
      email,
      password,
      displayName: name || "Usuário", // Salva o nome ou um fallback
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin/");
};