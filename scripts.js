document.addEventListener('DOMContentLoaded', () => {
  const island = document.getElementById('dynamic-island');
  setTimeout(() => {
    island.style.transform = 'translateX(-50%) translateY(100px)';
    island.style.transition = 'transform 0.5s ease-out';
  }, 3000);
});
