import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGallery() {
  return galleryItems
    .map(
      ({ preview, description, original }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img src="${preview}" alt="${description}" class="gallery__image">
   </a>
</div>`,
    )
    .join('');
}

galleryContainer.insertAdjacentHTML('afterbegin', createGallery());



function openOriginalImg(event) {
  window.addEventListener('keydown', closedOriginalImg);
  event.preventDefault();
  const galleryItem = galleryItems.find(
    ({ description }) => event.target.getAttribute('alt') === description,
  );
  const instance = basicLightbox.create(`<img src="${galleryItem.original}">`);
  instance.show();
}

function closedOriginalImg(event) {
  if (event.code === 'Escape') {
    document.querySelector('.basicLightbox').remove();
  }
  window.removeEventListener('keydown', closedOriginalImg);
}

galleryContainer.addEventListener('click', openOriginalImg);