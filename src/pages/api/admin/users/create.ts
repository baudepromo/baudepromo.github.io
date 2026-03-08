import type { APIRoute } from 'astro';
import { serverAuth } from '../../../../lib/firebase/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { data } = await request.json();
    if (!data) {
      return new Response(JSON.stringify({ error: 'Dados não fornecidos' }), { status: 400 });
    }

    const { email, password, ...rest } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email é obrigatório' }), { status: 400 });
    }
    if (!password) {
      return new Response(JSON.stringify({ error: 'Password é obrigatório' }), { status: 400 });
    }

    const userRecord = await serverAuth.createUser({
      email,
      password,
      ...rest,
    });

    return new Response(JSON.stringify({ success: true, uid: userRecord.uid }), { status: 200 });
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};