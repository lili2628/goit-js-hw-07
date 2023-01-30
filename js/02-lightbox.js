import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryCardEl = createGalleryCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCardEl);

function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `       
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
        })
        .join('');
}

let gallery = new SimpleLightbox('.gallery a',
    {
        nav: false,
        close: false,
        overlayOpacity: 0.8,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });
