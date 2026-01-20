import { c as createComponent, e as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../chunks/MainLayout_Cxp42-Ip.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/variables.css"> <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/layout.css"> <link rel="stylesheet" href="/styles/pages/politica-de-privacidade.css"> ${maybeRenderHead()}<div class="hero-section"> <h1>Política de Privacidade <i class="fa-solid fa-shield-halved"></i></h1> <p>Última atualização: Janeiro de 2026</p> </div> <div class="main-content"> <div class="policy-card"> <p>No <strong>Baú de Promoções</strong>, a sua privacidade é nossa prioridade. Esta política explica de forma transparente como lidamos com as suas informações ao utilizar nosso site.</p> <h2>1. Coleta de Informações</h2> <p>Coletamos apenas informações básicas necessárias para melhorar sua experiência:</p> <ul> <li><strong>Dados de Conta:</strong> Nome e e-mail quando você se cadastra via formulário ou Google Login (através do Firebase).</li> <li><strong>Cookies:</strong> Utilizamos cookies para entender como você navega e para lembrar suas preferências de login, garantindo que você não precise logar toda vez.</li> <li><strong>Logs:</strong> Registros técnicos automáticos padrão da web, como endereço IP e tipo de navegador.</li> </ul> <h2>2. Uso de Links de Afiliados</h2> <p>O Baú de Promoções participa de programas de afiliados (como Amazon, Shopee e AliExpress). Isso significa que:</p> <ul> <li>Ao clicar em um link e realizar uma compra, podemos receber uma pequena comissão.</li> <li>Isso <strong>não aumenta o preço</strong> do produto para você (o preço é o mesmo).</li> <li>Não temos acesso aos seus dados de pagamento nas lojas externas; a transação ocorre inteiramente nos sistemas seguros da Shopee, Amazon, etc.</li> </ul> <h2>3. Segurança dos Dados</h2> <p>Utilizamos o <strong>Firebase (Google)</strong> para gerenciar a autenticação e o banco de dados. Seus dados são protegidos por protocolos de segurança de alto nível da infraestrutura do Google. Nunca venderemos seus dados para terceiros.</p> <h2>4. Serviços de Terceiros</h2> <p>Para o funcionamento do site, utilizamos:</p> <ul> <li><strong>Firebase:</strong> Para sistema de login e salvamento de favoritos.</li> <li><strong>Google Analytics:</strong> Para métricas de visitas (dados anônimos).</li> <li><strong>Cloudflare/GitHub Pages:</strong> Para hospedagem rápida e segurança de tráfego.</li> <li><strong>Formsubmit:</strong> Para gerenciar o envio de mensagens de contato.</li> <li><strong>Astro:</strong> Para a organização do projeto.</li> </ul> <h2>5. Seus Direitos</h2> <p>Você está no controle. Pode, a qualquer momento, solicitar a exclusão da sua conta e de seus dados pessoais armazenados em nosso banco de dados. Basta entrar em contato pelo e-mail: <strong>baudepromocao@gmail.com</strong>.</p> <h2>6. Alterações nesta Política</h2> <p>Podemos atualizar esta política ocasionalmente para refletir melhorias no site. Recomendamos que você visite esta página regularmente para se manter informado.</p> <div style="text-align: center;"> <a href="/" class="pill-btn btn-back-footer"> <i class="fa-solid fa-arrow-left"></i> Voltar para o Início
</a> </div> </div> </div> ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/politica-de-privacidade/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/politica-de-privacidade/index.astro";
const $$url = "/politica-de-privacidade";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
