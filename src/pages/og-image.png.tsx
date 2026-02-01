import { ImageResponse } from '@vercel/og';

// O nome deve ser 'config', não 'Array' ou outra coisa
export const config = {
  runtime: 'edge',
};

export async function GET({ request }: { request: Request }) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') ?? 'Meu Site';

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {title}
        </div>
      ),1
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Falha ao gerar a imagem`, { status: 500 });
  }
}