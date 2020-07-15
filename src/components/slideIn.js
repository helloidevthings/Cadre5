import inView from "in-view";

function run() {
  function animateCSS(el) {
    const animationCSS = el.dataset.animation;
    el.classList.add(`${animationCSS}`);
  }

  const { innerHeight } = window;
  inView("[data-animation]").on("enter", animateCSS);
  inView.offset({
    bottom: innerHeight / 5,
    top: innerHeight / 5,
  });

  inView.threshold(0.25);
}

export { run as slideIn };
