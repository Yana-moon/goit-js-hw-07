import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//

const galleryImage = document.querySelector(".gallery");

const createImg = ({ preview, original, description }) => {
return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
};

const arrImg = galleryItems.map(createImg).join("");

galleryImage.insertAdjacentHTML("beforeend", arrImg);

galleryImage.addEventListener("click", selectImage);

function selectImage(item) {
item.preventDefault();

if (item.target.nodeName !== "IMG") {
    return;
}

const instance = basicLightbox.create(
    `<img src="${item.target.dataset.source}" width="800" height="600">`,
    {
    onShow: (instance) => {
        document.addEventListener("keydown", closeImg);
        console.log("onShow", instance);
    },
    onClose: (instance) => {
        document.removeEventListener("keydown", closeImg);
        console.log("onClose", instance);
    },
    }
);

instance.show();

function closeImg(item) {
    if (item.code === "Escape") {
    instance.close();
    }
}
}
