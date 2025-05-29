$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,       // Ativa as setas
  dots: false,     // Desativa os pontos (bolinhas)
  navText: [
    "<i class='fa fa-chevron-left'></i>",   // seta esquerda
    "<i class='fa fa-chevron-right'></i>"   // seta direita
  ],
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1500: { items: 4 }
  }
});
