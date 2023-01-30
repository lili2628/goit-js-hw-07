import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryCardEl = createGalleryCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCardEl);

galleryEl.addEventListener('click', onGalleryPictureClick);


function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
}

function onGalleryPictureClick(event) {
     event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const urlOriginalPicture = event.target.dataset.source;

    onOpenModalWindowWithGallaryPicture(urlOriginalPicture);
}

function onOpenModalWindowWithGallaryPicture(urlOriginalPicture) {
    const instance = basicLightbox.create(`
        <img
            width="1280"
            src="${urlOriginalPicture}"
            alt=""
        />
    `);
    
    instance.show();
    
    const visible = instance.visible();

    if (visible) {
       document.addEventListener('keydown', onModalKeypressEsc);
    }

    function onModalKeypressEsc(event){
        if (event.key === 'Escape') { 
            instance.close();
        }
    }
}
   

