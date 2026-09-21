// Data semua proyek. Untuk menambah foto proses, cukup masukkan file ke folder proyek sesuai nama process-1.jpg, process-2.jpg, dst.

const PROCESS_PHOTO_LIMIT = 20;

const projects = {
  'iee': {
    title: 'Indonesia Energy & Engineering',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ieeandri.jpg',
    description: 'Dokumentasi proyek Indonesia Energy & Engineering, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/iee/',
    process: ['process-1.jpg', 'process-2.jpg', 'process-3.jpg', 'process-4.jpg', 'process-5.jpg', 'process-6.jpg', 'process-7.jpg', 'process-8.jpg']
  },
  'technology': {
    title: 'Indonesia Technology & Innovation',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/intiandri.jpg',
    description: 'Dokumentasi proyek Indonesia Technology & Innovation, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/technology/'
  },
  'inamarine': {
    title: 'Inamarine',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/inamarine.jpg',
    description: 'Dokumentasi proyek Inamarine, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/inamarine/'
  },
  'food-hotel': {
    title: 'Food Hotel Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/fhiandri.jpg',
    description: 'Dokumentasi proyek Food Hotel Indonesia, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/food-hotel/'
  },
  'asia-tech': {
    title: 'Asia Tech x Singapure 2026',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/asiatech.jpg',
    description: 'Dokumentasi proyek Asia Tech x Singapure 2026, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/asia-tech/'
  },
  'uni-global': {
    title: 'Uni-Global Retail Exhibition',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/uniglobal.jpg',
    description: 'Dokumentasi proyek Uni-Global Retail Exhibition, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/uni-global/'
  },
  'manufacturing': {
    title: 'Manufacturing Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mfi.jpg',
    description: 'Dokumentasi proyek Manufacturing Indonesia, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/manufacturing/'
  },
  'plastics-rubber': {
    title: 'Plastics & Rubber Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/pri.jpg',
    description: 'Dokumentasi proyek Plastics & Rubber Indonesia, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/plastics-rubber/'
  },
  'neo-photo': {
    title: 'Neo Photo Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/neo.jpg',
    description: 'Dokumentasi proyek Neo Photo Indonesia, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/neo-photo/'
  },
  'wordaishow': {
    title: 'WordAIshow',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ai.jpg',
    description: 'Dokumentasi proyek WordAIshow, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/wordaishow/'
  },
  'hut67-tarumanagara': {
    title: 'Hut 67 Yayasan Tarumanagara',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/taruna.jpg',
    description: 'Dokumentasi proyek Hut 67 Yayasan Tarumanagara, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/hut67-tarumanagara/'
  },
  'ifex': {
    title: 'IFEX-Indonesia International Furniture Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ifex.jpg',
    description: 'Dokumentasi proyek IFEX-Indonesia International Furniture Expo, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/ifex/'
  },
  'iffina': {
    title: 'IFFINA-Indonesia Meubel & Design Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/iff.jpg',
    description: 'Dokumentasi proyek IFFINA-Indonesia Meubel & Design Expo, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/iffina/'
  },
  'mbloc': {
    title: 'Mbloc Design Week',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mbloc.jpg',
    description: 'Dokumentasi proyek Mbloc Design Week, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/mbloc/'
  },
  'interpose-untar': {
    title: 'INTERPOSE-Design interior UNTAR',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/int.jpg',
    description: 'Dokumentasi proyek INTERPOSE-Design interior UNTAR, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/interpose-untar/'
  },
  'inagritech': {
    title: 'Inagritech',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ina.jpg',
    description: 'Dokumentasi proyek Inagritech, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/inagritech/'
  },
  'hut66-yayasan': {
    title: 'HUT 66 Yayasan Tarumanagara',
    category: 'EVENT PROJECT',
    cover: 'assets/images/yayasan.jpg',
    description: 'Dokumentasi proyek HUT 66 Yayasan Tarumanagara, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/hut66-yayasan/'
  },
  'roso-nate': {
    title: 'Interpose Reso Nate',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/roso.jpg',
    description: 'Dokumentasi proyek Interpose Reso Nate, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/roso-nate/'
  },
  'mbloc-design-week-2': {
    title: 'Mbloc Design Week',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mblock1.jpg',
    description: 'Dokumentasi proyek Mbloc Design Week, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/mbloc-design-week-2/'
  },
  'festival-api': {
    title: 'Festival API Ke-6 Yayasan Tarumanagara',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/api.jpg',
    description: 'Dokumentasi proyek Festival API Ke-6 Yayasan Tarumanagara, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/festival-api/'
  },
  'nhk-jakarta': {
    title: 'NHK jakarta fair',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/nhk.jpg',
    description: 'Dokumentasi proyek NHK jakarta fair, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/nhk-jakarta/'
  },
  'toyota-gaikindo': {
    title: 'TOYOTA - Gaikindo International Autoshow',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/toyotag.jpg',
    description: 'Dokumentasi proyek TOYOTA - Gaikindo International Autoshow, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/toyota-gaikindo/'
  },
  'iipe': {
    title: 'IIPE -Indonesia International Pet Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/iipe.jpg',
    description: 'Dokumentasi proyek IIPE -Indonesia International Pet Expo, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/iipe/'
  },
  'toyota-sumarecon': {
    title: 'Toyota - Sumarecon Kelapa Gading',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/toyotas.jpg',
    description: 'Dokumentasi proyek Toyota - Sumarecon Kelapa Gading, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/toyota-sumarecon/'
  },
  'rakernas-pdi': {
    title: 'Rakernas PDI Perjuangan',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/rekernas.jpg',
    description: 'Dokumentasi proyek Rakernas PDI Perjuangan, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/rakernas-pdi/'
  },
  'project-26': {
    title: 'Exhibition Project 06',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-26/cover.jpg',
    description: 'Dokumentasi proyek Exhibition Project 06, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/project-26/'
  },
  'project-27': {
    title: 'Exhibition Project 07',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-27/cover.jpg',
    description: 'Dokumentasi proyek Exhibition Project 07, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/project-27/'
  },
  'project-28': {
    title: 'Exhibition Project 08',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-28/cover.jpg',
    description: 'Dokumentasi proyek Exhibition Project 08, dari tahap persiapan hingga pelaksanaan di lapangan.',
    processFolder: 'assets/images/projects/project-28/'
  }
};

