(function () {
    const width = window.innerWidth;
    const duration = map(width, 360, 1920, 1.5, 0.75);
    const tl = gsap.timeline();
    const html = document.querySelector(".no-overflow")
    tl.from("#name", { duration, x: width, ease: "back.inOut", opacity: 0});
    tl.from("#description", {duration: 0.25, opacity:0, y: -5, ease: "power2.in" });
    tl.from(".bottom-half", {duration:0.5, opacity:0, y:200, ease: "power1.in", onComplete:toggleOverflow, onCompleteParams: [html]}, "-=0.5");
    tl.from("#art", {duration:0.25, opacity:0, y:30, ease:"back.out"});
    tl.from("#work", {duration:0.25, opacity:0, y:20, ease:"back.out"}, "-=0.12");

})()

function toggleOverflow(element) {
  element.classList.toggle("no-overflow");
}

function map(n, start1, stop1, start2, stop2) {
    const newVal = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (start2 < stop2) {
        return constrain(newVal, start2, stop2);
      } else {
        return constrain(newVal, stop2, start2);
      }
}

function constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
}