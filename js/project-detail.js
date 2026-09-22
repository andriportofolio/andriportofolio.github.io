// Data semua proyek. Untuk menambah foto proses, cukup masukkan file ke folder proyek sesuai nama process-1.jpg, process-2.jpg, dst.

const PROCESS_PHOTO_LIMIT = 30;

const projects = {
  'iee': {
    title: 'Indonesia Energy & Engineering',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ieeandri.jpg',
    processFolder: 'assets/images/projects/iee/',
    process: ['process-1.jpg', 'process-2.jpg', 'process-3.jpg', 'process-4.jpg', 'process-5.jpg', 'process-6.jpg', 'process-7.jpg', 'process-8.jpg']
  },
  'technology': {
    title: 'Indonesia Technology & Innovation',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/intiandri.jpg',
    processFolder: 'assets/images/projects/technology/', 
    process: ['process-9.jpg', 'process-10.jpg', 'process-11.jpg', 'process-12.jpg', 'process-13.jpg', 'process-14.jpg', 'process-15.jpg', 'process-16.jpg']
  },
  'inamarine': {
    title: 'Inamarine',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/inamarine.jpg',
    processFolder: 'assets/images/projects/inamarine/',
    process: ['process-17.jpg', 'process-18.jpg', 'process-19.jpg', 'process-20.jpg', 'process-21.jpg']
  },
  'food-hotel': {
    title: 'Food Hotel Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/fhiandri.jpg',
    processFolder: 'assets/images/projects/food-hotel/',
    process: ['process-22.jpg', 'process-23.jpg', 'process-24.jpg', 'process-25.jpg', 'process-26.jpg', 'process-27.jpg', 'process-28.jpg', 'process-30.jpg', 'process-31.jpg']
  },
  'asia-tech': {
    title: 'Asia Tech x Singapure 2026',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/asiatech.jpg',
    processFolder: 'assets/images/projects/asia-tech/',
    process: ['process-32.jpg', 'process-33.jpg', 'process-34.jpg', 'process-35.jpg', 'process-36.jpg', 'process-37.jpg', 'process-38.jpg', 'process-39.jpg', 'process-40.jpg']
  },
  'uni-global': {
    title: 'Uni-Global Retail Exhibition',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/uniglobal.jpg',
    processFolder: 'assets/images/projects/uni-global/',
    process: ['process-41.jpg', 'process-42.jpg', 'process-43.jpg', 'process-44.jpg', 'process-45.jpg', 'process-46.jpg', 'process-47.jpg', 'process-48.jpg', 'process-49.jpg', 'process-50.jpg']
  },
  'manufacturing': {
    title: 'Manufacturing Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mfi.jpg',
    processFolder: 'assets/images/projects/manufacturing/',
    process: ['process-51.jpg', 'process-52.jpg', 'process-53.jpg', 'process-54.jpg', 'process-55.jpg', 'process-56.jpg', 'process-57.jpg', 'process-58.jpg', 'process-59.jpg', 'process-60.jpg']
  },
  'plastics-rubber': {
    title: 'Plastics & Rubber Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/pri.jpg',
    processFolder: 'assets/images/projects/plastics-rubber/',
    process: ['process-61.jpg', 'process-62.jpg', 'process-63.jpg', 'process-64.jpg', 'process-65.jpg', 'process-66.jpg', 'process-67.jpg']
  },
  'neo-photo': {
    title: 'Neo Photo Indonesia',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/neo.jpg',
    processFolder: 'assets/images/projects/neo-photo/',
    process: ['process-68.jpg', 'process-69.jpg', 'process-70.jpg', 'process-71.jpg', 'process-72.jpg']
  },
  'wordaishow': {
    title: 'WordAIshow',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ai.jpg',
    processFolder: 'assets/images/projects/wordaishow/',
    process: ['process-73.jpg', 'process-74.jpg', 'process-75.jpg', 'process-76.jpg']
  },
  'hut67-tarumanagara': {
    title: 'Hut 67 Yayasan Tarumanagara',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/taruna.jpg',
    processFolder: 'assets/images/projects/hut67-tarumanagara/',
    process: ['process-77.jpg', 'process-78.jpg', 'process-79.jpg', 'process-80.jpg', 'process-81.jpg', 'process-82.jpg', 'process-83.jpg', 'process-84.jpg']
  },
  'ifex': {
    title: 'IFEX-Indonesia International Furniture Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ifex.jpg',
    processFolder: 'assets/images/projects/ifex/',
    process: ['process-85.jpg', 'process-86.jpg', 'process-87.jpg', 'process-88.jpg']
  },
  'iffina': {
    title: 'IFFINA-Indonesia Meubel & Design Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/iff.jpg',
    processFolder: 'assets/images/projects/iffina/',
    process: ['process-89.jpg', 'process-90.jpg', 'process-91.jpg']
  },
  'mbloc': {
    title: 'Mbloc Design Week',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mbloc.jpg',
    processFolder: 'assets/images/projects/mbloc/',
    process: ['process-92.jpg', 'process-93.jpg', 'process-94.jpg', 'process-95.jpg']
  },
  'interpose-untar': {
    title: 'INTERPOSE-Design interior UNTAR',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/int.jpg',
    processFolder: 'assets/images/projects/interpose-untar/',
    process: ['process-96.jpg', 'process-97.jpg', 'process-98.jpg', 'process-99.jpg', 'process-100.jpg']
  },
  'inagritech': {
    title: 'Inagritech',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/ina.jpg',
    processFolder: 'assets/images/projects/inagritech/',
    process: ['process-101.jpg', 'process-102.jpg', 'process-103.jpg']
  },
  'hut66-yayasan': {
    title: 'HUT 66 Yayasan Tarumanagara',
    category: 'EVENT PROJECT',
    cover: 'assets/images/yayasan.jpg',
    processFolder: 'assets/images/projects/hut66-yayasan/',
    process: ['process-104.jpg', 'process-105.jpg', 'process-106.jpg', 'process-107.jpg', 'process-108.jpg', 'process-109.jpg', 'process-110.jpg', 'process-111.jpg', 'process-112.jpg', 'process-113.jpg']
  },
  'roso-nate': {
    title: 'Interpose Reso Nate',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/roso.jpg',
    processFolder: 'assets/images/projects/roso-nate/',
    process: ['process-114.jpg', 'process-115.jpg', 'process-116.jpg', 'process-117.jpg', 'process-118.jpg', 'process-119.jpg', 'process-120.jpg', 'process-121.jpg']
  },
  'mbloc-design-week-2': {
    title: 'Mbloc Design Week',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/mblock1.jpg',
    processFolder: 'assets/images/projects/mbloc-design-week-2/'
  },
  'festival-api': {
    title: 'Festival API Ke-6 Yayasan Tarumanagara',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/api.jpg',
    processFolder: 'assets/images/projects/festival-api/',
    process: ['process-122.jpg', 'process-123.jpg', 'process-124.jpg']
  },
  'nhk-jakarta': {
    title: 'NHK jakarta fair',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/nhk.jpg',
    processFolder: 'assets/images/projects/nhk-jakarta/'
  },
  'toyota-gaikindo': {
    title: 'TOYOTA - Gaikindo International Autoshow',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/toyotag.jpg',
    processFolder: 'assets/images/projects/toyota-gaikindo/',
    process: ['process-125.jpg', 'process-126.jpg']
  },
  'iipe': {
    title: 'IIPE -Indonesia International Pet Expo',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/iipe.jpg',
    processFolder: 'assets/images/projects/iipe/'
  },
  'toyota-sumarecon': {
    title: 'Toyota - Sumarecon Kelapa Gading',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/toyotas.jpg',
    processFolder: 'assets/images/projects/toyota-sumarecon/',
    process: ['process-127.jpg', 'process-128.jpg', 'process-129.jpg', 'process-130.jpg', 'process-131.jpg']
  },
  'rakernas-pdi': {
    title: 'Rakernas PDI Perjuangan',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/rekernas.jpg',
    processFolder: 'assets/images/projects/rakernas-pdi/'
  },
  'project-26': {
    title: 'Exhibition Project 06',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-26/cover.jpg',
    processFolder: 'assets/images/projects/project-26/'
  },
  'project-27': {
    title: 'Exhibition Project 07',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-27/cover.jpg',
    processFolder: 'assets/images/projects/project-27/'
  },
  'project-28': {
    title: 'Exhibition Project 08',
    category: 'EXHIBITION PROJECT',
    cover: 'assets/images/projects/project-28/cover.jpg',
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
const closeButton = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let lightboxImages = [];
let lightboxIndex = 0;

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
  nextButton.disabled =
    galleryEl.scrollLeft + galleryEl.clientWidth >= galleryEl.scrollWidth - 2;
}

function openLightbox(images, index) {
  if (!lightboxEl || !lightboxImageEl || !images.length) return;

  lightboxImages = images;
  lightboxIndex = Math.max(0, Math.min(index, images.length - 1));

  updateLightbox();

  lightboxEl.classList.add('is-open');
  lightboxEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');

  if (closeButton) closeButton.focus();
}

function updateLightbox() {
  if (!lightboxImages.length || !lightboxImageEl) return;

  const current = lightboxImages[lightboxIndex];

  lightboxImageEl.src = current.src;
  lightboxImageEl.alt = current.alt || '';

  if (lightboxPrev) {
    lightboxPrev.disabled = lightboxIndex === 0;
    lightboxPrev.hidden = lightboxImages.length <= 1;
  }

  if (lightboxNext) {
    lightboxNext.disabled = lightboxIndex === lightboxImages.length - 1;
    lightboxNext.hidden = lightboxImages.length <= 1;
  }
}

function closeLightbox() {
  if (!lightboxEl) return;

  lightboxEl.classList.remove('is-open');
  lightboxEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');

  if (lightboxImageEl) {
    lightboxImageEl.removeAttribute('src');
    lightboxImageEl.alt = '';
  }

  lightboxImages = [];
  lightboxIndex = 0;
}

function showEmptyState() {
  if (emptyEl) emptyEl.hidden = false;
  if (processNavEl) processNavEl.hidden = true;
}

async function probeImage(path) {
  return new Promise((resolve) => {
    const probe = new Image();

    probe.onload = () => resolve(path);
    probe.onerror = () => resolve(null);

    probe.src = path;
  });
}

async function findProcessImage(index) {
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];

  // Untuk proyek yang sudah memiliki daftar nama file khusus.
  if (Array.isArray(project.process)) {
    const filename = project.process[index - 1];
    if (!filename) return null;

    return probeImage(project.processFolder + filename);
  }

  // Untuk proyek yang belum memiliki daftar khusus:
  // cari process-1 sampai process-30 dengan beberapa ekstensi.
  const candidates = extensions.map((extension) =>
    `${project.processFolder}process-${index}.${extension}`
  );

  const results = await Promise.all(candidates.map(probeImage));
  return results.find(Boolean) || null;
}

