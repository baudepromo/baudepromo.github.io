import type { APIRoute } from 'astro';
import { serverAuth } from '../../../lib/firebase/server'; // Ajuste o caminho conforme seu projeto

export const prerender = false; // Garante que rode no servidor (SSR)

// Rota para LISTAR usuários
export const GET: APIRoute = async () => {
  try {
    const listUsersResult = await serverAuth.listUsers(100);
    const users = listUsersResult.users.map(u => ({
      uid: u.uid,
      email: u.email,
      creationTime: u.metadata.creationTime,
      lastSignInTime: u.metadata.lastSignInTime,
    }));
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao listar usuários' }), { status: 500 });
  }
};

// Rota para DELETAR um usuário
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.uid) {
      return new Response(JSON.stringify({ error: 'UID não fornecido' }), { status: 400 });
    }
    await serverAuth.deleteUser(body.uid);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao deletar usuário' }), { status: 500 });
  }
};