/* ============================================================
   Font – Kem Đoàn | script.js
============================================================ */

const allFonts = [
  { name: 'Trọn bộ Font KD',    tag: '',             cat: '',         type: 'traphi',   price: '300k',    img: 'images/50fontkd.jpg',        link: 'http://zalo.me/0559970246' },
  { name: 'KD Netsera',         tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50k',     img: 'images/kdnetsera.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Goken',           tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdgoken.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Boxroom',         tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdboxroom.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Sulee',           tag: 'Font Chữ Ký',  cat: 'chuky',    type: 'traphi',   price: '50k',     img: 'images/kdsulee.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Hongkong',        tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '90k / 3 Style',    img: 'images/kdhongkong.jpg',      link: 'http://zalo.me/0559970246' },
  { name: 'KD Valery',          tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdvalery.jpg',             link: 'http://zalo.me/0559970246' },
  { name: 'KD Lemaire',         tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50',      img: 'images/kdlemaire.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Kaelyna Script',   tag: 'Font Cưới',    cat: 'cuoi',     type: 'mienphi', price: '',        img: 'images/kdkaelynascript.jpg', link: '1OG0Aq95FJM4gxVVzO37Tw7-aPOugEpbl' },
  { name: 'KD Huees',           tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdhuees.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Kem Doan',        tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '50k',     img: 'images/kdkemdoan.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Doan Nguyen',     tag: 'Font Khác',    cat: 'khac',     type: 'traphi',   price: '70k / Reg & Bold', img: 'images/kddoannguyen.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Handscript',      tag: 'Font Viết Tay',     cat: 'viettay',    type: 'traphi', price: '300k',        img: 'images/kdhandscript.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Handwritten',     tag: 'Font Viết Tay', cat: 'viettay', type: 'traphi',   price: 'Liên hệ',          img: 'images/kdhandwritten.jpg',      link: 'http://zalo.me/0559970246' },
  { name: 'KD Wedding Dress',   tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdweddingdress.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Withlove',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdwithlove.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Hidayatullah',    tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdhidayatullah.jpg',       link: '1Ezwn8hE0hfGjUQq3y64dqlUXMAdtV4qx' },
  { name: 'KD Against',         tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdagainst.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Agilera',         tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdagilera.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Moon Light',      tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdmoonlight.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Type Ultimate',   tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdtypeultimate.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Arturo',          tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: 'aa',      img: 'images/kdarturo.jpg',             link: '1QSZcUMrlfWeBb-2PDdyASROMRXGHfP-2' },
  { name: 'KD Broisther',       tag: 'Font Cưới',    cat: 'cuoi',     type: 'traphi',   price: '50k',     img: 'images/kdbroisther.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Aureligena Script',tag: 'Font Cưới',    cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdaureligenascript.jpg',   link: '1zKickXBrhIsYtrkYKLH8ecB8aPqERWBP' },
  { name: 'KD Bailey',          tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdbailey.jpg',             link: 'http://zalo.me/0559970246' },
  { name: 'KD Bakar',           tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdbakar.jpg',              link: 'http://zalo.me/0559970246' },
  { name: 'KA Adidas Pro',      tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdadidaspro.jpg',          link: '1Y8LTc1LL_xRb4_bOjPv9-her0aJE6zYN' },
  { name: 'KD Cardecal',        tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdcardecal.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Causten',         tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdcausten.jpg',            link: '17ZWlzGNJHzT13oevTGvXeYN2JCgvzd0q' },
  { name: 'KD Chatoyer',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdchatoyer.jpg',           link: '14-ofEeBwK019Af30Uss2kBY3Q2eFigEk' },
  { name: 'KD Midautumn',       tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdmidautumn.jpg',          link: '1b-Xqg_Pvzc944VGQMKBukumQeriznL2F' },
  { name: 'KD Cute Tattoo Girl', tag: 'Font Khác',    cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdcutetattoogirl.jpg',     link: 'http://zalo.me/0559970246' },
  { name: 'KD Estarossa',       tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdestarossa.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Dallen Bishop',   tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdfallenbishop.jpg',       link: 'http://zalo.me/0559970246' },
  { name: 'KD Fashionwacks',    tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdfashionwacks.jpg',       link: '1Fa8I2Q47PK-_KPLgTZ4PY6hkn8mIfF_t' },
  { name: 'KD Fit',             tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdfit.jpg',                link: 'http://zalo.me/0559970246' },
  { name: 'KD Flourshing',      tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdflourshing.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Gold Queen',      tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdgoldqueen.jpg',          link: '16h_3idNiGUhwJ2Swtwgy-fPXy9GKg4KI' },
  { name: 'KD Goodrace',        tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdgoodrace.jpg',           link: '1S-fM8OmhsudF9ZadwxXvB7-Rekp-31Cn' },
  { name: 'KD Hangout',         tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdhangout.jpg',            link: '1CzHypN4jFVGu-toCbJtmf5_AxpI5cQw1' },
  { name: 'KD Holyriver',       tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdholyriver.jpg',          link: 'http://zalo.me/0559970246' },
  { name: 'KD Lordish',         tag: 'Font Khác',     cat: 'khac',    type: 'traphi',  price: '50k',      img: 'images/kdlordish.jpg',            link: 'http://zalo.me/0559970246' },
  { name: 'KD Love Lost',       tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdlovelost.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Luxhouse',        tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdluxhouse.jpg',           link: 'http://zalo.me/0559970246' },
  { name: 'KD Quinzmom',        tag: 'Font Cưới',     cat: 'cuoi',    type: 'mienphi',  price: '',        img: 'images/kdquinzmom.jpg',           link: '1sNTeYVuIgy_PkPrPkCSGCNngHo9tDUO3' },
  { name: 'KD Quynh',           tag: 'Font CƯới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdquynh.jpg',              link: 'http://zalo.me/0559970246' },
  { name: 'KD Siren',           tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdsiren.jpg',              link: 'http://zalo.me/0559970246' },
  { name: 'KD Suorva',          tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdsuorva.jpg',             link: 'http://zalo.me/0559970246' },
  { name: 'KD Tan Headline',    tag: 'Font Khác',     cat: 'khac',    type: 'traphi',   price: '50k',     img: 'images/kdtanheadline.jpg',        link: 'http://zalo.me/0559970246' },
  { name: 'KD The Blanger',     tag: 'Font Cưới',     cat: 'cuoi',    type: 'traphi',   price: '50k',     img: 'images/kdtheblanger.jpg',         link: 'http://zalo.me/0559970246' },
  { name: 'KD Vince Display',   tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdvincedisplay.jpg',       link: '1b6KN36utlHcZqc2-Mi8NRHdWz4SfvIgs' },
  { name: 'KD Yon Love',        tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdyonlove.jpg',            link: '1CkgxirVfbSgkaMRLaXk9gWmrHsKqNMzS' },
  { name: 'KD Zoika',           tag: 'Font Khác',     cat: 'khac',    type: 'mienphi',  price: '',        img: 'images/kdzoika.jpg',              link: '1tVxUfTcBy3l1jJoNRcdVQkaQkhYMGgSs' },
  { name: 'Tổng hợp', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/full.jpg', link: '1u1XxgSP8HLlpweeeTEe46gLOT-FY-dEQ', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ 1FTV', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/1ftv.jpg', link: '1aIiSUrC8-ry-xF5WxSjJAwaM76A5Ay0R', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ DFVN', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/dfvn.jpg', link: '16ynZsiQRuh9Nd9YywVpCYUS1Fy5L7hvW', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ FZ', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/fz.jpg', link: '16ynZsiQRuh9Nd9YywVpCYUS1Fy5L7hvW', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ HL', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/hl.jpg', link: '1NgD8fo2pq-OZKx56E7KLq7JHQEhmorXb', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ HLT', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/hlt.jpg', link: '116b3JT2_V60OI653w3WDrN7zlOWIFZb7', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ HP', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/hp.jpg', link: '1czHRrGZyS01neY2ksOyoBkSWTqAra_UL', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ iCiel', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/iciel.jpg', link: '1iugjunXlXdRKFPLp4e7Wz1uoQ0epPf0y', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ LF', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/lf.jpg', link: '1u2WPrw2SCcPWBcfr1GnvJGAIjH3P6Nip', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ LNTH', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/lnth.jpg', link: '1wqB4_1qPFYwBdnDwLZzfedACB5OSlinS', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ MTD', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/mtd.jpg', link: '1dqFHFzzNUMTqibHqgaUwJ_DYoV0JBjpK', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ NVN', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/nvn.jpg', link: '1f98t04UhJKk45tR_wTJTiULUBCemoiEw', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ SFU', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/sfu.jpg', link: '1Iohwo5iwyi2SVmuKIhib-m1_MRgGPtjy', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ SVN', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/svn.jpg', link: '1Wl17mohHelZx7agZBqvbp8HKqNJiIIus', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ TQ', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/tq.jpg', link: '', updateDate: 'xxx' },
  { name: 'Bộ UTM', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/utm.jpg', link: '1ruiXTUkIidujNOWiuxZMtxhHkjqfFX-l', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ UVF', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/uvf.jpg', link: '1t8Sj7490oBEILLxhP-X4zHKp7Kxq-Q30', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ UVN', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/uvn.jpg', link: '1rOKCA09uJ0sO9Tow8T7Xiq4sQTfAw-ep', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ VL', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/vl.jpg', link: '1YG6_CPMY9BBTW7QllQTDsSgkSAsrgk1l', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ VN', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/vn.jpg', link: '1dc6HpKQ4z7KiTY7qToEboSRjPb7qmXHi', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ VNF', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/vnf.jpg', link: '1cAC8WEG06G072cFQ_z_phsr_cMj9-l8G', updateDate: 'Cập nhật 01/06/26' },
  { name: 'Bộ VNI', tag: 'kdvip', cat: 'kdvip', type: 'kdvip', price: '', img: 'images/vni.jpg', link: '1T_iFeuONTDQvZmEnMYNTn0gDCFAR2iou', updateDate: 'Cập nhật 01/06/26' },
];

const iconCart = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
<polyline points="7 10 12 15 17 10"/>
<line x1="12" y1="15" x2="12" y2="3"/>
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

// Search
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

function setChip(el, cat) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentCat = cat;
  runFilter();
}

function runFilter() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();

  filtered = allFonts.filter(f => {
    let catOk;
    if (currentCat === 'all') {
      catOk = f.type !== 'kdvip'; // ← thêm dòng này
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
  // Chú thích VIP
const vipNote = document.getElementById('vipNote');
if (vipNote) {
  vipNote.style.display = currentCat === 'kdvip' ? 'block' : 'none';
}
}

// Card HTML
function cardHTML(f) {
  const isFree = f.type === 'mienphi';
  const isVip = f.type === 'kdvip';
  
  const resolvedLink = (f.link && f.link !== '#' && !f.link.startsWith('http'))
    ? `https://drive.google.com/uc?export=download&id=${f.link}`
    : f.link;

  const priceHTML = isFree
    ? `<span class="price free">Miễn phí</span>`
    : `<span class="price">${f.price}</span>`;
  const btnHTML = isFree
    ? `<button class="action-btn dl" onclick="window.open('${resolvedLink}','_blank')">${iconDl} Tải về</button>`
    : `<button class="action-btn buy" onclick="window.open('${resolvedLink}','_blank')">${iconCart} VIP</button>`;

  const updateBadge = isVip && f.updateDate
    ? `<span class="update-badge">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        ${f.updateDate}
       </span>`
    : '';

  return `
    <div class="card">
      <div class="preview-box">
        <img src="${f.img}" alt="${f.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="placeholder" style="display:none">${f.name}</div>
      </div>
      <div class="card-name-row">
        <div class="card-name">${f.name}</div>
        ${updateBadge}
      </div>
      <div class="card-tag">${f.tag}</div>
      <div class="card-footer">${priceHTML}${btnHTML}</div>
    </div>`;
}

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

runFilter();

// BACK TO TOP
const backToTopBtn = document.querySelector('.backtotop-btn');

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// KD Font Finder
function openFontFinder() {
  const modal = document.getElementById('kdModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFontFinder(e) {
  if (e && e.target !== document.getElementById('kdModal')) return;
  const modal = document.getElementById('kdModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  const video = modal.querySelector('video');
  if (video) video.pause();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('kdModal');
    if (modal && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const video = modal.querySelector('video');
      if (video) video.pause();
    }
  }
});
