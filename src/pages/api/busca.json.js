// src/pages/api/busca.json.ts
// 1. Importamos a instância já configurada do Supabase
import { supabase } from "../../lib/supabase"; // Ajuste o caminho conforme sua estrutura de pastas

export const GET = async ({ url }) => {
    // 2. Pega os parâmetros da URL
    const termo = url.searchParams.get('q') || '';
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = 12; // PER_PAGE

    // 3. Calcula o intervalo (range) para o Supabase
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    try {
        // 4. Monta a Query no banco de dados
        // 'count: exact' serve para o Supabase nos dizer quantos produtos existem no total
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

        // 7. Retorna o JSON no formato esperado pelo frontend
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
        console.error("ERRO NO SERVIDOR:", error); 

        return new Response(JSON.stringify({ 
            error: "Erro interno no servidor",
            details: error.message 
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}