const params = new URLSearchParams(window.location.search);
const projectId = (params.get('id') || 'iee').trim().toLowerCase();
const project = projects[projectId];

const titleEl = document.getElementById('project-title');
const categoryEl = document.getElementById('project-category');
const descriptionEl = document.getElementById('project-description');
const coverEl = document.getElementById('project-cover');
const galleryEl = document.getElementById('process-gallery');
const emptyEl = document.getElementById('empty-process');
const processNavEl = document.getElementById('process-nav');
const prevButton = document.getElementById('process-prev');
const nextButton = document.getElementById('process-next');
const lightboxEl = document.getElementById('lightbox');
const lightboxImageEl = document.getElementById('lightbox-image');
const closeButton = document.getElementById('lightbox-close');

function getProcessScrollAmount() {
  const firstItem = galleryEl.querySelector('.process-item:not([hidden])');
  if (!firstItem) return galleryEl.clientWidth * 0.85;
  const gap = parseFloat(getComputedStyle(galleryEl).gap) || 0;
  return firstItem.getBoundingClientRect().width + gap;
}

function updateProcessArrows() {
  if (!processNavEl || !prevButton || !nextButton) return;
  const hasOverflow = galleryEl.scrollWidth > galleryEl.clientWidth + 2;
  processNavEl.hidden = !hasOverflow;
  if (!hasOverflow) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }
  prevButton.disabled = galleryEl.scrollLeft <= 2;
  nextButton.disabled = galleryEl.scrollLeft + galleryEl.clientWidth >= galleryEl.scrollWidth - 2;
}

function openLightbox(src, alt) {
  lightboxImageEl.src = src;
  lightboxImageEl.alt = alt;
  lightboxEl.classList.add('is-open');
  lightboxEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  closeButton.focus();
}

function closeLightbox() {
  lightboxEl.classList.remove('is-open');
  lightboxEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImageEl.src = '';
}

function showEmptyState() {
  emptyEl.hidden = false;
  processNavEl.hidden = true;
}

if (!project) {
  document.title = 'Proyek Tidak Ditemukan | Andri Saputra';
  categoryEl.textContent = 'Proyek';
  titleEl.textContent = 'Proyek Tidak Ditemukan';
  descriptionEl.textContent = 'Proyek yang kamu buka belum tersedia.';
  coverEl.style.display = 'none';
  showEmptyState();
} else {
  document.title = `${project.title} | Andri Saputra`;
  categoryEl.textContent = project.category;
  titleEl.textContent = project.title;
  descriptionEl.textContent = project.description;
  coverEl.src = project.cover;
  coverEl.alt = project.title;
  coverEl.addEventListener('error', () => {
    coverEl.style.display = 'none';
  });

  let loadedProcessCount = 0;
  let finishedProcessCount = 0;

  // Jika sebuah proyek memiliki daftar foto khusus, gunakan daftar itu.
  // Jika tidak, cari otomatis process-1 sampai process-20.
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];

  function probeImage(path) {
    return new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => resolve(path);
      probe.onerror = () => resolve(null);
      probe.src = path;
    });
  }

  async function findProcessImage(index) {
    if (Array.isArray(project.process)) {
      const filename = project.process[index - 1];
      if (!filename) return null;
      return await probeImage(project.processFolder + filename);
    }

    for (const extension of extensions) {
      const path = `${project.processFolder}process-${index}.${extension}`;
      const result = await probeImage(path);
      if (result) return result;
    }
    return null;
  }

  async function loadProcessPhotos() {
    const max = Array.isArray(project.process) ? project.process.length : PROCESS_PHOTO_LIMIT;

    for (let index = 1; index <= max; index++) {
      const path = await findProcessImage(index);
      if (!path) continue;

      const button = document.createElement('button');
      button.className = 'process-item';
      button.type = 'button';
      button.setAttribute('aria-label', `Buka foto proses ${index}`);

      const image = document.createElement('img');
      image.src = path;
      image.alt = `${project.title} — proses ${index}`;
      image.loading = 'lazy';

      button.appendChild(image);
      galleryEl.appendChild(button);
      loadedProcessCount++;
      emptyEl.hidden = true;

      button.addEventListener('click', () => openLightbox(path, image.alt));
    }

    if (loadedProcessCount === 0) {
      showEmptyState();
    } else {
      updateProcessArrows();
    }
  }

  loadProcessPhotos();
}

prevButton.addEventListener('click', () => {
  galleryEl.scrollBy({ left: -getProcessScrollAmount(), behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  galleryEl.scrollBy({ left: getProcessScrollAmount(), behavior: 'smooth' });
});

galleryEl.addEventListener('scroll', updateProcessArrows, { passive: true });
window.addEventListener('resize', updateProcessArrows);
closeButton.addEventListener('click', closeLightbox);

lightboxEl.addEventListener('click', (event) => {
  if (event.target === lightboxEl) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightboxEl.classList.contains('is-open')) {
    closeLightbox();
  }
});
