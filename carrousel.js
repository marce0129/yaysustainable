document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel");
    
    carruseles.forEach(carrusel => {
      const imagenes = carrusel.querySelectorAll("img");
      const prevBtn = carrusel.querySelector(".prev");
      const nextBtn = carrusel.querySelector(".next");
      
      if (imagenes.length === 0) return;
      
      let index = 0;
      
      const mostrarImagen = (nuevoIndex) => {
        nuevoIndex = (nuevoIndex + imagenes.length) % imagenes.length;
        
        imagenes.forEach(img => {
          img.classList.remove("active");
        });
        
        imagenes[nuevoIndex].classList.add("active");
        index = nuevoIndex;
      };
      
      mostrarImagen(0);
      
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          mostrarImagen(index - 1);
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          mostrarImagen(index + 1);
        });
      }
      
      let intervalo = setInterval(() => {
        mostrarImagen(index + 1);
      }, 5000);
      
      carrusel.addEventListener("mouseenter", () => {
        clearInterval(intervalo);
      });
      
      carrusel.addEventListener("mouseleave", () => {
        intervalo = setInterval(() => {
          mostrarImagen(index + 1);
        }, 5000);
      });
    });
  });