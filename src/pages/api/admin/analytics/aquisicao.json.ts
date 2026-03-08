// src/pages/api/analytics/aquisicao.ts
import type { APIRoute } from 'astro';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

export const GET: APIRoute = async () => {
  try {
    // Inicializa o cliente do GA4 com as credenciais do .env
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
       client_email: import.meta.env.GOOGLE_CLIENT_EMAIL,
    // O .replace é crucial para o Node entender as quebras de linha da chave privada no .env
    private_key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
    });

    const propertyId = import.meta.env.GA_PROPERTY_ID;

    // Dispara múltiplas requisições simultaneamente para otimizar tempo
    const [
      sourceMediumResponse,
      campaignResponse,
      trendResponse,
      kpiResponse
    ] = await Promise.all([
      // 1. Distribuição por Origem/Mídia
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionSourceMedium' }],
        metrics: [{ name: 'sessions' }],
        limit: 10,
      }),
      // 2. Campanhas UTM
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionCampaignName' }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'conversions' },
          { name: 'totalRevenue' }
        ],
        limit: 15,
      }),
      // 3. Tendência de Tráfego por Canal (Linha do Tempo)
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'date' }, { name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }],
      }),
      // 4. Indicadores de Desempenho por Canal
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [
          { name: 'engagementRate' },
          { name: 'sessionConversionRate' },
          { name: 'advertiserAdCost' } // Requer integração com Google Ads ativa
        ],
      })
    ]);

    // Formatando os dados para facilitar o consumo no frontend
    const sourceMediumData = sourceMediumResponse[0].rows?.map(row => ({
      label: row.dimensionValues?.[0].value,
      value: parseInt(row.metricValues?.[0].value || '0')
    })) || [];

    const campaignsData = campaignResponse[0].rows?.map(row => ({
      campaign: row.dimensionValues?.[0].value,
      sessions: parseInt(row.metricValues?.[0].value || '0'),
      users: parseInt(row.metricValues?.[1].value || '0'),
      conversions: parseInt(row.metricValues?.[2].value || '0'),
      revenue: parseFloat(row.metricValues?.[3].value || '0').toFixed(2)
    })) || [];

    const kpiData = kpiResponse[0].rows?.map(row => ({
      channel: row.dimensionValues?.[0].value,
      engagementRate: (parseFloat(row.metricValues?.[0].value || '0') * 100).toFixed(2),
      conversionRate: (parseFloat(row.metricValues?.[1].value || '0') * 100).toFixed(2),
      adCost: parseFloat(row.metricValues?.[2].value || '0').toFixed(2)
    })) || [];

    // Agrupando dados de tendência por data e canal
    const trendsRaw = trendResponse[0].rows || [];
    const dates = [...new Set(trendsRaw.map(row => row.dimensionValues?.[0].value))].sort();
    const channels = [...new Set(trendsRaw.map(row => row.dimensionValues?.[1].value))];
    
    const datasets = channels.map(channel => {
      const data = dates.map(date => {
        const row = trendsRaw.find(r => r.dimensionValues?.[0].value === date && r.dimensionValues?.[1].value === channel);
        return row ? parseInt(row.metricValues?.[0].value || '0') : 0;
      });
      return { label: channel, data };
    });

    return new Response(JSON.stringify({
      sourceMedium: sourceMediumData,
      campaigns: campaignsData,
      kpis: kpiData,
      trends: { dates, datasets }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erro na API GA4:', error);
    return new Response(JSON.stringify({ error: 'Falha ao buscar dados de aquisição' }), { status: 500 });
  }
};