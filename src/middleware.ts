import { defineMiddleware } from "astro:middleware";
import { serverAuth } from "./lib/firebase/server";

// Substitua pelo UID real do console do Firebase
const ADMIN_UID = import.meta.env.FIREBASE_ADMIN_UID;

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;

  if (url.pathname.startsWith("/admin-ynSMHVmh/")) {
    const sessionCookie = cookies.get("session")?.value;

    if (!sessionCookie) {
      return redirect("/signin/");
    }

    try {
      // O decodedCookie já contém o UID (sub), não sendo necessário buscar o objeto 'user' completo
      // a menos que você precise de outras propriedades para o context.locals.
      const decodedCookie = await serverAuth.verifySessionCookie(sessionCookie);

      if (decodedCookie.uid !== ADMIN_UID) {
        console.warn(`Acesso negado para o UID: ${decodedCookie.uid}`);
        return redirect("/dashboard/");
      }

      // Opcional: Se ainda precisar dos dados completos do usuário no restante da aplicação
      const user = await serverAuth.getUser(decodedCookie.uid);
      context.locals.user = user;

    } catch (error) {
      console.error("Erro na verificação:", error);
      return redirect("/signin/");
    }
  }

  return next();
});