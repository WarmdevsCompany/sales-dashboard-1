export let scrollToTop = (topOffset = 0) => {
  requestAnimationFrame(() => window.scrollTo(0, topOffset));
};
