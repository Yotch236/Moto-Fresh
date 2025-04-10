const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1 // triggers a bit sooner than 100% in view
});

document.querySelectorAll('.scroll-animate').forEach(el => {
  observer.observe(el);
});