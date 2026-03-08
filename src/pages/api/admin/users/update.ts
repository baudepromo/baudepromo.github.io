import type { APIRoute } from 'astro';
import { serverAuth } from '../../../../lib/firebase/server';
import { getFirestore } from 'firebase-admin/firestore';

export const POST: APIRoute = async ({ request }) => {
  // Configuração padrão de headers para respostas JSON
  const jsonHeaders = { 'Content-Type': 'application/json' };

  try {
    // Tenta fazer o parse. Se falhar, o erro é pego pelo catch.
    const body = await request.json();
    const { id, updates } = body;

    if (!id || !updates) {
      return new Response(
        JSON.stringify({ error: 'ID ou dados (updates) ausentes no corpo da requisição' }), 
        { status: 400, headers: jsonHeaders }
      );
    }

    // 1. Atualizar campos básicos da autenticação
    const allowedFields = ['email', 'password', 'displayName', 'photoURL', 'disabled', 'emailVerified', 'phoneNumber'];
    const authUpdates: any = {};
    for (const field of allowedFields) {
      if (field in updates) authUpdates[field] = updates[field];
    }

    if (Object.keys(authUpdates).length > 0) {
      await serverAuth.updateUser(id, authUpdates);
    }

    // 2. Atualizar custom claims
    if ('role' in updates || 'admin' in updates) {
      // Nota: setCustomUserClaims SOBRESCREVE as claims atuais. 
      // Se quiser manter as antigas, você deve buscá-las antes e fazer um merge.
      const claims: any = {};
      if (updates.role) claims.role = updates.role;
      if (updates.admin !== undefined) claims.admin = updates.admin; // Permite boolean false
      
      await serverAuth.setCustomUserClaims(id, claims);
    }

    // 3. Atualizar documento no Firestore
    const extraData: any = {};
    if (updates.endereco) extraData.endereco = updates.endereco;
    if (updates.telefone) extraData.telefone = updates.telefone;
    
    if (Object.keys(extraData).length > 0) {
      const db = getFirestore();
      const userRef = db.collection('users').doc(id);
      await userRef.set(extraData, { merge: true });
    }

    return new Response(JSON.stringify({ success: true, uid: id }), { status: 200, headers: jsonHeaders });
    
  } catch (error: any) {
    // O console.error no servidor é o seu melhor amigo aqui
    console.error('🔥 Erro crítico ao atualizar usuário:', error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Erro interno do servidor' }), 
      { status: 500, headers: jsonHeaders }
    );
  }
};