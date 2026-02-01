// src/pages/og-image.png.ts
import { ImageResponse } from '@vercel/og';
import React from 'react';

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') ?? '';
  const externalImage = searchParams.get('externalImage');

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row', // Lado a lado
          padding: '40px',
        },
      },
      [
        // Se houver imagem externa, renderiza ela à esquerda
        externalImage && React.createElement('img', {
          src: externalImage,
          style: {
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '20px',
            marginRight: '40px',
          },
        }),
        // Texto à direita
        React.createElement('div', {
          style: { display: 'flex', flexDirection: 'column', flex: 1 },
        }, [
          React.createElement('h1', { style: { fontSize: '60px' } }, title)
        ])
      ]
    ),
    { width: 1200, height: 630 }
  );
}