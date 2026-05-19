/* ============================================================
   Font – Kem Đoàn | script.js
============================================================ */

const allFonts = [
  { name: 'KD Netsera',         tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdnetsera.jpg',       link: '1DexKoA1kLiYSkUOimx7kJODVJ1f8CvZ7' },
  { name: 'KD Goken',           tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdgoken.jpg',         link: '1b2O1vybkscQ9PQTWCveA-hCcRzCWXSiE' },
  { name: 'KD Boxroom',         tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdboxroom.jpg',       link: '14nZqyDi7SXmf_C227OrizP4CmTLvN6ob' },
  { name: 'KD Handwritten',     tag: 'Font Viết Tay', cat: ['viettay', 'cuoi'], type: 'preview', price: 'Liên hệ', img: 'images/kdhandwritten.jpg', link: 'http://zalo.me/0559970246', slides: ['images/hw1.jpg', 'images/hw2.jpg', 'images/hw3.jpg', 'images/hw4.jpg'] },
  { name: 'KD Handscript',      tag: 'Font Viết Tay', cat: ['viettay', 'cuoi'], type: 'preview', price: 'Liên hệ', img: 'images/kdhandscript.jpg',  link: 'http://zalo.me/0559970246', slides: ['images/hs1.jpg', 'images/hs2.jpg', 'images/hs3.jpg', 'images/hs4.jpg'] },
  { name: 'KD Sulee',           tag: 'Font Chữ Ký',   cat: ['viettay','chuky'], type: 'traphi',  img: 'images/kdsulee.jpg',         link: '18SdCMD2WhSxEl-OHeCsvFxO-mcz8Zmke' },
  { name: 'KD Hongkong',        tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdhongkong.jpg',      link: '1qG0N-tU6mKRC5CZxXQqMO9Q94WcfMtUl' },
  { name: 'KD Valery',          tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdvalery.jpg',        link: '1CiQpd4ugE0FuV1Nmo8APvQ27LxR2Eufa' },
  { name: 'KD Lemaire',         tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdlemaire.jpg',       link: '1j0tWnOrhLm5S5oTQiUyiM6TPKXiSvtlQ' },
  { name: 'KD Kaelyna Script',  tag: 'Font Cưới',     cat: 'cuoi',     type: 'mienphi', img: 'images/kdkaelynascript.jpg', link: '1OG0Aq95FJM4gxVVzO37Tw7-aPOugEpbl' },
  { name: 'KD Huees',           tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdhuees.jpg',         link: '1qsXoKu7nm_DGpcyAla6gsZFw88hmuLai' },
  { name: 'KD Kem Doan',        tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdkemdoan.jpg',       link: '17j_BgCy0kTpTpNDBRv2Qqpu1guhkY-KD' },
  { name: 'KD Doan Nguyen',     tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kddoannguyen.jpg',    link: '1d3eh5Ge2q_-kgiyv8OHngvXVDOerk0tO' },
  { name: 'KD Wedding Dress',   tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdweddingdress.jpg',  link: '18BGqUzfqFxTfCgPBcIpiZ3S4KshrZ_vZ' },
  { name: 'KD Withlove',        tag: 'Font Cưới',     cat: ['viettay', 'cuoi'], type: 'traphi',  img: 'images/kdwithlove.jpg',      link: '1gM8WdO1eWV1oaHgrWRfeKrL8m8vKc5T8' },
  { name: 'KD Hidayatullah',    tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdhidayatullah.jpg',  link: '1Ezwn8hE0hfGjUQq3y64dqlUXMAdtV4qx' },
  { name: 'KD Against',         tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdagainst.jpg',       link: '1lE_kE3c8B5WVh3C93ZqzDXkTkbPY9KHQ' },
  { name: 'KD Agilera',         tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdagilera.jpg',       link: '1gaF6rmeY_KrE6J05taeCFdAEDEZ9_Pus' },
  { name: 'KD Moon Light',      tag: 'Font Cưới',     cat: 'cuoi',     type: 'mienphi', img: 'images/kdmoonlight.jpg',     link: '1LlGpLJxDtJ7oj8jP6UL9MGYHmTqVBzb' },
  { name: 'KD Type Ultimate',   tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdtypeultimate.jpg',  link: '1WwUvBOAn2IMXl5feX1Wp0sLfcZ_MWuf-' },
  { name: 'KD Arturo',          tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdarturo.jpg',        link: '1QSZcUMrlfWeBb-2PDdyASROMRXGHfP-2' },
  { name: 'KD Broisther',       tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdbroisther.jpg',     link: '1bz0XpKMtIiYIliiQa8kZjNnamGSfCkpT' },
  { name: 'KD Aureligena Script',tag: 'Font Cưới',    cat: 'cuoi',     type: 'mienphi', img: 'images/kdaureligenascript.jpg', link: '1zKickXBrhIsYtrkYKLH8ecB8aPqERWBP' },
  { name: 'KD Bailey',          tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdbailey.jpg',        link: '1OV1u7XcwelsEN2ZkQNXYTzTYcXu-tp-8' },
  { name: 'KD Bakar',           tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdbakar.jpg',         link: '13FsHqZhli67bCoi8MnYJSxhpx0HYbExq' },
  { name: 'KA Adidas Pro',      tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdadidaspro.jpg',     link: '1Y8LTc1LL_xRb4_bOjPv9-her0aJE6zYN' },
  { name: 'KD Car Decal',       tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdcardecal.jpg',      link: '1F3XH4LcatYqKFmHUG1dLq440cGeNzkXv' },
  { name: 'KD Causten',         tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdcausten.jpg',       link: '17ZWlzGNJHzT13oevTGvXeYN2JCgvzd0q' },
  { name: 'KD Chatoyer',        tag: 'Font Cưới',     cat: 'cuoi',     type: 'mienphi', img: 'images/kdchatoyer.jpg',      link: '14-ofEeBwK019Af30Uss2kBY3Q2eFigEk' },
  { name: 'KD Midautumn',       tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdmidautumn.jpg',     link: '1b-Xqg_Pvzc944VGQMKBukumQeriznL2F' },
  { name: 'KD Cute Tattoo Girl',tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdcutetattoogirl.jpg',link: '1AIXtW74xODWeAnyJch78bPO9h9d_X8LN' },
  { name: 'KD Estarossa',       tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdestarossa.jpg',     link: '1taLfNWkBPvaN4aCy5MvKJZ_kl0fMIo4V' },
  { name: 'KD Fallen Bishop',   tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdfallenbishop.jpg',  link: '1eIJy2cWadriEYI4EJMgrEDYCi4DagNeq' },
  { name: 'KD Fashionwacks',    tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdfashionwacks.jpg',  link: '1Fa8I2Q47PK-_KPLgTZ4PY6hkn8mIfF_t' },
  { name: 'KD Fit',             tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdfit.jpg',           link: '1hJa9iQ0KvASIqMjtNYWXbXX0ffOKooxL' },
  { name: 'KD Flourshing',      tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdflourshing.jpg',    link: '1rJHf9CYUYVwn5MtxtGc06qwq6nCDPNy6' },
  { name: 'KD Gold Queen',      tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdgoldqueen.jpg',     link: '16h_3idNiGUhwJ2Swtwgy-fPXy9GKg4KI' },
  { name: 'KD Goodrace',        tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdgoodrace.jpg',      link: '1S-fM8OmhsudF9ZadwxXvB7-Rekp-31Cn' },
  { name: 'KD Hangout',         tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdhangout.jpg',       link: '1CzHypN4jFVGu-toCbJtmf5_AxpI5cQw1' },
  { name: 'KD Holyriver',       tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdholyriver.jpg',     link: '1dBGceeZkryTXwlzRFjcUnmhjT4W-6ruX' },
  { name: 'KD Lordish',         tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdlordish.jpg',       link: '1rcVviMPvJMJRbMNeqMPjgBfvbq5Iqzq7' },
  { name: 'KD Love Lost',       tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdlovelost.jpg',      link: '19C_DJvwZAG2yuMRNcAy1llWmdfDRZqjl' },
  { name: 'KD Luxhouse',        tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdluxhouse.jpg',      link: '1N-NoV3X4Kg3-NoSfS0C8kHTvDJzdtoyx' },
  { name: 'KD Quinzmom',        tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdquinzmom.jpg',      link: '1sNTeYVuIgy_PkPrPkCSGCNngHo9tDUO3' },
  { name: 'KD Quynh',           tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdquynh.jpg',         link: '1bNsvC7iXF_XIoR17WwyptFia_nzVOoK3' },
  { name: 'KD Siren',           tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdsiren.jpg',         link: '1xA6w2mhC1K-1tCQUPjGcBPDpbdWWXUPP' },
  { name: 'KD Suorva',          tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdsuorva.jpg',        link: '1HyX3AIXb8pGmh0fF4nUJxKlQfItDcQug' },
  { name: 'KD Tan Headline',    tag: 'Font Khác',     cat: 'khac',     type: 'traphi',  img: 'images/kdtanheadline.jpg',   link: '1Z-1Z5O0soU0yB66gBWAnPnZAZ99Ua1QM' },
  { name: 'KD The Blanger',     tag: 'Font Cưới',     cat: 'cuoi',     type: 'traphi',  img: 'images/kdtheblanger.jpg',    link: '1SFByl3b4cfNKKDKGRIpynaKbb3QPO_wd' },
  { name: 'KD Vince Display',   tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdvincedisplay.jpg',  link: '1b6KN36utlHcZqc2-Mi8NRHdWz4SfvIgs' },
  { name: 'KD Yon Love',        tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdyonlove.jpg',       link: '1CkgxirVfbSgkaMRLaXk9gWmrHsKqNMzS' },
  { name: 'KD Zoika',           tag: 'Font Khác',     cat: 'khac',     type: 'mienphi', img: 'images/kdzoika.jpg',         link: '1tVxUfTcBy3l1jJoNRcdVQkaQkhYMGgSs' },
  { name: 'Tổng hợp',  tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/full.jpg', link: '1u1XxgSP8HLlpweeeTEe46gLOT-FY-dEQ', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ KD',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/kd.jpg',   link: '1vgcFX7IAhI6HOyq5C3oI0mY7f8LZHkwE', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ 1FTV',   tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/1ftv.jpg', link: '1aIiSUrC8-ry-xF5WxSjJAwaM76A5Ay0R', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ DFVN',   tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/dfvn.jpg', link: '16ynZsiQRuh9Nd9YywVpCYUS1Fy5L7hvW', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ FZ',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/fz.jpg',   link: '16ynZsiQRuh9Nd9YywVpCYUS1Fy5L7hvW', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ HL',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/hl.jpg',   link: '1NgD8fo2pq-OZKx56E7KLq7JHQEhmorXb', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ HLT',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/hlt.jpg',  link: '116b3JT2_V60OI653w3WDrN7zlOWIFZb7', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ HP',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/hp.jpg',   link: '1czHRrGZyS01neY2ksOyoBkSWTqAra_UL', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ iCiel',  tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/iciel.jpg',link: '1iugjunXlXdRKFPLp4e7Wz1uoQ0epPf0y', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ LF',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/lf.jpg',   link: '1u2WPrw2SCcPWBcfr1GnvJGAIjH3P6Nip', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ LNTH',   tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/lnth.jpg', link: '1wqB4_1qPFYwBdnDwLZzfedACB5OSlinS', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ MTD',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/mtd.jpg',  link: '1dqFHFzzNUMTqibHqgaUwJ_DYoV0JBjpK', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ NVN',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/nvn.jpg',  link: '1f98t04UhJKk45tR_wTJTiULUBCemoiEw', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ SFU',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/sfu.jpg',  link: '1Iohwo5iwyi2SVmuKIhib-m1_MRgGPtjy', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ SVN',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/svn.jpg',  link: '1Wl17mohHelZx7agZBqvbp8HKqNJiIIus', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ TQ',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/tq.jpg',   link: '/font/tq',                                  updateDate: 'Chờ cập nhật' },
  { name: 'Bộ UTM',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/utm.jpg',  link: '1ruiXTUkIidujNOWiuxZMtxhHkjqfFX-l', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ UVF',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/uvf.jpg',  link: '1t8Sj7490oBEILLxhP-X4zHKp7Kxq-Q30', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ UVN',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/uvn.jpg',  link: '1rOKCA09uJ0sO9Tow8T7Xiq4sQTfAw-ep', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ VL',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/vl.jpg',   link: '1YG6_CPMY9BBTW7QllQTDsSgkSAsrgk1l', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ VN',     tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/vn.jpg',   link: '1dc6HpKQ4z7KiTY7qToEboSRjPb7qmXHi', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ VNF',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/vnf.jpg',  link: '1cAC8WEG06G072cFQ_z_phsr_cMj9-l8G', updateDate: 'Cập nhật 16/05/26' },
  { name: 'Bộ VNI',    tag: '', cat: 'kdvip', type: 'kdvip', img: 'images/vni.jpg',  link: '1T_iFeuONTDQvZmEnMYNTn0gDCFAR2iou', updateDate: 'Cập nhật 16/05/26' },
];

const iconCart = `<i class="ri-download-cloud-2-line"></i>`;
const iconDl = `<i class="ri-download-cloud-2-line"></i>`;

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
    if (q) {
      return f.name.toLowerCase().includes(q) || f.tag.toLowerCase().includes(q);
    }

    let catOk;
    if (currentCat === 'all') {
      catOk = f.type !== 'kdvip';
    } else if (currentCat === 'traphi' || currentCat === 'mienphi') {
      catOk = f.type === currentCat;
    } else {
      catOk = Array.isArray(f.cat) ? f.cat.includes(currentCat) : f.cat === currentCat;
    }
    return catOk;
  });

  shown = 0;
  document.getElementById('grid').innerHTML = '';
  appendCards();
  document.getElementById('countLabel').textContent = filtered.length + ' font';

  const vipNote = document.getElementById('vipNote');
  if (vipNote) {
    vipNote.style.display = currentCat === 'kdvip' && !q ? 'block' : 'none';
  }

  const allNote = document.getElementById('allNote');
  if (allNote) {
    allNote.style.display = currentCat === 'all' && !q ? 'block' : 'none';
  }
}

// Card HTML
function cardHTML(f) {
  const isFree = f.type === 'mienphi';
  const isVip = f.type === 'kdvip';
  const iconMore = `<i class="ri-image-line"></i>`;
  
  const resolvedLink = (f.link && f.link !== '#' && !f.link.startsWith('http'))
    ? `https://drive.google.com/uc?export=download&id=${f.link}`
    : f.link;

    const isPreview = f.type === 'preview';

    const priceHTML = isFree
    ? `<span class="price free">FREE</span>`
    : isVip
        ? `<span></span>`
      : isPreview
        ? `<span class="price">Liên hệ</span>`
        : `<span class="price vip">VIP</span>`;
    
    const btnHTML = isFree
      ? `<button class="action-btn dl" onclick="window.open('${resolvedLink}','_blank')">${iconDl} Tải font</button>`
      : isVip
        ? `<button class="action-btn dl" onclick="window.open('${resolvedLink}','_blank')">${iconDl} Tải về</button>`
        : isPreview
          ? `<button class="action-btn dl" onclick='openSlideModal(${JSON.stringify(f.slides)})'>${iconMore} Xem thêm</button>`
          : `<button class="action-btn buy" onclick="window.open('${resolvedLink}','_blank')">${iconCart} Tải font</button>`;    
  const updateBadge = isVip && f.updateDate
        ? `<span class="update-badge">
         <i class="ri-time-line"></i>
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

let slideImages = [];
let slideIndex = 0;

function openSlideModal(slides) {
  slideImages = slides;
  slideIndex = 0;
  updateSlide();
  const modal = document.getElementById('slideModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSlideModal(e) {
  if (e && e.target !== document.getElementById('slideModal')) return;
  document.getElementById('slideModal').classList.remove('active');
  document.body.style.overflow = '';
}

function changeSlide(dir) {
  slideIndex = (slideIndex + dir + slideImages.length) % slideImages.length;
  updateSlide();
}

function updateSlide() {
  document.getElementById('slideImg').src = slideImages[slideIndex];
  const dots = document.getElementById('slideDots');
  dots.innerHTML = slideImages.map((_, i) =>
    `<span class="dot ${i === slideIndex ? 'active' : ''}" onclick="slideIndex=${i};updateSlide()"></span>`
  ).join('');
}

function openVipModal() {
  document.getElementById('vipModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVipModal(e) {
  if (e && e.target !== document.getElementById('vipModal')) return;
  document.getElementById('vipModal').classList.remove('active');
  document.body.style.overflow = '';
}
