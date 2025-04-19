const categoryDescriptions = {
  "Panel": "Panel Run Bot",
  "Jasa": "Jasa Yang Tersedia",
  "Topup": "Topup Game",
  "Instagram": "Suntik Instagram",
  "Tik Tok": "Suntik Tik Tok",
};

const categories = {
  "Panel": [
    { name: "Partner Panel", subname: "sub", price: 35000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n DAPET 23 SERVER (PUBLIK)\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA OPEN OWN\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Asisten Panel", subname: "sub", price: 30000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n DAPET 12 SERVER (PUBLIK)\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA OPEN OWN\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Owner Panel", subname: "sub", price: 20000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET OWN PANEL\n DAPET ADP\n BISA OPEN ADP\n BISA OPEN RESELLER\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Admin Panel", subname: "sub", price: 10000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET ADP\n BISA OPEN RESELLER\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Reseller Privat", subname: "sub", price: 7000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET RESELLER PANEL PRIVAT \n DAPET SC CPANEL\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Reseller Publik", subname: "sub", price: 5000, image: "20250325_070407.jpg", desc: "BENEFIT\n\n DAPET RESELLER PANEL PUBLIK\n DAPET SC CPANEL\n BISA JUAL PANEL\n\nSPEK? 16GB 4CORE" },
    { name: "Panel Privat", subname: "sub", price: 1000, image: "20250325_070407.jpg", desc: "LIST PANEL PRIV\n\n R1G D1G C40% : 2000\n R2G D2G C60% : 3000\n R3G D3G C80% : 4000\n R4G D4G C100% : 5000\n R5G D4G C120% : 6000\n R6G D6G C140% : 7000\n R7G D7G C160% : 8000\n R8G D7G C180% : 9000\n R∞G D∞G C∞% : 10000\n\nNOTE\nR = RAM\nD = DISK\nC = CPU\nG = GB\n\nCONTOH:\n R1GB D1G C40%\nRAM 1GB\nDISK 1GB\nCPU 40%\n\nBENEFIT\n\n ALWAYS ON\n GARANSI 10 HARI (1X)\n AMAN NO INTIP\n ADMIN CUMA 1\n NO ADP" },
    { name: "Panel Publik", subname: "sub", price: 500, image: "20250325_070407.jpg", desc: "LIST PANEL PUBLIK\n\n R1G D1G C40% : 1000\n R2G D2G C60% : 1500\n R3G D3G C80% : 2000\n R4G D4G C100% : 2500\n R5G D4G C120% : 3000\n R6G D6G C140% : 3500\n R7G D7G C160% : 4000\n R8G D7G C180% : 4500\n R∞G D∞G C∞% : 5000\n\nNOTE\nR = RAM\nD = DISK\nC = CPU\nG = GB\n\nCONTOH:\n R1GB D1G C40%\nRAM 1GB\nDISK 1GB\nCPU 40%\n\nBENEFIT\n\n ALWAYS ON\n GARANSI 10 HARI (1X)\n\nNOTE:\n RESIKO INTIP SERVER\n ADP LEBIH DARI 1\n GW JARANG CEK SERVER" }
  ],
  "Jasa": [
    { name: "Install Panel\nPterodactyl", subname: "sub", price: 10000, image: "20250325_070407.jpg", desc: "Desk" },
    { name: "Edit Script\nBot Wa", subname: "sub", price: 10000, image: "20250325_070407.jpg", desc: "Desk" },
    { name: "Edit Tampilan\nLinkBio", subname: "sub", price: 10000, image: "20250325_070407.jpg", desc: "Desk" }
  ],
  "Tik Tok": [
    { name: "Views", subname: "sub", price: 100, image: "20250325_070407.jpg", desc: "Rp 100/1k Views\nMinimum Order Rp 1.000" },
    { name: "Likes", subname: "sub", price: 2000, image: "20250325_070407.jpg", desc: "Rp 2.000/1k Likes" },
    { name: "Followers", subname: "sub", price: 7000, image: "20250325_070407.jpg", desc: "Rp. 10000/ 1k Followers" }
  ],
  "Instagram": [
    { name: "Views", subname: "sub", price: 50, image: "20250325_070407.jpg", desc: "Rp 50/1k Views\nMinimum Order Rp 1.000 " },
    { name: "Likes", subname: "sub", price: 1000, image: "20250325_070407.jpg", desc: "Rp 1.000/1k Likes" },
    { name: "Followers", subname: "sub", price: 14000, image: "20250325_070407.jpg", desc: "Rp 14.000/1k Followers" }
  ],
  "Topup": [
    { name: "Mobile Legend\nDiamomd", subname: "sub", price: 2000, image: "20250325_070407.jpg", desc: "💎5 = Rp. 2.000\n💎12 = Rp. 5.000\n💎19 = Rp. 8.000\n💎28 = Rp. 9.000\n💎44 = Rp. 17.000\n💎50 = Rp. 15.000\n💎59 = Rp. 19.000\n💎86 = Rp. 23.000\n💎113 = Rp. 28.000\n💎144 = Rp. 38.000\n💎170 = Rp. 45.000\n💎239 = Rp. 56.000\n💎240 = Rp. 63.000\n💎257 = Rp. 68.000\n💎278 = Rp. 73.000\n💎284 = Rp. 75.000\n💎298 = Rp. 77.000\n💎301 = Rp. 79.000\n💎346 = Rp. 91.000\n💎355 = Rp. 93.000\n💎374 = Rp. 98.000\n💎408 = Rp. 106.000\n💎427 = Rp. 109.000\n💎450 = Rp. 118.000\n💎512 = Rp. 130.000\n💎622 = Rp. 143.000\n💎648 = Rp. 147.000\n💎720 = Rp. 164.000\n💎717 = Rp. 181.000\n💎790 = Rp. 192.000\n💎875 = Rp. 220.000\n💎896 = Rp. 226.000\n💎977 = Rp. 248.000" },
    { name: "Mobile Legend\nMembership", subname: "sub", price: 28000, image: "20250325_070407.jpg", desc: "1X WDP - 💎220 = Rp. 28.000\n2X WDP - 💎440 = Rp. 55.000\n3X WDP - 💎660 = Rp. 82.000\n4X WDP - 💎880 = Rp. 109.000\n5X WDP - 💎1100 = Rp. 135.000\nTwilight Pass = Rp. 145.000" },
    { name: "Free Fire\nDiamond", subname: "sub", price: 2000, image: "20250325_070407.jpg", desc: "💎5 = Rp. 2.000\n💎10 = Rp. 3.000\n💎12 = Rp. 3.000\n💎50 = Rp. 8.000\n💎55 = Rp. 9.000\n💎70 = Rp. 9.000\n💎80 = Rp. 12.000\n💎100 = Rp. 14.000\n💎120 = Rp. 17.000\n💎130 = Rp. 18.000\n💎140 = Rp. 18.000\n💎145 = Rp. 19.000\n💎150 = Rp. 20.000\n💎190 = Rp. 25.000\n💎200 = Rp. 27.000\n💎210 = Rp. 27.000\n💎280 = Rp. 36.000\n💎355 = Rp. 45.000\n💎420 = Rp. 53.000\n💎500 = Rp. 63.000\n💎510 = Rp. 65.000\n💎565 = Rp. 71.000\n💎635 = Rp. 79.000\n💎720 = Rp. 86.000\n💎800 = Rp. 90.000\n💎860 = Rp. 91.000" },
    { name: "Free Fire\nMembership", subname: "sub", price: 16000, image: "20250325_070407.jpg", desc: "Level Up Pass = Rp. 16.000\nMingguan Membership = Rp. 30.000\nBulanan Membership = Rp. 89.000\nBP Card = Rp. 44.000" },
    { name: "Call Of Duty\nMobile", subname: "sub", price: 5000, image: "20250325_070407.jpg", desc: "31 🪙 = Rp 5.000\n63 🪙 = Rp 10.000\n128 🪙 = Rp 19.000\n321 🪙 = Rp 46.000\n645 🪙 = Rp 96.000\n800 🪙 = Rp 108.000\n1373 🪙 = Rp 179.000\n2060 🪙 = Rp 268.000\n3564 🪙 = Rp 446.000\n5618 🪙 = Rp 651.000\n5619 🪙 = Rp 696.000\n7656 🪙 = Rp 891.000\n15312 🪙 = Rp 1.736.000\n38280 🪙 = Rp. 4.339.000" },
    { name: "PUBG Mobile", subname: "sub", price: 1600, image: "20250325_070407.jpg", desc: "60 💴 = Rp 16.000\n300 + 25 💴 = Rp 72.000\n600 + 60 💴 = Rp 143.000\n1500 + 300 💴 = Rp 358.000\n3000 + 850 💴 = Rp 721.000\n6000 + 2100 💴 = Rp 1.428.000" },
    { name: "Genshin Impact\nGenesis Crystals", subname: "sub", price: 1200, image: "20250325_070407.jpg", desc: "💎60 = Rp 12.000\n💎300 + 30 = Rp 60.000\n💎980 + 110 = Rp 179.000\n💎1280 + 140 = Rp 237.000\n💎1980 + 260 = Rp 386.000\n💎3280 + 600 = Rp 593.000\n💎4260 + 710 = Rp 770.000\n💎6480 + 1600 = Rp 1.185.000\n💎9760 + 2200 = Rp 1.776.000" },
    { name: "Genshin Impact\nBlessing Welkin Moon", subname: "sub", price: 60000, image: "20250325_070407.jpg", desc: "1X Blessing Welkin Moon\n-Rp 60.000-\n2X Blessing Welkin Moon\n-Rp 119.000-\n3X Blessing Welkin Moon\n-Rp 178.000-\n4X Blessing Welkin Moon\n-Rp 237.000-\n5X Blessing Welkin Moon\n-Rp 296.000-" }
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
      <div class="title-group">
        <h3>${p.name}</h3>
        <h4>${p.subname}</h4>
      </div>
      <p>Rp${p.price.toLocaleString()}</p>
      <div class="desc" id="desc-${category}-${i}">${formattedDesc}</div>
      <div class="btn-group">
        <a class="btn" href="https://wa.me/62895404774374">Beli</a>
        <button class="btn" onclick="toggleDesc('${category}', ${i})">Lihat Deskripsi</button>
      </div>
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



  //  { name: "barang", price: 1000, image: "20250325_070407.jpg", desc: "Desk" },
 //   { name: "barang", price: 1000, image: "20250325_070407.jpg", desc: "Desk" },
 //   { name: "barang", price: 1000, image: "20250325_070407.jpg", desc: "Desk" },
//    { name: "barang", price: 1000, image: "20250325_070407.jpg", desc: "Desk" },
    
