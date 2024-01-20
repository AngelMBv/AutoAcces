
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const banner = document.getElementById('banner');
  const bannerText = document.querySelector('.banner-text');
  
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
  
  banner.addEventListener('click', function () {
    bannerText.textContent = ''; // Borra el texto existente
  
    const text = "Select a Game";
    for (let i = 0; i < text.length; i++) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = text[i];
        letterSpan.style.animation = `letter-fade-in 0.5s ease-in-out ${i * 0.1}s forwards`;
        bannerText.appendChild(letterSpan);
    }
  });
  
  // Mostrar el banner después de un retraso
  setTimeout(() => {
    banner.style.display = 'block';
  }, 1000);
  });

      // parte de las cuadriculas de tarjetas
      document.addEventListener('DOMContentLoaded', function () {
        var zindex = 10;
    
        var cards = document.querySelectorAll('div.card');
        var cardsContainer = document.querySelector('div.cards');
    
        cards.forEach(function (card) {
            card.addEventListener('click', function (e) {
                var isShowing = card.classList.contains("show");
    
                if (cardsContainer.classList.contains("showing")) {
                    var showingCard = document.querySelector('div.card.show');
                    showingCard.classList.remove("show");
    
                    if (isShowing) {
                        cardsContainer.classList.remove("showing");
                    } else {
                        card.style.zIndex = zindex;
                        card.classList.add("show");
                    }
    
                    zindex++;
                } else {
                    cardsContainer.classList.add("showing");
                    card.style.zIndex = zindex;
                    card.classList.add("show");
    
                    zindex++;
                }
            });
    
            var readMoreButton = card.querySelector('a.btn');
            if (readMoreButton) {
                readMoreButton.addEventListener('click', function (e) {
                    e.stopPropagation(); // Detener la propagación del evento
                });
            }
        });
    
        // Agregar clase "loaded" para la animación de entrada
        cardsContainer.classList.add("loaded");
    });
    
    
      // Controlador del Banner
      document.addEventListener("DOMContentLoaded", function () {
                  var banner = document.getElementById("activityBanner");
                  var bannerText = document.getElementById("bannerText");
                  banner.style.opacity = 0; // Inicialmente, establece la opacidad del banner a 0
                  banner.style.transform = "translateY(-20px)"; // Establece una posición inicial arriba del banner
      
                  banner.addEventListener("click", function () {
                      var textToType = "Select Activity";
                      bannerText.innerHTML = ""; // Limpia el contenido actual
      
                      function typeText(index) {
                          if (index < textToType.length) {
                              bannerText.innerHTML += textToType.charAt(index);
                              index++;
                              setTimeout(function () {
                                  typeText(index);
                              }, 100); // Ajusta la velocidad de escritura
                          }
                      }
      
                      typeText(0);
                  });
      
                  setTimeout(function () {
                      banner.style.transition = "opacity 1s, transform 1s"; // Agrega transiciones para la animación de entrada
                      banner.style.opacity = 1;
                      banner.style.transform = "translateY(0)"; // Mueve el banner hacia su posición final
                  }, 1000); // Ajusta la duración del retraso según tus preferencias
              });