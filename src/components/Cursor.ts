const halo = document.querySelector("#halo") as HTMLDivElement;

let x = innerWidth / 2;
let y = innerHeight / 2;
let xSmooth = x;
let ySmooth = y;
let speed = 0;

const lerp = (min: number, max: number, t: number) => min * (1 - t) + max * t;
const d2 = (a: number, b: number) => a * a + b * b;

document.body.addEventListener("mousemove", (evt) => {
  halo.classList.remove("transparent");
  x = evt.clientX;
  y = evt.clientY;
  halo.style.left = `${evt.clientX}px`;
  halo.style.top = `${evt.clientY}px`;
});

const loop = () => {
  const oldXSmooth = xSmooth;
  const oldYSmooth = ySmooth;
  xSmooth = lerp(xSmooth, x, 0.05);
  ySmooth = lerp(ySmooth, y, 0.05);
  const speed =
    d2(xSmooth - oldXSmooth, ySmooth - oldYSmooth) /
    Math.min(innerWidth, innerHeight);
  console.log({ speed });
  halo.style.filter = `grayscale(${1 - 2 * speed})`;
  halo.style.left = `${xSmooth}px`;
  halo.style.top = `${ySmooth}px`;
  requestAnimationFrame(loop);
};
loop();
