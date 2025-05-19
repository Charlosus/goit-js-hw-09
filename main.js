import { images } from './gallery-items.js'
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const container = document.querySelector('.gallery');

const createGallery = (images) => {
  const imgs = images.map(createImage);
  container.append(...imgs);
};

const createImage = ({ preview, original, description }) => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = preview;
  img.alt = description;

  link.appendChild(img);
  li.appendChild(link);

  return li;
};

// Tworzymy galerię w DOM
createGallery(images);

// Inicjalizujemy lightbox PO wstawieniu elementów do DOM
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});