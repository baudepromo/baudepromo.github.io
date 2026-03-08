import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js"; 

// Instancie o supabase com a chave SERVICE ROLE (nunca exponha essa chave no frontend!)
// Certifique-se de que ela está no seu arquivo .env
const supabaseAdmin = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY 
);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { id, tabela } = body;

  if (!id || !tabela) {
    return new Response(JSON.stringify({ error: "ID e Tabela são obrigatórios" }), { status: 400 });
  }

  // Use o supabaseAdmin aqui em vez do supabase padrão
  const { error } = await supabaseAdmin
    .from(tabela)
    .delete()
    .eq('id', Number(id)); // Veja o item 3 abaixo sobre a conversão

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "Sucesso" }), { status: 200 });
};