async function loadProcessPhotos() {
  if (!galleryEl || !project) return;

  galleryEl.innerHTML = '';
  if (emptyEl) emptyEl.hidden = true;

  const max = Array.isArray(project.process)
    ? project.process.length
    : PROCESS_PHOTO_LIMIT;

  // Semua pengecekan gambar dilakukan paralel supaya tidak terasa
  // "loading terus" karena menunggu foto satu per satu.
  const paths = await Promise.all(
    Array.from({ length: max }, (_, i) => findProcessImage(i + 1))
  );

  const processImages = paths
    .filter(Boolean)
    .map((src, index) => ({
      src,
      alt: `${project.title} — proses ${index + 1}`
    }));

  processImages.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'process-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Buka foto proses ${index + 1}`);

    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.alt;
    image.loading = 'lazy';

    button.appendChild(image);
    galleryEl.appendChild(button);

    button.addEventListener('click', () => {
      openLightbox(processImages, index);
    });
  });

  if (!processImages.length) {
    showEmptyState();
  } else {
    updateProcessArrows();
  }
}

function setupEvents() {
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      galleryEl.scrollBy({
        left: -getProcessScrollAmount(),
        behavior: 'smooth'
      });
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      galleryEl.scrollBy({
        left: getProcessScrollAmount(),
        behavior: 'smooth'
      });
    });
  }

  if (galleryEl) {
    galleryEl.addEventListener('scroll', updateProcessArrows, {
      passive: true
    });
  }

  window.addEventListener('resize', updateProcessArrows);

  if (closeButton) {
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (event) => {
      event.stopPropagation();

      if (lightboxIndex > 0) {
        lightboxIndex--;
        updateLightbox();
      }
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (event) => {
      event.stopPropagation();

      if (lightboxIndex < lightboxImages.length - 1) {
        lightboxIndex++;
        updateLightbox();
      }
    });
  }

  if (lightboxEl) {
    lightboxEl.addEventListener('click', (event) => {
      if (event.target === lightboxEl) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!lightboxEl || !lightboxEl.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      closeLightbox();
      return;
    }

    if (event.key === 'ArrowLeft' && lightboxIndex > 0) {
      lightboxIndex--;
      updateLightbox();
    }

    if (
      event.key === 'ArrowRight' &&
      lightboxIndex < lightboxImages.length - 1
    ) {
      lightboxIndex++;
      updateLightbox();
    }
  });
}

function initProject() {
  if (!project) {
    document.title = 'Proyek Tidak Ditemukan | Andri Saputra';

    if (categoryEl) categoryEl.textContent = 'Proyek';
    if (titleEl) titleEl.textContent = 'Proyek Tidak Ditemukan';
    if (descriptionEl) {
      descriptionEl.textContent = 'Proyek yang kamu buka belum tersedia.';
    }

    if (coverEl) coverEl.style.display = 'none';

    showEmptyState();
    return;
  }

  document.title = `${project.title} | Andri Saputra`;

  if (categoryEl) categoryEl.textContent = project.category;
  if (titleEl) titleEl.textContent = project.title;
  if (descriptionEl) descriptionEl.textContent = project.description;

  if (coverEl) {
    coverEl.src = project.cover;
    coverEl.alt = project.title;

    coverEl.addEventListener('error', () => {
      coverEl.style.display = 'none';
    });
  }

  setupEvents();
  loadProcessPhotos();
}

initProject();
