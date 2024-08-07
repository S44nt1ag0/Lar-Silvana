function newTab(url) {
  window.open(url, '_blank');
}

function pix() {
  var content = document.getElementById('pix').innerHTML;
  navigator.clipboard.writeText(content).then(() => {
    Toastify({
      text: "Chave Pix Copiada!",
      style: {
        background: "green",
      },
      duration: 3000,
      }).showToast();
  })
}