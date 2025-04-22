pasang ke func dibawah

function renderProducts() {
const container = document.getElementById("productContainer");
container.innerHTML = "";

for (const category in categories) {
const section = document.createElement("div");
section.classList.add("category");

section.innerHTML = `

  <h2>${category}</h2>  
  <div class="category-desc">${categoryDescriptions[category] || ""}</div>  
  <div class="slider" id="${category}"></div>  
`;  
    container.appendChild(section);  const slider = section.querySelector(".slider");  
categories[category].forEach((p, i) => {  
  const formattedDesc = p.desc.replace(/\n/g, "<br>");  
  slider.innerHTML += `  
    <div class="product">  
      <img src="${p.image}" alt="${p.name}">  
      <div class="title-group">  
        <h3>${p.name}</h3>  
        <h4>${p.subname}</h4>  
      </div>  
      <p>Rp. ${p.price.toLocaleString()}</p>  
      <div class="desc" id="desc-${category}-${i}">${formattedDesc}</div>  
      <div class="btn-group">  
        <a class="btn" href="https://api.whatsapp.com/send?phone=62895404774374&text=Halo,%20Saya%20Ingin%20Membeli%20${p.name}%20${p.subname}">Beli</a>  
        <button class="btn" onclick="toggleDesc('${category}', ${i})">Lihat Deskripsi</button>  
      </div>  
    </div>  
  `;  
});

}
}

function toggleDesc(cat, index) {
const el = document.getElementById(desc-${cat}-${index});
el.classList.toggle("show");
}

function scrollSlider(cat, dir) {
const slider = document.getElementById(cat);
slider.scrollLeft += dir * 220;
}

document.addEventListener("DOMContentLoaded", function () {
const qrisBox = document.getElementById("qrisBox");
const toggleBtn = document.getElementById("toggleQrisBtn");

toggleBtn.addEventListener("click", function () {
qrisBox.classList.toggle("show");
if (qrisBox.classList.contains("show")) {
toggleBtn.textContent = "Sembunyikan QRIS";
} else {
toggleBtn.textContent = "Tampilkan QRIS";
}
});
});

renderProducts()

