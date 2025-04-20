const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // Close all
    document.querySelectorAll(".accordion-content").forEach(item => {
      item.style.maxHeight = null;
    });
    document.querySelectorAll(".accordion-header").forEach(h => {
      h.classList.remove("active");
    });

    // Toggle current
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("active");
    }
  });
});