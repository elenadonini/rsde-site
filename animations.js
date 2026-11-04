/* RSDE – animations (trial). Remove the <script src="animations.js"> line in index.html to switch off. */
(() => {
  document.documentElement.classList.add('anim');
  // Hero illustration
  const w = document.querySelector('.hero .wrap');
  if (w && !document.querySelector('.orbitviz')) {
    w.insertAdjacentHTML('beforeend', `
<svg class="orbitviz" viewBox="0 0 440 440" aria-hidden="true">
  <defs>
    <radialGradient id="pl" cx="38%" cy="35%" r="70%"><stop offset="0" stop-color="#e6f3ee"/><stop offset=".55" stop-color="#b9d7c9"/><stop offset="1" stop-color="#1f7a5c"/></radialGradient>
    <linearGradient id="bm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0068b4" stop-opacity=".7"/><stop offset="1" stop-color="#0068b4" stop-opacity="0"/></linearGradient>
  </defs>
  <circle class="pulse" cx="220" cy="220" r="150" fill="none" stroke="#0068b4" stroke-width="1.5"/>
  <circle class="pulse p2" cx="220" cy="220" r="150" fill="none" stroke="#1f7a5c" stroke-width="1.5"/>
  <circle cx="220" cy="220" r="110" fill="url(#pl)"/>
  <path class="layer" d="M128 200 Q220 180 312 200" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
  <path class="layer" d="M118 232 Q220 214 322 232" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
  <path class="layer" d="M132 264 Q220 250 308 264" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/>
  <g class="ring"><ellipse cx="220" cy="220" rx="200" ry="70" transform="rotate(-24 220 220)" fill="none" stroke="#6ab04c" stroke-width="2.5" stroke-opacity=".8"/></g>
  <circle cx="220" cy="220" r="185" fill="none" stroke="#0068b4" stroke-opacity=".18" stroke-dasharray="3 7"/>
  <g class="sat">
    <polygon class="beam" points="220,44 196,120 244,120" fill="url(#bm)"/>
    <g transform="translate(220 35)">
      <rect x="-7" y="-6" width="14" height="12" rx="2" fill="#0068b4"/>
      <rect x="-28" y="-3" width="17" height="6" fill="#004f8a"/><rect x="11" y="-3" width="17" height="6" fill="#004f8a"/>
      <line x1="0" y1="6" x2="0" y2="12" stroke="#0068b4" stroke-width="2"/>
    </g>
  </g>
</svg>`);
  }
  // Reveal on scroll
  const targets = document.querySelectorAll('section .sec-head, section .sec-intro, .card, .mini, .person, .news-item, .callout, .apps, .vision, ol.pubs li, .contact > *, .chips-people');
  targets.forEach(t => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) { targets.forEach(t => t.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const sib = [...e.target.parentElement.children].filter(c => c.classList.contains('reveal'));
      e.target.style.transitionDelay = Math.min(sib.indexOf(e.target), 6) * 70 + 'ms';
      e.target.classList.add('in'); io.unobserve(e.target);
    }
  }), {threshold: .12, rootMargin: '0px 0px -40px 0px'});
  targets.forEach(t => io.observe(t));
})();
