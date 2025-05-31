window.onload = function() {
  document.getElementById("loading-screen").style.display = "none";
};

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const url = `https://api.whatsapp.com/send?phone=6281234567890&text=Halo,%20saya%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
