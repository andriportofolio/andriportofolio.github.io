const projects = {
  iee: {
    title: 'Indonesia Energy & Engineering',
    category: 'Event & Exhibition',
    cover: 'assets/images/ieeandri.jpg',
    description: 'Dokumentasi proyek pameran Indonesia Energy & Engineering, dari persiapan hingga pelaksanaan di lapangan.',
    process: [
      // Tambahkan foto proses IEE di sini setelah file fotonya tersedia.
      // Contoh: 'assets/images/projects/iee/process-1.jpg'
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get('id') || 'iee';
const project = projects[projectId];

const titleEl = document.getElementById('project-title');
const categoryEl = document.getElementById('project-category');
const descriptionEl = document.getElementById('project-description');
const coverEl = document.getElementById('project-cover');
const galleryEl = document.getElementById('process-gallery');
const emptyEl = document.getElementById('empty-process');
const lightboxEl = document.getElementById('lightbox');
const lightboxImageEl = document.getElementById('lightbox-image');
const closeButton = document.getElementById('lightbox-close');

if (!project) {
  document.title = 'Proyek Tidak Ditemukan | Andri Saputra';
  categoryEl.textContent = 'Proyek';
  titleEl.textContent = 'Proyek Tidak Ditemukan';
  descriptionEl.textContent = 'Proyek yang kamu buka belum tersedia.';
  coverEl.style.display = 'none';
  emptyEl.hidden = false;
} else {
  document.title = `${project.title} | Andri Saputra`;
  categoryEl.textContent = project.category;
  titleEl.textContent = project.title;
  descriptionEl.textContent = project.description;
  coverEl.src = project.cover;
  coverEl.alt = project.title;

  if (project.process.length === 0) {
    emptyEl.hidden = false;
  } else {
    project.process.forEach((imagePath, index) => {
      const button = document.createElement('button');
      button.className = 'process-item';
      button.type = 'button';
      button.setAttribute('aria-label', `Buka foto proses ${index + 1}`);

      const image = document.createElement('img');
      image.src = imagePath;
      image.alt = `${project.title} — proses ${index + 1}`;
      image.loading = 'lazy';

      button.appendChild(image);
      galleryEl.appendChild(button);

      button.addEventListener('click', () => openLightbox(imagePath, image.alt));
    });
  }
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

closeButton.addEventListener('click', closeLightbox);

lightboxEl.addEventListener('click', (event) => {
  if (event.target === lightboxEl) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightboxEl.classList.contains('is-open')) {
    closeLightbox();
  }
});
