const initArticleTooltips = () => {
  const root = document.querySelector('[data-article-tooltips]');
  if (!root) {
    return;
  }

  const dots = Array.from(root.querySelectorAll('.article-body__tooltip-dot'));
  const popup = root.querySelector('[data-tooltip-popup]');
  const popupTitle = root.querySelector('[data-tooltip-popup-title]');
  const popupText = root.querySelector('[data-tooltip-popup-text]');

  if (!dots.length || !popup || !popupTitle || !popupText) {
    return;
  }

  const setPopup = (dot) => {
    popupTitle.textContent = dot.dataset.tooltipTitle ?? '';
    popupText.textContent = dot.dataset.tooltipText ?? '';

    dots.forEach((item) => item.classList.remove('article-body__tooltip-dot--active'));
    dot.classList.add('article-body__tooltip-dot--active');

    const rootRect = root.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    const localLeft = dotRect.left - rootRect.left;
    const localTop = dotRect.top - rootRect.top;

    let left = localLeft - popupRect.width - 18;
    let top = localTop - (popupRect.height / 2) + (dotRect.height / 2);

    const minLeft = 10;
    const minTop = 10;
    const maxLeft = rootRect.width - popupRect.width - 10;
    const maxTop = rootRect.height - popupRect.height - 10;

    left = Math.min(Math.max(left, minLeft), maxLeft);
    top = Math.min(Math.max(top, minTop), maxTop);

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  };

  dots.forEach((dot) => {
    dot.addEventListener('click', () => setPopup(dot));
  });

  const activeDot = root.querySelector('.article-body__tooltip-dot--active') ?? dots[0];
  setPopup(activeDot);
};

initArticleTooltips();
