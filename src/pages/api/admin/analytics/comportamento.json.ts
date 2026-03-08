import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const topPages = [
    { page: '/', pageviews: 12500, avgTime: 120, exits: 3200 },
    { page: '/produtos', pageviews: 8700, avgTime: 210, exits: 1800 },
    { page: '/contato', pageviews: 4300, avgTime: 95, exits: 2100 },
    { page: '/blog/como-usar', pageviews: 3200, avgTime: 300, exits: 700 },
    { page: '/sobre', pageviews: 2100, avgTime: 140, exits: 600 },
  ];

  return new Response(JSON.stringify({ topPages }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};