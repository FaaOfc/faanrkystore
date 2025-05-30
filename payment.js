const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('rc');
const name = urlParams.get('nm') || 'Produk';
const subname = urlParams.get('snm') || '';
document.getElementById('productTitle').textContent = `${name} ${subname}`;

const priceMap = {
    'ig-vi': [ // Instagram Views
      { type: "1000 Views", price: 1000 },
      { type: "2000 Views", price: 2000 },
      { type: "3000 Views", price: 3000 },
      { type: "4000 Views", price: 4000 },
      { type: "5000 Views", price: 5000 },
      { type: "6000 Views", price: 6000 },
      { type: "7000 Views", price: 7000 },
      { type: "8000 Views", price: 8000 },
      { type: "9000 Views", price: 9000 },
      { type: "10000 Views", price: 10000 }
    ],
    'ig-li': [ // Instagram Likes
      { type: "1000 Likes", price: 3000 },
      { type: "2000 Likes", price: 3000 },
      { type: "3000 Likes", price: 3000 },
      { type: "4000 Likes", price: 3000 },
      { type: "5000 Likes", price: 3000 },
      { type: "6000 Likes", price: 3000 },
      { type: "7000 Likes", price: 3000 },
      { type: "8000 Likes", price: 3000 },
      { type: "9000 Likes", price: 3000 },
      { type: "10000 Likes", price: 3000 }
    ],
    'ig-fo': [ // Instagram Followers
      { type: "1000 Followers", price: 5000 },
      { type: "2000 Followers", price: 5000 },
      { type: "3000 Followers", price: 5000 },
      { type: "4000 Followers", price: 5000 },
      { type: "5000 Followers", price: 5000 },
      { type: "6000 Followers", price: 5000 },
      { type: "7000 Followers", price: 5000 },
      { type: "8000 Followers", price: 5000 },
      { type: "9000 Followers", price: 5000 },
      { type: "10000 Followers", price: 5000 }
    ],
    'gi-bwm': [ // Blessing Welkin Moon
    { type: "Blessing Welkin 1X", price: 60000 },
    { type: "Blessing Welkin 2X", price: 119000 },
    { type: "Blessing Welkin 3X", price: 178000 },
    { type: "Blessing Welkin 4X", price: 237000 },
    { type: "Blessing Welkin 5X", price: 296000 }
  ],
  'wdp': [ // WDP
    { type: "1X WDP - 💎220", price: 28000 },
    { type: "2X WDP - 💎440", price: 55000 },
    { type: "3X WDP - 💎660", price: 82000 },
    { type: "4X WDP - 💎880", price: 109000 },
    { type: "5X WDP - 💎1100", price: 135000 },
    { type: "Twilight Pass", price: 145000 }
  ],
  'dm-ml': [ // Diamond Mobile Legends
    { type: "💎5", price: 2000 },
    { type: "💎12", price: 5000 },
    { type: "💎19", price: 8000 },
    { type: "💎28", price: 9000 },
    { type: "💎44", price: 17000 },
    { type: "💎50", price: 15000 },
    { type: "💎59", price: 19000 },
    { type: "💎86", price: 23000 },
    { type: "💎113", price: 28000 },
    { type: "💎144", price: 38000 },
    { type: "💎170", price: 45000 },
    { type: "💎239", price: 56000 },
    { type: "💎240", price: 63000 },
    { type: "💎257", price: 68000 },
    { type: "💎278", price: 73000 },
    { type: "💎284", price: 75000 },
    { type: "💎298", price: 77000 },
    { type: "💎301", price: 79000 },
    { type: "💎346", price: 91000 },
    { type: "💎355", price: 93000 },
    { type: "💎374", price: 98000 },
    { type: "💎408", price: 106000 },
    { type: "💎427", price: 109000 },
    { type: "💎450", price: 118000 },
    { type: "💎512", price: 130000 },
    { type: "💎622", price: 143000 },
    { type: "💎648", price: 147000 },
    { type: "💎720", price: 164000 },
    { type: "💎717", price: 181000 },
    { type: "💎790", price: 192000 },
    { type: "💎875", price: 220000 },
    { type: "💎896", price: 226000 },
    { type: "💎977", price: 248000 }
  ],
  'dm-ff': [ // Diamond Free Fire
    { type: "💎5", price: 2000 },
    { type: "💎10", price: 3000 },
    { type: "💎12", price: 3000 },
    { type: "💎50", price: 8000 },
    { type: "💎55", price: 9000 },
    { type: "💎70", price: 9000 },
    { type: "💎80", price: 12000 },
    { type: "💎100", price: 14000 },
    { type: "💎120", price: 17000 },
    { type: "💎130", price: 18000 },
    { type: "💎140", price: 18000 },
    { type: "💎145", price: 19000 },
    { type: "💎150", price: 20000 },
    { type: "💎190", price: 25000 },
    { type: "💎200", price: 27000 },
    { type: "💎210", price: 27000 },
    { type: "💎280", price: 36000 },
    { type: "💎355", price: 45000 },
    { type: "💎420", price: 53000 },
    { type: "💎500", price: 63000 },
    { type: "💎510", price: 65000 },
    { type: "💎565", price: 71000 },
    { type: "💎635", price: 79000 },
    { type: "💎720", price: 86000 },
    { type: "💎800", price: 90000 },
    { type: "💎860", price: 91000 }
  ],
  'cp': [ // Call of Duty Points
    { type: "31 🪙", price: 5000 },
    { type: "63 🪙", price: 10000 },
    { type: "128 🪙", price: 19000 },
    { type: "321 🪙", price: 46000 },
    { type: "645 🪙", price: 96000 },
    { type: "800 🪙", price: 108000 },
    { type: "1373 🪙", price: 179000 },
    { type: "2060 🪙", price: 268000 },
    { type: "3564 🪙", price: 446000 },
    { type: "5618 🪙", price: 651000 },
    { type: "5619 🪙", price: 696000 },
    { type: "7656 🪙", price: 891000 },
    { type: "15312 🪙", price: 1736000 },
    { type: "38280 🪙", price: 4339000 }
  ],
  'uc': [ // PUBG UC
    { type: "60 UC 💴", price: 16000 },
    { type: "300 + 25 UC 💴", price: 72000 },
    { type: "600 + 60 UC 💴", price: 143000 },
    { type: "1500 + 300 UC 💴", price: 358000 },
    { type: "3000 + 850 UC 💴", price: 721000 },
    { type: "6000 + 2100 UC 💴", price: 1428000 }
  ],
  'gi-gc': [ // Genshin Impact Genesis Crystals
    { type: "💎60", price: 12000 },
    { type: "💎300 + 30", price: 60000 },
    { type: "💎980 + 110", price: 179000 },
    { type: "💎1280 + 140", price: 237000 },
    { type: "💎1980 + 260", price: 386000 },
    { type: "💎3280 + 600", price: 593000 },
    { type: "💎4260 + 710", price: 770000 },
    { type: "💎6480 + 1600", price: 1185000 },
    { type: "💎9760 + 2200", price: 1776000 }
  ],
  'ff-ms': [ // Mobile Legends Membership & Pass
    { type: "Level Up Pass", price: 16000 },
    { type: "Mingguan Membership", price: 30000 },
    { type: "Bulanan Membership", price: 89000 },
    { type: "BP Card", price: 44000 }
   ],
    'pnl-priv': [ // Panel Private
  { type: "RAM 1GB", price: 2000 },
  { type: "RAM 2GB", price: 3000 },
  { type: "RAM 3GB", price: 4000 },
  { type: "RAM 4GB", price: 5000 },
  { type: "RAM 5GB", price: 6000 },
  { type: "RAM 6GB", price: 7000 },
  { type: "RAM 7GB", price: 8000 },
  { type: "RAM 8GB", price: 9000 },
  { type: "RAM ∞GB", price: 10000 }
],
'pnl-pub': [ // Panel Publik
  { type: "RAM 1GB", price: 1000 },
  { type: "RAM 2GB", price: 1500 },
  { type: "RAM 3GB", price: 2000 },
  { type: "RAM 4GB", price: 2500 },
  { type: "RAM 5GB", price: 3000 },
  { type: "RAM 6GB", price: 3500 },
  { type: "RAM 7GB", price: 4000 },
  { type: "RAM 8GB", price: 4500 },
  { type: "RAM ∞GB", price: 5000 }
],
  'vps': [ // Virtual Private Server
    { type: "4GB RAM 2 Core - Low", price: 20000 },
    { type: "8GB RAM 4 Core - Low", price: 25000 },
    { type: "16GB RAM 4 Core - Low", price: 30000 },
    { type: "4GB RAM 2 Core - High", price: 45000 },
    { type: "8GB RAM 4 Core - High", price: 65000 }
  ],
  'tgn-kanan': [
    { type: "30 Hari", price: 35000 },
    { type: "60 Hari", price: 70000 },
    { type: "90 Hari", price: 100000 }
  ],
  'tgn-kiri': [
    { type: "30 Hari", price: 30000 },
    { type: "60 Hari", price: 60000 },
    { type: "90 Hari", price: 90000 }
  ],
  'own-pnl': [
    { type: "30 Hari", price: 20000 },
    { type: "60 Hari", price: 40000 },
    { type: "90 Hari", price: 60000 }
  ],
  'sewabot': [
    { type: "15 hari", price: 5000 },
    { type: "30 Hari", price: 10000 },
    { type: "60 Hari", price: 15000 },
    { type: "90 Hari", price: 20000 },
    { type: "Permanen", price: 30000 }
  ],
  'adm-pnl': [
    { type: "30 Hari", price: 10000 },
    { type: "60 Hari", price: 20000 },
    { type: "90 Hari", price: 25000 }
  ],
  'ress-priv': [
    { type: "30 Hari", price: 7000 },
    { type: "60 Hari", price: 14000 },
    { type: "90 Hari", price: 20000 }
  ],
  'ress-pub': [
    { type: "30 Hari", price: 5000 },
    { type: "60 Hari", price: 10000 },
    { type: "90 Hari", price: 15000 }
  ]
  };
