document.getElementById('search-bar').addEventListener('input', function() {
  const inputText = this.value.toLowerCase();
  const listaItems = document.querySelectorAll('#lista li');

  listaItems.forEach(function(item) {
      const cidade = item.getAttribute('data-cidade').toLowerCase();
      const pais = item.getAttribute('data-pais').toLowerCase();
      const continente = item.getAttribute('data-continente').toLowerCase();
      const local = item.getAttribute('data-local').toLowerCase();

      if (cidade.includes(inputText) || pais.includes(inputText) || continente.includes(inputText) || local.includes(inputText)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
});