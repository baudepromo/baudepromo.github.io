// src/pages/api/og.ts
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge', // Importante para rodar na Edge da Vercel
};

export const GET = async ({ url }) => {
  // Pega o título dos parâmetros da URL
  const { searchParams } = new URL(url);
  const title = searchParams.get('title') || 'Baú de Promoção';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // Cor de fundo (ex: dark blue)
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '0 40px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            opacity: 0.8,
          }}
        >
          baudepromocao.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
};