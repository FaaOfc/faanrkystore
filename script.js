const categoryDescriptions = {
  "Panel": "Panel Run Bot",
  "Jasa": "Jasa Jasa",
  "Topup": "Topup Game"
};

const categories = {
  "Panel": [
    { name: "Tangan Kanan", price: 35000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n DAPET 23 SERVER (PUBLIK)\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA OPEN OWN\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Tangan Kiri", price: 30000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n DAPET 12 SERVER (PUBLIK)\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA OPEN OWN\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Owner", price: 20000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Admin Panel", price: 10000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET ADP\n BISA OPEN RESELLER\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Reseller Privat", price: 7000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET RESELLER PANEL PRIVAT \n DAPET SC CPANEL\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Reseller Publik", price: 5000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET RESELLER PANEL PUBLIK\n DAPET SC CPANEL\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Panel Privat", price: 1000, image: "20250325_070407.jpg", desc: "LIST PANEL PRIV\n\n R1G D1G C40% : 2000\n R2G D2G C60% : 3000\n R3G D3G C80% : 4000\n R4G D4G C100% : 5000\n R5G D4G C120% : 6000\n R6G D6G C140% : 7000\n R7G D7G C160% : 8000\n R8G D7G C180% : 9000\n R∞G D∞G C∞% : 10000\n\nNOTE\nR = RAM\nD = DISK\nC = CPU\nG = GB\n\nCONTOH:\n R1GB D1G C40%\nRAM 1GB\nDISK 1GB\nCPU 40%\n\nBENEFIT\n\n ALWAYS ON\n GARANSI 10 HARI (1X)\n AMAN NO INTIP\n ADMIN CUMA 1\n NO ADP" },
    { name: "Panel Publik", price: 500, image: "20250325_070407.jpg", desc: "LIST PANEL PUBLIK\n\n R1G D1G C40% : 1000\n R2G D2G C60% : 1500\n R3G D3G C80% : 2000\n R4G D4G C100% : 2500\n R5G D4G C120% : 3000\n R6G D6G C140% : 3500\n R7G D7G C160% : 4000\n R8G D7G C180% : 4500\n R∞G D∞G C∞% : 5000\n\nNOTE\nR = RAM\nD = DISK\nC = CPU\nG = GB\n\nCONTOH:\n R1GB D1G C40%\nRAM 1GB\nDISK 1GB\nCPU 40%\n\nBENEFIT\n\n ALWAYS ON\n GARANSI 10 HARI (1X)\n\nNOTE:\n RESIKO INTIP SERVER\n ADP LEBIH DARI 1\n GW JARANG CEK SERVER" }
  ],
  "Jasa": [
    { name: "Install Panel", price: 10000, image: "20250325_070407.jpg", desc: "Desk" },
    { name: "Edit Script", price: 10000, image: "20250325_070407.jpg", desc: "Desk" },
    { name: "Edit Tampilan LinkBio", price: 10000, image: "20250325_070407.jpg", desc: "Desk" }
  ],
  "Suntik Sosmed - Tik Tok": [
    { name: "Views", price: 100, image: "20250325_070407.jpg", desc: "Rp 100/1k Views\nMinimum Order Rp 1.000" },
    { name: "Likes", price: 2000, image: "20250325_070407.jpg", desc: "Rp 2.000/1k Likes" },
    { name: "Followers", price: 7000, image: "20250325_070407.jpg", desc: "Rp. 10000/ 1k Followers" }
  ],
  "Suntik Somed - Instagram": [
    { name: "Views", price: 50, image: "20250325_070407.jpg", desc: "Rp 50/1k Views\nMinimum Order Rp 1.000 " },
    { name: "Likes", price: 1000, image: "20250325_070407.jpg", desc: "Rp 1.000/1k Likes" },
    { name: "Followers", price: 14000, image: "20250325_070407.jpg", desc: "Rp 14.000/1k Followers" }
  ],
  "Topup": [
    { name: "Mobile Legend", price: 1000, image: "20250325_070407.jpg", desc: "Desk" },
    { name: "Free Fire", price: 1000, image: "20250325_070407.jpg", desc: "Desk" }
  ]
};

function renderProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  for (const category in categories) {
    const section = document.createElement("div");
    section.classList.add("category");

    section.innerHTML = `
      <h2>${category}</h2>
      <div class="category-desc">${categoryDescriptions[category] || ""}</div>
      <div class="nav-btns">
        <button onclick="scrollSlider('${category}', -1)">←</button>
        <button onclick="scrollSlider('${category}', 1)">→</button>
      </div>
      <div class="slider" id="${category}"></div>
    `;
    container.appendChild(section);

    const slider = section.querySelector(".slider");
    categories[category].forEach((p, i) => {
      const formattedDesc = p.desc.replace(/\n/g, "<br>");
      slider.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Rp${p.price.toLocaleString()}</p>
          <a class="btn" href="https://wa.me/62895404774374">Beli</a>
          <button class="btn" onclick="toggleDesc('${category}', ${i})">Lihat Deskripsi</button>
          <div class="desc" id="desc-${category}-${i}">${formattedDesc}</div>
        </div>
      `;
    });
  }
}

function toggleDesc(cat, index) {
  const el = document.getElementById(`desc-${cat}-${index}`);
  el.classList.toggle("show");
}

function scrollSlider(cat, dir) {
  const slider = document.getElementById(cat);
  slider.scrollLeft += dir * 220;
}

renderProducts();
