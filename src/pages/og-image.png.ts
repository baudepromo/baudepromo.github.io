// src/pages/og-image.png.ts
import { ImageResponse } from '@vercel/og';
import React from 'react';

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') ?? 'Título Padrão';
  const externalImage = searchParams.get('externalImage');

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a', // Cor de fundo caso a imagem falhe
          position: 'relative', // Necessário para posicionar a imagem de fundo
        },
      },
      [
        // 1. A Imagem de Fundo (Se existir)
        externalImage && React.createElement('img', {
          src: '/og/ogmain.png',
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2, // Fica no fundo
          },
        }),

        // 2. O Overlay (Camada escura para dar leitura ao texto)
        // Se tiver imagem, usamos um preto transparente. Se não, um gradiente bonito.
        React.createElement('div', {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: externalImage ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
            backgroundImage: externalImage ? 'none' : 'linear-gradient(to bottom right, #1e293b, #0f172a)',
            zIndex: 1, // Fica acima da imagem, abaixo do texto
          },
        }),

        // 3. O Conteúdo de Texto
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2, // Fica no topo de tudo
            padding: '40px',
            textAlign: 'center',
          },
        }, [
          // Título
          React.createElement('h1', {
            style: {
              fontSize: '70px',
              fontWeight: 900,
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '0 4px 10px rgba(0,0,0,0.5)', // Sombra para destacar
              letterSpacing: '-0.02em',
              fontFamily: 'sans-serif',
            }
          }, title),

          // Subtítulo ou Decoração (Opcional - ex: nome do site)
          React.createElement('span', {
            style: {
              fontSize: '24px',
              color: '#cbd5e1', // Um cinza claro
              marginTop: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'sans-serif',
            }
          }, 'Confira este artigo')
        ])
      ]
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}