import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // Deletamos o cookie de sessão
  cookies.delete("session", { path: "/" });
  
  return redirect("/signin");
};