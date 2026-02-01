// src/pages/og-image.png.ts
import { ImageResponse } from '@vercel/og';
import React from 'react';

export const prerender = false;

export const config = {
  runtime: 'edge',
};

export async function GET({ request }: { request: Request }) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Captura os dados enviados pelo SEO.astro
    const title = searchParams.get('title') ?? 'Baú de Promoção';
    const description = searchParams.get('description');

    // Corta descrições muito longas para não quebrar a imagem
    const shortDesc = description && description.length > 100 
      ? description.slice(0, 100) + '...' 
      : description;

    return new ImageResponse(
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column', // Importante para empilhar texto
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff)', // Um fundo mais bonito
            textAlign: 'center',
            padding: '40px 80px',
          },
        },
        [
          // Título
          React.createElement(
            'div',
            {
              style: {
                fontSize: 60,
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: 20,
                lineHeight: 1.2,
              },
            },
            title
          ),
          // Descrição (renderiza apenas se existir)
          shortDesc
            ? React.createElement(
                'div',
                {
                  style: {
                    fontSize: 30,
                    color: '#4a5568',
                    lineHeight: 1.4,
                  },
                },
                shortDesc
              )
            : null,
        ]
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Erro ao gerar imagem`, { status: 500 });
  }
}