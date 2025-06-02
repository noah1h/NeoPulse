// header title animations
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-title');
  const textNodes = Array.from(header.childNodes);

  header.innerHTML = ''; // Clear content

  let wordIndex = 0;
  textNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/); // Split words + spaces
      words.forEach(word => {
        if (word.trim().length > 0 || word === ' ') {
          const span = document.createElement('span');
          span.textContent = word;
          span.classList.add('word');
          span.style.animationDelay = `${wordIndex * 0.15}s`;
          header.appendChild(span);
          wordIndex++;
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // If it's the portfolio-name span, wrap it as a "word"
      const span = document.createElement('span');
      span.innerHTML = node.outerHTML; // Keep the original span
      span.classList.add('word');
      span.style.animationDelay = `${wordIndex * 0.15}s`;
      header.appendChild(span);
      wordIndex++;
    }
  });
});
