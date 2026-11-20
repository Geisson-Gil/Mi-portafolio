(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const IMG = 'assets/img/';
  const ARR = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 10 10 2M4 2h6v6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';

  /* ================= DATOS DE PROYECTOS (textos copiados del diseño) ================= */
  const PROJECTS = [
    { slug:'postproduccion-audiovisual', n:'01', name:'Postproducción audiovisual', variant:'post',
      card:{ t:'Postproducción audiovisual', s:'Montaje · Color · VFX', img:'post-hero.jpg' },
      title:'CADA MONTAJE.<br>UNA EMOCIÓN.', text:'Historias que se sienten. Montaje, color y efectos visuales al servicio de una misma mirada.',
      tags:'MONTAJE / COLOR / VFX', hero:'post-hero.jpg',
      ideasTitle:'Ideas en escena.', cols:'617px 358px', gap:'70px',
      ideas:[
        { img:'post-umbral.jpg', h:'409px', title:'Umbral', desc:'Montaje rítmico, atmósfera y color para una historia entre la luz y la sombra.' },
        { img:'post-nocturna.jpg', h:'537px', contain:1, title:'', desc:'Composición visual', note:1 } ],
      processTitle:'Del material en bruto<br>a la emoción final.',
      steps:[['Encontrar la historia','Selección del material, intención narrativa y estructura de montaje.'],['Construir la emoción','Edición, diseño sonoro y composición de efectos visuales.'],['Dar el último matiz','Corrección de color, etalonaje y exportación para cada pantalla.']],
      tools:['Premiere Pro','DaVinci Resolve','After Effects'] },
    { slug:'realidad-aumentada', n:'02', name:'Realidad aumentada', variant:'ar',
      card:{ t:'Realidad aumentada', s:'Espacio real + capa digital', img:'ar-yiki.jpg' },
      title:'LO DIGITAL<br>HABITA AQUÍ.', text:'La realidad es solo el comienzo. Experiencias que conecten el espacio físico con lo inesperado.',
      tags:'ESPACIO REAL &nbsp;+&nbsp; CAPA DIGITAL', hero:'ar-hero.jpg', qr:'ar-qr-hero.png',
      ideasTitle:'Ideas en escena.', cols:'268px 1fr 268px', gap:'24px',
      ideas:[
        { img:'ar-qr1.png', h:'auto', contain:1, title:'Carro diseñado en 3D', desc:'' },
        { img:'ar-yiki.jpg', h:'409px', title:'', desc:'02 / EXPLORACIÓN ESPACIAL', center:1 },
        { img:'ar-qr2.png', h:'auto', contain:1, title:'Mini portafolio en 3D', desc:'' } ],
      toolsFirst:true,
      processTitle:'Entre lo que ves<br>y lo que imaginas.',
      steps:[['Leer el espacio','Contexto, escala, puntos de interacción y recorrido de la experiencia.'],['Diseñar la capa digital','Objetos tridimensionales, materiales y comportamiento en el entorno.'],['Probar en contexto','Iluminación, seguimiento y pruebas de uso en dispositivos reales.']],
      tools:['Unity','Eye jack','Blender','Adobe After effects'] },
    { slug:'modelado-3d-y-animacion', n:'03', name:'Modelado 3D y animación', variant:'3d',
      card:{ t:'Modelado 3D y animación', s:'Modelado · Lookdev · Motion', img:'3d-porsche.jpg' },
      title:'OTRAS<br>DIMENSIONES.', text:'Personajes, objetos y universos que nacen de una idea y cobran vida en tres dimensiones.',
      tags:'MODELADO / LOOKDEV / MOTION', hero:'3d-hero.jpg',
      ideasTitle:'Ideas en escena.', cols:'1fr 1fr', gap:'48px',
      ideas:[ { img:'3d-porsche.jpg', video:'3d-porsche.mp4', title:'Modelado de Porsche 911', desc:'' }, { img:'3d-animacion.jpg', video:'3d-animacion.mp4', title:'Animación 3D', desc:'' } ],
      processTitle:'Imaginar. Construir.<br>Dar vida.',
      steps:[['Del boceto al volumen','Referencias, blockout y modelado para definir la silueta.'],['De la superficie a la luz','UVs, materiales e iluminación para construir una atmósfera.'],['Del objeto a la vida','Rigging, animación y render; el movimiento completa el relato.']],
      tools:['Blender','Maya 3D','After Effects'] },
    { slug:'identidad-de-marca', n:'04', name:'Identidad de marca', variant:'identidad',
      card:{ t:'GEISON GIL — Identidad Visual', s:'Identidad visual · Manual de marca', img:'identidad-board.jpg' },
      title:'MARCAS CON<br>CARÁCTER.', text:'Sistemas visuales con una idea clara, una voz propia y el poder de permanecer.',
      tags:'ESTRATEGIA / IDENTIDAD / SISTEMA', hero:'identidad-hero.jpg', cap:['Arepas Los Andes','Un lenguaje visual de una tradición'],
      ideasTitle:'Ideas en escena.', cols:'810px', gap:'0',
      ideas:[ { img:'identidad-board.jpg', h:'465px', contain:1, title:'Geison Gil', desc:'Un lenguaje visual de formas puras y contrastes que se reconocen.' } ],
      processTitle:'Una idea clara.<br>Mil formas de expresarla.',
      steps:[['Encontrar la esencia','Territorio de marca, personalidad y concepto rector.'],['Crear un lenguaje','Logotipo, sistema tipográfico, paleta y recursos gráficos.'],['Construir coherencia','Aplicaciones, pruebas de escala y una guía para usar la identidad.']],
      tools:['Illustrator','Photoshop','InDesign','Figma'] },
    { slug:'diseno-web', n:'05', name:'Diseño web', variant:'web',
      card:{ t:'Diseño Web', s:'Diseño y Estructura · Trabajo académico', img:'web-hero.jpg' },
      title:'DISEÑO QUE<br>CONECTA.', text:'Interfaces intuitivas. Experiencias memorables. Del primer recorrido al último detalle.',
      tags:'UX &nbsp;/&nbsp; UI &nbsp;/&nbsp; PROTOTIPADO', hero:'web-hero.jpg', side:['INTUICIÓN.<br>ESTRUCTURA.<br>DETALLE.','DISEÑAR PARA<br>PERSONAS REALES.'],
      ideasTitle:'Ideas en escena.', cols:'1fr 1fr', gap:'60px',
      ideas:[ { img:'web-3copas.jpg', title:'3 Copas Bar', desc:'Arquitectura, espacio en blanco y una navegación que deja respirar.' },
              { img:'web-rememberr.jpg', title:'RememberR', desc:'Descubrir exposiciones y planear una visita sin perderse en el camino.' } ],
      processTitle:'Menos fricción.<br>Más intención.',
      steps:[['Entender el recorrido','Necesidades, arquitectura de información y flujos de usuario.'],['Diseñar la experiencia','Wireframes, sistema visual e interfaces adaptables.'],['Probar y afinar','Prototipos, revisión de accesibilidad y ajustes de interacción.']],
      tools:['Figma','FigJam'] },
    { slug:'fotografia', n:'06', name:'Fotografía', variant:'foto',
      card:{ t:'Fotografía', s:'Iluminación y composición · Trabajo académico', img:'foto-hero.jpg' },
      title:'LA LUZ<br>LO CAMBIA TODO.', text:'Una pausa. Una mirada. Historias que no necesitan palabras para quedarse.',
      tags:'EDITORIAL / RETRATO / HISTORIAS', hero:'foto-hero.jpg',
      ideasTitle:'Proyectos destacados', cols:'1fr 1fr', gap:'60px',
      ideas:[ { img:'foto-estilo.jpg', title:'Sesión de Estilo', desc:'Retratos que expresan personalidad, actitud y esencia a través de la imagen.' },
              { img:'foto-direccion.jpg', title:'Dirección & Expresión', desc:'Una exploración visual donde el movimiento, la iluminación y las emociones construyen historias.' } ],
      processTitle:'Observar primero.<br>Disparar después.',
      steps:[['Aprender a mirar','Concepto, localización y búsqueda de la luz adecuada.'],['Estar en el momento','Encuadre, exposición y dirección de la escena.'],['Revelar la intención','Selección, revelado y color para una serie visual coherente.']],
      tools:['Lightroom','Photoshop'] },
  ];

  /* ================= Cinta (E3) ================= */
  (() => {
    const set = ['Geisson Gil','2026','Portafolio'].map(t => `<span class="marquee__item"><img src="assets/logos/isotipo.png" alt="">${t}</span>`).join('');
    const one = `<div class="marquee__set">${set.repeat(4)}</div>`;
    $('#marquee').innerHTML = one + one;
  })();

  /* ================= Tarjetas del carrusel ================= */
  $('#projectList').innerHTML = PROJECTS.map(p => `
    <li><a class="pcard" href="#proyecto/${p.slug}"><span class="pcard__in">
      <span class="pcard__img"><img src="${IMG}${p.card.img}" alt="${p.name}"></span>
      <span class="pcard__body"><span class="pcard__t">${p.card.t}</span><span class="pcard__s">${p.card.s}</span></span>
    </span></a></li>`).join('');

  const car = $('#carousel'), cards = $$('.pcard', car);
  function curve() {
    if (innerWidth <= 720) return;
    const r = car.getBoundingClientRect(), cx = r.left + r.width / 2;
    cards.forEach(c => {
      const b = c.getBoundingClientRect(), d = ((b.left + b.width / 2) - cx) / (r.width / 2);
      c.style.setProperty('--sy', (1 + 0.38 * d * d).toFixed(3));
      c.style.setProperty('--sk', (-5 * d).toFixed(2) + 'deg');
    });
  }
  let curveTick = false;
  car.addEventListener('scroll', () => { if (!curveTick) { curveTick = true; requestAnimationFrame(() => { curve(); curveTick = false; }); } }, { passive: true });
  addEventListener('resize', curve);
  // arrastrar con el mouse
  let down = false, sx = 0, sl = 0, moved = false;
  car.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = car.scrollLeft; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; car.classList.add('is-drag'); } car.scrollLeft = sl - dx; });
  addEventListener('pointerup', () => { if (!down) return; down = false; car.classList.remove('is-drag'); });
  car.addEventListener('click', e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  function initCarousel() {
    if (innerWidth > 720) { const c = cards[4]; car.scrollLeft = c.offsetLeft - (car.clientWidth - c.offsetWidth) / 2 + 12; }
    curve();
  }

  /* ================= Detalle de proyecto ================= */
  function renderProject(i) {
    const p = PROJECTS[i], v = p.variant;
    let hero = '';
    const eyebrow = `<span class="h-eyebrow">${p.n} / ${p.name}</span>`;
    const title = `<h1 class="h-title">${p.title}</h1>`;
    const text = `<p class="h-text">${p.text}</p>`;
    const tags = `<p class="h-tags">${p.tags}</p>`;
    const media = `<div class="h-media"><img src="${IMG}${p.hero}" alt="${p.name}" data-parallax="0.05"></div>`;
    if (v === 'web') hero = eyebrow + title + text + media + `<div class="h-side">${p.side[0]}<b>${p.side[1]}</b></div>` + tags;
    else if (v === 'foto') hero = media + eyebrow + title + text + tags;
    else if (v === 'identidad') hero = eyebrow + title + text + `<a class="btn btn--orange" href="#" data-scroll="#ideas">Explorar proyectos <svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" stroke-width="2"/></svg></a>` + tags + media + `<div class="h-cap"><h3>${p.cap[0]}</h3><p>${p.cap[1]}</p></div>`;
    else if (v === 'ar') hero = eyebrow + title + text + tags + media + `<div class="h-qr"><img src="${IMG}${p.qr}" alt="Código QR de realidad aumentada"><p>Escanea el codigo, descalga la app y apunta en la imagen</p></div>`;
    else hero = eyebrow + title + text + media + tags;

    const ideas = `<div class="ideas" style="grid-template-columns:${p.cols};gap:${p.gap}">` + p.ideas.map(it => `
      <figure class="idea reveal"${it.center ? ' style="text-align:center"' : ''}>
        <div class="idea__img${it.contain ? ' idea__img--contain' : ''}${it.video ? ' idea__img--video' : ''}" style="--h:${it.h || '409px'}"${it.video ? ' tabindex="0" role="button" aria-label="Reproducir video: ' + it.title + '"' : ''}>${it.video
          ? `<video muted loop playsinline preload="metadata" poster="${IMG}${it.img}" src="assets/video/${it.video}"></video><span class="vplay" aria-hidden="true"></span>`
          : `<img src="${IMG}${it.img}" alt="${it.title || p.name}" loading="lazy">`}</div>
        ${it.title ? `<h3>${it.title}</h3>` : ''}${it.desc ? `<p>${it.desc}</p>` : ''}
      </figure>`).join('') + '</div>';

    const sec1 = `<section class="pd-sec" id="ideas"><div class="pd-sec__head reveal"><div><span class="eyebrow">01 / SELECCIÓN VISUAL</span><h2 class="h2">${p.ideasTitle}</h2></div><p class="pd-note">Exploraciones conceptuales</p></div>${ideas}</section>`;
    const process = `<section class="pd-process"><span class="eyebrow reveal">02 / PROCESO CREATIVO</span><h2 class="h2 reveal">${p.processTitle}</h2><div class="steps">` +
      p.steps.map((s, k) => `<div class="step reveal" style="--d:${k * .08}s"><i>0${k + 1}</i><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('') + '</div></section>';
    const tools = `<section class="pd-tools"><span class="eyebrow reveal">03 / HERRAMIENTAS</span><h2 class="h2 h2--s reveal">La técnica al servicio de la idea.</h2><div class="chips">` +
      p.tools.map((t, k) => `<span class="chip reveal" style="--d:${k * .06}s">${t}</span>`).join('') + '</div></section>';
    const more = `<section class="pd-more"><div class="pd-more__head reveal"><div><span class="eyebrow">SIGUE EXPLORANDO</span><h2 class="h2">Otra forma de mirar.</h2></div><a class="btn btn--orange" href="#contacto">Comencemos un proyecto <svg class="arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 10 10 2M4 2h6v6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></a></div><div class="pd-more__grid">` +
      PROJECTS.map((q, k) => `<a class="more${k === i ? ' is-current' : ''}" href="#proyecto/${q.slug}"><span>${q.name}</span>${k === i ? '' : ARR}</a>`).join('') + '</div></section>';

    $('#projectDetail').innerHTML = `<div class="pd"><section class="hero hero--${v}${v === 'foto' ? ' hero--full' : ''}">${hero}</section>` +
      (p.toolsFirst ? sec1 + tools + process : sec1 + process + tools) + more + '</div>';
  }

  /* ================= Router por hash (GitHub Pages) ================= */
  const pages = $$('.page');
  let current = null, switching = false;
  function parse() {
    const h = decodeURIComponent(location.hash.replace(/^#/, '')) || 'home';
    if (h.startsWith('proyecto/')) { const i = PROJECTS.findIndex(p => p.slug === h.split('/')[1]); return i < 0 ? { page: 'proyectos' } : { page: 'proyecto', i }; }
    return { page: pages.some(p => p.dataset.page === h) ? h : 'home' };
  }
  function show(route) {
    const target = pages.find(p => p.dataset.page === route.page);
    if (route.page === 'proyecto') renderProject(route.i);
    const swap = () => {
      pages.forEach(p => { p.hidden = p !== target; p.classList.remove('is-visible'); });
      scrollTo(0, 0);
      $$('.reveal', target).forEach(el => el.classList.remove('is-in'));
      requestAnimationFrame(() => requestAnimationFrame(() => {
        target.classList.add('is-visible');
        observeReveals(target);
        if (route.page === 'proyectos') initCarousel();
        setNav(route.page === 'proyecto' ? 'proyectos' : route.page);
        current = route.page; switching = false;
      }));
      $('#contenido').focus({ preventScroll: true });
    };
    const old = pages.find(p => !p.hidden);
    if (old && old !== target && !reduce) { switching = true; old.classList.remove('is-visible'); setTimeout(swap, 250); } else swap();
  }

  /* ================= Menú: hover (E4) + indicador deslizante (N5) ================= */
  const nav = $('#nav'), ind = $('.nav__indicator'); let activeRoute = 'home';
  function moveInd(a) {
    if (!a || getComputedStyle(ind).display === 'none') return;
    ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`;
    $$('a', nav).forEach(x => x.classList.toggle('is-on', x === a));
  }
  function setNav(route) {
    activeRoute = route;
    $$('a', nav).forEach(a => a.toggleAttribute('aria-current', a.dataset.route === route));
    moveInd($(`a[data-route="${route}"]`, nav));
  }
  $$('a', nav).forEach(a => {
    a.addEventListener('mouseenter', () => moveInd(a)); a.addEventListener('focus', () => moveInd(a));
  });
  nav.addEventListener('mouseleave', () => moveInd($(`a[data-route="${activeRoute}"]`, nav)));
  addEventListener('resize', () => moveInd($(`a[data-route="${activeRoute}"]`, nav)));
  const toggle = $('#menuToggle'), setMenu = o => { toggle.setAttribute('aria-expanded', o); nav.classList.toggle('is-open', o); };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* Scroll interno (botón "Explorar proyectos" de Identidad) */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-scroll]'); if (!b) return;
    e.preventDefault(); const t = $(b.dataset.scroll); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });

  /* ================= Aparición al hacer scroll (N1) ================= */
  let io;
  function observeReveals(scope) {
    const els = $$('.reveal', scope);
    if (reduce || !('IntersectionObserver' in window)) return els.forEach(e => e.classList.add('is-in'));
    io = io || new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ================= Home: segundo estado (E5, 800 ms) ================= */
  const stage = $('#homeStage');
  if (matchMedia('(hover:hover)').matches) {
    stage.addEventListener('mouseenter', () => stage.classList.add('is-alt'));
    stage.addEventListener('mouseleave', () => stage.classList.remove('is-alt'));
  }

  /* ================= Parallax leve ≤ 20 px, solo escritorio (N6) ================= */
  if (!reduce && matchMedia('(min-width:1101px) and (hover:hover)').matches) {
    let t = false;
    const run = () => {
      $$('[data-parallax]').forEach(el => {
        const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
        const off = Math.max(-20, Math.min(20, (r.top + r.height / 2 - innerHeight / 2) * -parseFloat(el.dataset.parallax)));
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0) scale(1.06)`;
      }); t = false;
    };
    addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(run); } }, { passive: true });
  }


  /* ================= Videos: se reproducen al pasar el mouse y se pausan al salir ================= */
  const vplay = v => { const p = v.play(); if (p && p.catch) p.catch(() => {}); v.parentElement.classList.add('is-playing'); };
  const vpause = v => { v.pause(); v.parentElement.classList.remove('is-playing'); };
  const vbox = e => e.target.closest && e.target.closest('.idea__img--video');
  document.addEventListener('pointerenter', e => { const b = vbox(e); if (b && e.pointerType === 'mouse') vplay($('video', b)); }, true);
  document.addEventListener('pointerleave', e => { const b = vbox(e); if (b && e.pointerType === 'mouse') vpause($('video', b)); }, true);
  document.addEventListener('focusin', e => { const b = vbox(e); if (b) vplay($('video', b)); });
  document.addEventListener('focusout', e => { const b = vbox(e); if (b) vpause($('video', b)); });
  document.addEventListener('click', e => {           // en pantallas táctiles: tocar alterna reproducir/pausar
    const b = vbox(e); if (!b) return; const v = $('video', b);
    if (v.paused) { $$('.idea__img--video video').forEach(o => o !== v && vpause(o)); vplay(v); } else vpause(v);
  });

  /* ================= Arranque ================= */
  function start() { show(parse()); }
  addEventListener('hashchange', () => { if (!switching) show(parse()); });
  (document.fonts && document.fonts.ready) ? document.fonts.ready.then(start) : addEventListener('load', start);
})();
