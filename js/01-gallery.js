import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);

console.log(galleryItems);

galleryContainer.addEventListener('click', onGalleryItemClick);
let largeImg;

function onGalleryItemClick(e) {
  e.preventDefault();
  const isTargetImg = e.target.classList.contains('gallery__image');
  if (!isTargetImg) return;

  const largeImgAncor = e.target.dataset.source;

  largeImg = basicLightbox.create(`
        <img src="${largeImgAncor}" width="800" height="600">
    `);

  largeImg.show();

  document.addEventListener('keydown', onModalWindowEscapePress);
}

function onModalWindowEscapePress(e) {
  if (e.code === 'Escape') {
    largeImg.close();
    document.removeEventListener('keydown', onModalWindowEscapePress);
  }
}
