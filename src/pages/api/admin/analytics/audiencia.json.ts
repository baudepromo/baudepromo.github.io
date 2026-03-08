import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const demographics = {
    age: [
      { range: '18-24', percentage: 22 },
      { range: '25-34', percentage: 38 },
      { range: '35-44', percentage: 24 },
      { range: '45-54', percentage: 12 },
      { range: '55+', percentage: 4 },
    ],
    gender: [
      { label: 'Masculino', percentage: 48 },
      { label: 'Feminino', percentage: 52 },
    ],
    countries: [
      { country: 'Brasil', visitors: 11200 },
      { country: 'Portugal', visitors: 2100 },
      { country: 'EUA', visitors: 980 },
      { country: 'Espanha', visitors: 430 },
    ],
  };

  return new Response(JSON.stringify(demographics), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};