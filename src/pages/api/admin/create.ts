// src/pages/api/admin/create.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Cria um cliente Supabase com a Service Role Key (Bypassa o RLS)
const supabaseAdmin = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { tabela, data } = body;  

    // Garante que o ID e campos de data do sistema não entrem no insert
    const { id, created_at, updated_at, ...dadosParaInserir } = data;

    console.log("Inserindo em:", tabela, "Dados:", dadosParaInserir);

    const { data: insertedData, error } = await supabaseAdmin
      .from(tabela)
      .insert([dadosParaInserir]) // Use o objeto limpo aqui
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data: insertedData }), { status: 201 });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};