const promoCodes = {
  "FAA5K": {
    type: "amount",
    value: 5000,
    expiry: "2025-06-10"
  },
    "FAAN5": {
    type: "percent",
    value: 5,
    expiry: "2025-06-10"
  },
    "FAANRKY10": {
    type: "amount",
    value: 10000,
    expiry: "2025-06-10"
  },
  "THRHARIRAYA": {
    type: "amount",
    value: 30000,
    expiry: "2025-04-10"
  }
};

const priceList = priceMap[code] || [];
const select = document.getElementById('typeSelect');
const hargaDisplay = document.getElementById('hargaDisplay');
const diskonDisplay = document.getElementById('diskonDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const promoInput = document.getElementById('promoInput');
const waBtn = document.getElementById('waBtn');
const customInputs = document.getElementById('customInputs');

// Tampilkan semua opsi harga
priceList.forEach(item => {
  const option = document.createElement('option');
  option.value = item.type;
  option.textContent = `${item.type} - Rp ${item.price.toLocaleString()}`;
  select.appendChild(option);
});

// Fungsi input tambahan
function renderExtraInputs() {
  customInputs.innerHTML = '';

  if (code.startsWith("dm-ml") || code === "wdp") {
    customInputs.innerHTML = `
      <input type="text" id="inputID" placeholder="Masukkan ID Game" required>
      <input type="text" id="inputServer" placeholder="Masukkan ID Server" required>
    `;
  } else if (code === "cp") {
    customInputs.innerHTML = `
      <input type="text" id="inputID" placeholder="Masukkan ID Game" required>
    `;
  } else if (code === "sewabot") {
    customInputs.innerHTML = `
      <input type="text" id="inputURL" placeholder="Masukkan URL Grup" required>
    `;
  }
}

// Fungsi diskon
function calculateDiscount(price, code) {
  const promo = promoCodes[code.toUpperCase()];
  if (!promo) return { discount: 0, valid: false };

  const now = new Date();
  const expiry = new Date(promo.expiry);
  if (now > expiry) return { discount: 0, valid: false };

  let discount = 0;
  if (promo.type === "percent") {
    discount = Math.floor(price * (promo.value / 100));
  } else if (promo.type === "amount") {
    discount = promo.value;
  }
  return { discount, valid: true };
}

// Fungsi utama
function updateDisplay() {
  const selectedType = select.value;
  const selectedPrice = priceList.find(p => p.type === selectedType)?.price || 0;
  const promoCode = promoInput.value.trim();

  const { discount, valid } = calculateDiscount(selectedPrice, promoCode);
  const finalPrice = Math.max(selectedPrice - discount, 0);

  hargaDisplay.textContent = `Harga: Rp ${selectedPrice.toLocaleString()}`;
  diskonDisplay.textContent = valid ? `Diskon: -Rp ${discount.toLocaleString()} (kode: ${promoCode})` : "";
  totalDisplay.textContent = `Total Bayar: Rp ${finalPrice.toLocaleString()}`;

  // Ambil input tambahan
  let extraDetail = "";
  const inputID = document.getElementById('inputID');
  const inputServer = document.getElementById('inputServer');
  const inputURL = document.getElementById('inputURL');

  if (inputID) extraDetail += `ID Game = ${inputID.value}\n`;
  if (inputServer) extraDetail += `Server = ${inputServer.value}\n`;
  if (inputURL) extraDetail += `URL Sosmed = ${inputURL.value}\n`;

  const message = `Halo, Saya ingin membeli ${selectedType} ${name} ${subname}

Detail Pesanan:
Nama Barang = ${name} ${subname}
Kategori/Jumlah Barang = ${selectedType}

${extraDetail}

Harga Awal = Rp.${selectedPrice.toLocaleString()}
${valid ? `*Diskon (${promoCode})* = -Rp.${discount.toLocaleString()}\n` : ""}Total Bayar = Rp.${finalPrice.toLocaleString()}

> Harga Sudah Termasuk Biaya Admin`;

  waBtn.href = `https://api.whatsapp.com/send?phone=62895404774374&text=${encodeURIComponent(message)}`;
}

// Event listeners
select.addEventListener('change', updateDisplay);
promoInput.addEventListener('input', updateDisplay);

// Hanya dengarkan input tambahan, bukan semua input di seluruh dokumen
document.addEventListener('input', (e) => {
  if (["inputID", "inputServer", "inputURL"].includes(e.target.id)) {
    updateDisplay();
  }
});

// Jalankan hanya sekali saat load
renderExtraInputs();
updateDisplay();
