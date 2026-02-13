// src/pages/api/busca.json.ts
import { createClient } from '@supabase/supabase-js';

// 1. Inicializa o cliente do Supabase com as chaves do seu .env
const supabaseUrl = "https://xsdvzxggeuetqbmpvikw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZHZ6eGdnZXVldHFibXB2aWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0Nzg1MTgsImV4cCI6MjA4NjA1NDUxOH0.PnP3_oo67NwR1_tLeHyDI3a9bBUi8-ZQuIFWMpOQs60"
const supabase = createClient(supabaseUrl, supabaseKey);

export const GET = async ({ url }) => {
    // 2. Pega os parâmetros da URL
    const termo = url.searchParams.get('q') || '';
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = 12; // PER_PAGE

    // 3. Calcula o intervalo (range) para o Supabase
    // Diferente do slice(start, end), o Supabase usa inclusive (de 0 a 11 para pegar 12 itens)
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    try {
        // 4. Monta a Query no banco de dados
        // 'count: exact' serve para o Supabase nos dizer quantos produtos existem no total com esse filtro
        let query = supabase
            .from('achadinhos')
            .select('*', { count: 'exact' });

        // 5. Se houver termo de busca, aplicamos o filtro
        if (termo) {
            // 'ilike' busca o texto ignorando maiúsculas/minúsculas
            query = query.ilike('title', `%${termo}%`);
        }

        // 6. Executa a busca com ordenação e paginação
        const { data, error, count } = await query
            .order('id', { ascending: false }) // Exibe os mais recentes primeiro
            .range(from, to);

        if (error) throw error;

        const totalItems = count || 0;
        const totalPages = Math.ceil(totalItems / limit);
        


        // 7. Retorna o JSON no mesmo formato que o seu frontend já espera
        return new Response(JSON.stringify({
            data: data,
            meta: {
                total: totalItems,
                page: page,
                totalPages: totalPages,
                hasMore: page < totalPages
            }
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        // Isso vai imprimir o erro real no seu TERMINAL do VS Code
        console.error("ERRO NO SERVIDOR:", error); 

        return new Response(JSON.stringify({ 
            error: "Erro interno no servidor",
            details: error.message // Isso vai aparecer no navegador para te ajudar
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
} 