import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const realtime = {
    activeUsers: Math.floor(Math.random() * 50) + 20,
    topPagesNow: [
      { page: '/', active: 8 },
      { page: '/produtos', active: 5 },
      { page: '/promocoes', active: 3 },
    ],
  };

  return new Response(JSON.stringify(realtime), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};