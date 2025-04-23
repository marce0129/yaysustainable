window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

/////////////

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => {
        bubble.classList.add('visible');
      });
    }, 500);

    bubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
        bubble.style.animationPlayState = 'paused';
        bubble.style.transform = 'scale(1.1)';
      });
      
      bubble.addEventListener('mouseleave', () => {
        bubble.style.animationPlayState = 'running';
        bubble.style.transform = 'scale(1)';
      });
    });
  });

