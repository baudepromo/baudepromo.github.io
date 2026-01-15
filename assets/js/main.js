document.addEventListener('DOMContentLoaded', () => {
  fetch('/assets/html/indexbase.html')
    .then(res => {
      if (!res.ok) throw new Error('Erro ao carregar footer');
      return res.text();
    })
    .then(html => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = html;
    })
    .catch(err => console.error(err));
});