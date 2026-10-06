// Bot Win Double — comportamento do site (JS puro)
(function () {
  "use strict";

  // Botão "rolar para o topo"
  var scrollTop = document.getElementById("scroll-top");
  if (scrollTop) {
    var toggle = function () {
      if (window.scrollY > 300) scrollTop.classList.add("is-visible");
      else scrollTop.classList.remove("is-visible");
    };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();

    var goTop = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
    scrollTop.addEventListener("click", goTop);
    scrollTop.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTop(); }
    });
  }

  /*
   * COMO ADICIONAR O VÍDEO DO YOUTUBE:
   * 1) Troque a string abaixo pelo ID do vídeo (ex.: "dQw4w9WgXcQ").
   * 2) Salve e pronto — o espaço reservado vira o player.
   */
  var YOUTUBE_ID = "";

  var slot = document.getElementById("video-slot");
  if (slot) {
    if (YOUTUBE_ID) {
      slot.hidden = false;
      slot.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + YOUTUBE_ID + '" ' +
        'title="Bot Win Double" allowfullscreen ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
    }
  }
})();
