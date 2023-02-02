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
    
    document.body.style.overflow = "hidden";


}

function onOpenModalWindowWithGallaryPicture(urlOriginalPicture) {
    const instance = basicLightbox.create(`
        <img
            width="1280"
            src="${urlOriginalPicture}"
            alt=""
        />
    `, {
        onShow: (instance) => { window.addEventListener('keydown', onModalKeypressEsc) },
        onClose: (instance) => { window.removeEventListener('keydown', onModalKeypressEsc) }
    });
    
    instance.show();


    function onModalKeypressEsc(event){
        if (event.code === 'Escape') { 
            onClose(instance);
        }
    }
}

