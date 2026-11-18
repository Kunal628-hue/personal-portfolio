export function scrollProgress(top, viewport, start = .94, end = .46) {
  if (!Number.isFinite(top) || !Number.isFinite(viewport) || viewport <= 0) return 1;
  return Math.min(1, Math.max(0, (viewport * start - top) / (viewport * (start - end))));
}

const scenes = new Map();
let frame = 0;
function update() {
  frame = 0;
  const height = window.innerHeight;
  for (const [element, draw] of scenes) {
    const rect = element.getBoundingClientRect();
    draw(scrollProgress(rect.top, height), rect, height);
  }
}
function schedule() { if (!frame) frame = requestAnimationFrame(update); }
export function registerScrollScene(element, draw) {
  if (!scenes.size) {
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule);
  }
  scenes.set(element, draw);
  draw(scrollProgress(element.getBoundingClientRect().top, window.innerHeight), element.getBoundingClientRect(), window.innerHeight);
  const resize = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
  resize?.observe(element);
  document.fonts?.ready.then(schedule);
  return () => {
    resize?.disconnect(); scenes.delete(element);
    if (!scenes.size) {
      window.removeEventListener('scroll', schedule);window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);frame=0;
    }
  };
}

// Hold each panel briefly at the ends of the horizontal scene.
export function horizontalProgress(top, sceneHeight, viewport) {
  if (![top, sceneHeight, viewport].every(Number.isFinite) || viewport <= 0 || sceneHeight <= viewport) return 0;
  const travel = -top / (sceneHeight - viewport);
  return Math.min(1, Math.max(0, (travel - .12) / .76));
}
