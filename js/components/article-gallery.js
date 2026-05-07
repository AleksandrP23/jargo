import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initArticleGallery = () => {
  const galleryEl = document.querySelector('[data-article-gallery-swiper]');
  const currentEl = document.querySelector('[data-gallery-current]');
  const totalEl = document.querySelector('[data-gallery-total]');

  if (!galleryEl) {
    return;
  }

  const swiper = new Swiper(galleryEl, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      prevEl: '.article-body__gallery-nav--prev',
      nextEl: '.article-body__gallery-nav--next',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  const updateCounter = () => {
    if (!currentEl || !totalEl) {
      return;
    }

    const current = (swiper.realIndex ?? 0) + 1;
    const total = swiper.slides.length;
    currentEl.textContent = String(current).padStart(2, '0');
    totalEl.textContent = String(total).padStart(2, '0');
  };

  swiper.on('init', updateCounter);
  swiper.on('slideChange', updateCounter);
  updateCounter();
};

initArticleGallery();
