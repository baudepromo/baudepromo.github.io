import type { APIRoute } from 'astro';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Inicializa o cliente do GA4 usando as variáveis de ambiente do Astro
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: import.meta.env.GOOGLE_CLIENT_EMAIL,
    // O .replace é crucial para o Node entender as quebras de linha da chave privada no .env
    private_key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
});

const propertyId = import.meta.env.GA_PROPERTY_ID;

export const GET: APIRoute = async () => {
  try {
    // 1. Busca KPIs Gerais e Comparativo (Últimos 30 dias vs 30 dias anteriores)
    const [kpiResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        { startDate: '30daysAgo', endDate: 'today' }, // range 0 (Atual)
        { startDate: '60daysAgo', endDate: '31daysAgo' } // range 1 (Anterior)
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'totalRevenue' },
        { name: 'sessionConversionRate' }
      ],
    });

    // 2. Busca Páginas Mais Acessadas (Últimos 30 dias)
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 5,
    });

    // 3. Busca Dados Diários para o Gráfico (Últimos 10 dias)
    const [dailyResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '9daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'date' }], // Formato YYYYMMDD
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }],
    });

    // --- PROCESSAMENTO DOS DADOS PARA O SEU FORMATO ---

    // Extraindo dados de KPI atuais e anteriores
    const currentKpis = kpiResponse.rows?.[0]?.metricValues || [];
    const previousKpis = kpiResponse.rows?.[1]?.metricValues || [];

    const getMetric = (arr: any[], index: number) => Number(arr[index]?.value || 0);
    
    // Função auxiliar para calcular tendência (%)
    const calcTrend = (current: number, previous: number) => {
      if (previous === 0) return "+100%";
      const diff = ((current - previous) / previous) * 100;
      return `${diff > 0 ? '+' : ''}${diff.toFixed(1)}%`;
    };

    // Montando Top Pages
    const topPages = pagesResponse.rows?.map(row => ({
      path: row.dimensionValues?.[0]?.value || '/',
      views: Number(row.metricValues?.[0]?.value || 0).toLocaleString('pt-BR')
    })) || [];

    // Montando Dados Diários
    const dailyData = dailyResponse.rows?.map(row => {
      const rawDate = row.dimensionValues?.[0]?.value || ""; // Ex: "20230415"
      const formattedDate = rawDate ? `${rawDate.substring(6, 8)}/${rawDate.substring(4, 6)}` : "";
      return {
        date: formattedDate,
        users: getMetric(row.metricValues || [], 0),
        sessions: getMetric(row.metricValues || [], 1),
      };
    }) || [];

    // Estrutura final que será retornada
    const data = {
      kpis: {
        activeUsers: getMetric(currentKpis, 0),
        sessions: getMetric(currentKpis, 1),
        revenue: getMetric(currentKpis, 2),
        conversionRate: getMetric(currentKpis, 3) * 100, // Multiplicar por 100 para percentual
        trends: {
          activeUsers: calcTrend(getMetric(currentKpis, 0), getMetric(previousKpis, 0)),
          sessions: calcTrend(getMetric(currentKpis, 1), getMetric(previousKpis, 1)),
          revenue: calcTrend(getMetric(currentKpis, 2), getMetric(previousKpis, 2)),
          conversionRate: calcTrend(getMetric(currentKpis, 3), getMetric(previousKpis, 3))
        }
      },
      comparative: [
        { 
          metric: "Sessões", 
          current: getMetric(currentKpis, 1).toLocaleString('pt-BR'), 
          previous: getMetric(previousKpis, 1).toLocaleString('pt-BR'), 
          trend: calcTrend(getMetric(currentKpis, 1), getMetric(previousKpis, 1)),
          class: getMetric(currentKpis, 1) >= getMetric(previousKpis, 1) ? "trend-up" : "trend-down"
        },
        { 
          metric: "Usuários", 
          current: getMetric(currentKpis, 0).toLocaleString('pt-BR'), 
          previous: getMetric(previousKpis, 0).toLocaleString('pt-BR'), 
          trend: calcTrend(getMetric(currentKpis, 0), getMetric(previousKpis, 0)),
          class: getMetric(currentKpis, 0) >= getMetric(previousKpis, 0) ? "trend-up" : "trend-down"
        },
        { 
          metric: "Receita", 
          current: `R$ ${getMetric(currentKpis, 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 
          previous: `R$ ${getMetric(previousKpis, 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 
          trend: calcTrend(getMetric(currentKpis, 2), getMetric(previousKpis, 2)),
          class: getMetric(currentKpis, 2) >= getMetric(previousKpis, 2) ? "trend-up" : "trend-down"
        }
      ],
      topPages,
      dailyData
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Erro ao buscar dados do GA4:", error);
    return new Response(JSON.stringify({ error: "Falha ao carregar dados do Analytics." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};