import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const tech = {
    browsers: [
      { name: 'Chrome', percentage: 62 },
      { name: 'Safari', percentage: 21 },
      { name: 'Firefox', percentage: 9 },
      { name: 'Edge', percentage: 5 },
      { name: 'Outros', percentage: 3 },
    ],
    devices: [
      { type: 'Desktop', percentage: 45 },
      { type: 'Mobile', percentage: 48 },
      { type: 'Tablet', percentage: 7 },
    ],
    os: [
      { name: 'Windows', percentage: 38 },
      { name: 'macOS', percentage: 18 },
      { name: 'iOS', percentage: 22 },
      { name: 'Android', percentage: 20 },
      { name: 'Linux', percentage: 2 },
    ],
  };

  return new Response(JSON.stringify(tech), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};