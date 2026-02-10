import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const GET = async ({ url }) => {
    const termo = url.searchParams.get('q') || '';
    const categoria = url.searchParams.get('cat');
const categoriaValida = (categoria && categoria !== 'undefined') ? categoria : 'melhor';
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = 8;

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    try {
        let query = supabase
            .from('produtos') // Certifique- obstetricia que o nome da tabela está correto
            .select('*', { count: 'exact' });

        // Filtro de Busca por texto
        if (termo) {
            query = query.ilike('title', `%${termo}%`);
        }

        // NOVO: Filtro de Categoria
        if (categoriaValida !== 'melhor') {
    query = query.eq('category', categoriaValida);
}

        const { data, error, count } = await query
            .order('id', { ascending: false })
            .range(from, to);

        if (error) throw error;

        const totalPages = Math.ceil((count || 0) / limit);

        return new Response(JSON.stringify({
            data,
            meta: {
                total: count,
                page,
                totalPages,
                hasMore: page < totalPages
            }
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}