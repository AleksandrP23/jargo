const initLazyVideo = () => {
  const triggerList = document.querySelectorAll('[data-video-modal]');
  const videoContainer = document.querySelector('[data-video-container]');

  if (!triggerList.length || !videoContainer) {
    return;
  }

  const clearVideo = () => {
    videoContainer.innerHTML = '';
  };

  triggerList.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const src = trigger.dataset.videoSrc;

      if (!src) {
        return;
      }

      videoContainer.innerHTML = `<iframe src="${src}" title="Видео" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.js-modal-close')) {
      clearVideo();
    }
  });
};

initLazyVideo();
