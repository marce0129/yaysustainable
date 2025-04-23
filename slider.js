document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const originalImages = Array.from(slides.querySelectorAll("img"));
  
    Promise.all(originalImages.map(img => {
      return new Promise(resolve => {
        if (img.complete) resolve();
        else img.onload = resolve;
      });
    })).then(() => {
      originalImages.forEach(img => {
        const clone = img.cloneNode(true);
        slides.appendChild(clone);
      });
      const allImages = Array.from(slides.querySelectorAll("img"));
      const totalImages = allImages.length;
      const imageWidth = allImages[0].clientWidth;
      const totalScrollWidth = imageWidth * totalImages;
      let offset = 0;
      const speed = 1;
      function animate() {
        offset -= speed;
        const resetOffset = offset % (imageWidth * originalImages.length);
        slides.style.transform = `translateX(${resetOffset}px)`;
        requestAnimationFrame(animate);
      }
      slides.style.transform = `translateX(0px)`;
      animate();
    });
  });
  