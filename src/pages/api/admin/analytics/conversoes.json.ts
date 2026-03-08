import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const goals = [
    { name: 'Cadastro', completions: 450, conversionRate: 3.2 },
    { name: 'Compra', completions: 210, conversionRate: 1.5 },
    { name: 'Assinatura Newsletter', completions: 780, conversionRate: 5.6 },
  ];

  const ecommerce = {
    revenue: 48750.9,
    transactions: 210,
    items: 345,
    averageOrderValue: 232.15,
  };

  return new Response(JSON.stringify({ goals, ecommerce }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};