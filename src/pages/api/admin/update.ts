// src/pages/api/admin/update.ts

import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, tabela, updates } = await request.json();

    if (!id || !tabela || !updates) {
      return new Response(
        JSON.stringify({ error: "Dados inválidos" }),
        { status: 400 }
      );
    }

    const supabaseAdmin = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error } = await supabaseAdmin
      .from(tabela)
      .update(updates)
      .eq("id", id);

    if (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ error: "Erro interno" }),
      { status: 500 }
    );
  }
};