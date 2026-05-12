/* ============================================================
   Font – Kem Đoàn | script.js
============================================================ */

const allFonts = [
  { name: 'Trọn bộ Font KD',    tag: '',             cat: '',         type: 'traphi',   price: '300k',    img: 'images/50fontkd.jpg',        link: 'http://zalo.me/0559970246' },
  { name: 'KD Font Finder',     tag: '',             cat: '',         type: 'traphi',   price: 'Ứng dụng tìm font',     img: 'images/kdfontfinder.jpg',        link: 'http://zalo.me/0559970246' },
  { name: 'KD Netsera',         tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50k',    img: 'images/kdnetsera.jpg',       link: '1jQ1DJy1rLwAXuCofr48pJ5Fhc9besEj8' },
  { name: 'KD Goken',           tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdgoken.jpg',         link: '#' },
  { name: 'KD Boxroom',         tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdboxroom.jpg',       link: '#' },
  { name: 'KD Sulee',           tag: 'Font Chữ Ký',  cat: 'chuky',    type: 'traphi',   price: '50k',     img: 'images/kdsulee.jpg',         link: '#' },
  { name: 'KD Hongkong',        tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '90k / 3 Style',    img: 'images/kdhongkong.jpg',      link: '#' },
  { name: 'KD Valery',          tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdvalery.jpg',             link: '#' },
  { name: 'KD Lemaire',         tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50',      img: 'images/kdlemaire.jpg',       link: '#' },
  { name: 'KD Kaelyna Script',   tag: 'Font Cưới',    cat: 'cuoi',     type: 'mienphi', price: '',     img: 'images/kdkaelynascript.jpg', link: 'http://zalo.me/0559970246' },
  { name: 'KD Huees',           tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdhuees.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Kem Doan',        tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdkemdoan.jpg',       link: '#' },
  { name: 'KD Doan Nguyen',     tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '70k / Reg & Bold', img: 'images/kddoannguyen.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Handscript',      tag: 'Font Viết Tay',     cat: 'viettay',    type: 'traphi', price: '300k',     img: 'images/kdhandscript.jpg',       link: '#' },
  { name: 'KD Handwritten',     tag: 'Font Viết Tay', cat: 'viettay', type: 'traphi',   price: 'Liên hệ',       img: 'images/kdhandwritten.jpg',      link: '#' },
  { name: 'KD Wedding Dress',   tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdweddingdress.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Withlove',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdwithlove.jpg',           link: '#' },
  { name: 'KD Hidayatullah',    tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdhidayatullah.jpg',       link: '#' },
  { name: 'KD Against',         tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdagainst.jpg',            link: '#' },
  { name: 'KD Agilera',         tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdagilera.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Moon Light',      tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdmoonlight.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Type Ultimate',   tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdtypeultimate.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Arturo',          tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: 'aa',      img: 'images/kdarturo.jpg',             link: '#' },
  { name: 'KD Broisther',       tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50k',     img: 'images/kdbroisther.jpg',     link: 'http://zalo.me/0559970246' },
  { name: 'KD Aureligena Script',tag: 'Font Cưới',    cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdaureligenascript.jpg',   link: 'http://zalo.me/0559970246' },
  { name: 'KD Bailey',          tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdbailey.jpg',             link: 'http://zalo.me/0559970246' },
  { name: 'KD Bakar',           tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdbakar.jpg',              link: '#' },
  { name: 'KA Adidas Pro',      tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdadidaspro.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Cardecal',        tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdcardecal.jpg',           link: '#' },
  { name: 'KD Causten',         tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdcausten.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Chatoyer',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdchatoyer.jpg',           link: '#' },
  { name: 'KD Midautumn',       tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdmidautumn.jpg',          link: '#' },
  { name: 'KD Cute Tattoo Girl', tag: 'Font Khác',    cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdcutetattoogirl.jpg',     link: 'http://zalo.me/0559970246' },
  { name: 'KD Estarossa',       tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdestarossa.jpg',          link: '#' },
  { name: 'KD Dallen Bishop',   tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdfallenbishop.jpg',       link: '#' },
  { name: 'KD Fashionwacks',    tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdfashionwacks.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Fit',             tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdfit.jpg',                link: '#' },
  { name: 'KD Flourshing',      tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdflourshing.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Gold Queen',      tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdgoldqueen.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Goodrace',        tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdgoodrace.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Hangout',         tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdhangout.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Holyriver',       tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdholyriver.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Lordish',         tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdlordish.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Love Lost',       tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdlovelost.jpg',           link: '#' },
  { name: 'KD Luxhouse',        tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdluxhouse.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Quinzmom',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdquinzmom.jpg',           link: '#' },
  { name: 'KD Quynh',           tag: 'Font CƯới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdquynh.jpg',              link: '#' },
  { name: 'KD Siren',           tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdsiren.jpg',              link: 'http://zalo.me/0559970246' },
  { name: 'KD Suorva',          tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdsuorva.jpg',             link: 'http://zalo.me/0559970246' },
  { name: 'KD Tan Headline',    tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdtanheadline.jpg',        link: '#' },
  { name: 'KD The Blanger',     tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdtheblanger.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Vince Display',   tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdvincedisplay.jpg',       link: '#' },
  { name: 'KD Yon Love',        tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdyonlove.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Zoika',           tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdzoika.jpg',              link: '#' },
  // Thêm font tiếp theo vào đây...
];

const iconCart = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
</svg>`;

const iconDl = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7 10 12 15 17 10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`;

const PAGE_SIZE = 24;
let currentCat = 'all';
let filtered = [];
let shown = 0;

/* --- Search --- */
function onSearch() {
  const val = document.getElementById('searchInput').value;
  document.getElementById('clearBtn').classList.toggle('visible', val.length > 0);
  runFilter();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearBtn').classList.remove('visible');
  runFilter();
}

/* --- Filter chips --- */
function setChip(el, cat) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentCat = cat;
  runFilter();
}

/* --- Run filter + reset pagination --- */
function runFilter() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();

  filtered = allFonts.filter(f => {
    let catOk;
    if (currentCat === 'all') {
      catOk = true;
    } else if (currentCat === 'traphi' || currentCat === 'mienphi') {
      catOk = f.type === currentCat;
    } else {
      catOk = f.cat === currentCat;
    }
    const searchOk = !q || f.name.toLowerCase().includes(q) || f.tag.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  shown = 0;
  document.getElementById('grid').innerHTML = '';
  appendCards();
  document.getElementById('countLabel').textContent = filtered.length + ' font';
}

/* --- Build card HTML --- */
function cardHTML(f) {
  const isFree = f.type === 'mienphi';
  
  // Tự động ghép link Drive nếu link là ID thuần (không phải URL)
  const resolvedLink = (f.link && f.link !== '#' && !f.link.startsWith('http'))
    ? `https://drive.google.com/uc?export=download&id=${f.link}`
    : f.link;

  const priceHTML = isFree
    ? `<span class="price free">Miễn phí</span>`
    : `<span class="price">${f.price}</span>`;
  const btnHTML = isFree
    ? `<button class="action-btn dl" onclick="window.open('${resolvedLink}','_blank')">${iconDl} Tải về</button>`
    : `<button class="action-btn buy" onclick="window.open('${resolvedLink}','_blank')">${iconCart} Mua</button>`;

  return `
    <div class="card">
      <div class="preview-box">
        <img src="${f.img}" alt="${f.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="placeholder" style="display:none">${f.name}</div>
      </div>
      <div>
        <div class="card-name">${f.name}</div>
        <div class="card-tag">${f.tag}</div>
      </div>
      <div class="card-footer">${priceHTML}${btnHTML}</div>
    </div>`;
}

/* --- Append next page of cards --- */
function appendCards() {
  const g    = document.getElementById('grid');
  const wrap = document.getElementById('loadMoreWrap');
  const btn  = document.getElementById('loadMoreBtn');

  if (filtered.length === 0) {
    g.innerHTML = '<div class="empty">Không tìm thấy font</div>';
    wrap.style.display = 'none';
    return;
  }

  const batch = filtered.slice(shown, shown + PAGE_SIZE);
  batch.forEach(f => g.insertAdjacentHTML('beforeend', cardHTML(f)));
  shown = Math.min(shown + PAGE_SIZE, filtered.length);

  const remaining = filtered.length - shown;
  if (remaining > 0) {
    wrap.style.display = 'flex';
    btn.disabled = false;
    btn.textContent = `Xem tiếp (còn ${remaining} font)`;
  } else {
    wrap.style.display = shown > PAGE_SIZE ? 'flex' : 'none';
    btn.disabled = true;
    btn.textContent = 'Đã hiển thị tất cả';
  }
}

function loadMore() {
  appendCards();
}

/* --- Init --- */
runFilter();

// BACK TO TOP
const backToTopBtn = document.querySelector('.backtotop-btn');

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

