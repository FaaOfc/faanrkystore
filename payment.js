const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('rc');
const name = urlParams.get('nm') || 'Produk';
const subname = urlParams.get('snm') || '';
document.getElementById('productTitle').textContent = `${name} ${subname}`;

const priceMap = {
  'gi-bwm': [
    { type: "Blessing Welkin 1X", price: 60000 },
    { type: "Blessing Welkin 2X", price: 119000 },
    { type: "Blessing Welkin 3X", price: 178000 },
    { type: "Blessing Welkin 4X", price: 237000 },
    { type: "Blessing Welkin 5X", price: 296000 }
  ],
  'wdp': [
    { type: "1X WDP - 💎220", price: 28000 },
    { type: "2X WDP - 💎440", price: 55000 },
    { type: "3X WDP - 💎660", price: 82000 },
    { type: "4X WDP - 💎880", price: 109000 },
    { type: "5X WDP - 💎1100", price: 135000 },
    { type: "Twilight Pass", price: 145000 }
  ]
};

const promoCodes = {
  "FAANRKY10": {
    type: "percent",
    value: 10,
    expiry: "2025-06-30"
  },
  "FAAN5000": {
    type: "amount",
    value: 5000,
    expiry: "2025-07-15"
  }
};

const priceList = priceMap[code] || [];
const select = document.getElementById('typeSelect');
const hargaDisplay = document.getElementById('hargaDisplay');
const diskonDisplay = document.getElementById('diskonDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const promoInput = document.getElementById('promoInput');
const waBtn = document.getElementById('waBtn');

priceList.forEach(item => {
  const option = document.createElement('option');
  option.value = item.type;
  option.textContent = `${item.type} - Rp ${item.price.toLocaleString()}`;
  select.appendChild(option);
});

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

function updateDisplay() {
  const selectedType = select.value;
  const selectedPrice = priceList.find(p => p.type === selectedType)?.price || 0;
  const promoCode = promoInput.value.trim();

  const { discount, valid } = calculateDiscount(selectedPrice, promoCode);
  const finalPrice = Math.max(selectedPrice - discount, 0);

  hargaDisplay.textContent = `Harga: Rp ${selectedPrice.toLocaleString()}`;
  diskonDisplay.textContent = valid ? `Diskon: -Rp ${discount.toLocaleString()} (kode: ${promoCode})` : "";
  totalDisplay.textContent = valid ? `Total Bayar: Rp ${finalPrice.toLocaleString()}` : "";

  const message = `Halo,
Saya ingin membeli ${selectedType} ${name} ${subname}

Detail Pesanan:
*Nama Barang* = ${name} ${subname}
*Kategori/Jumlah Barang* = ${selectedType}
*Harga Awal* = Rp.${selectedPrice.toLocaleString()}
${valid ? `*Diskon (${promoCode})* = -Rp.${discount.toLocaleString()}` : ""}
*Total Bayar* = Rp.${finalPrice.toLocaleString()}`;

  waBtn.href = `https://api.whatsapp.com/send?phone=62895404774374&text=${encodeURIComponent(message)}`;
}

select.addEventListener('change', updateDisplay);
promoInput.addEventListener('input', updateDisplay);
updateDisplay();