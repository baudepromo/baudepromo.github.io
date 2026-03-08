import type { APIRoute } from 'astro';
import { serverAuth } from '../../../../lib/firebase/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID do usuário não fornecido' }), { status: 400 });
    }

    await serverAuth.deleteUser(id);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Erro ao excluir usuário:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};