/* YSocial v4 site behaviour. No dependencies; every feature fails soft. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var isBlog = /\/blog(\/|$)/.test(location.pathname);

  /* ---------- theme ---------- */
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('ys-theme', t); } catch (e) {}
    var m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', t === 'light' ? '#f3f8fb' : '#07131b');
  }
  function initTheme() {
    var b = $('#ys-theme'); if (!b) return;
    b.addEventListener('click', function () { setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'); });
  }

  /* ---------- navigation ---------- */
  function initNav() {
    var nav = $('#ys-nav'); if (!nav) return;
    var burger = $('#ys-burger');
    function closeDrops(except) { $$('.ys-drop.open', nav).forEach(function (d) { if (d !== except) { d.classList.remove('open'); $('.ys-drop-btn', d).setAttribute('aria-expanded', 'false'); } }); }
    $$('.ys-drop', nav).forEach(function (d) {
      var btn = $('.ys-drop-btn', d);
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !d.classList.contains('open'); closeDrops(d);
        d.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      if (window.matchMedia('(hover: hover) and (min-width: 992px)').matches) {
        var t; d.addEventListener('mouseenter', function () { clearTimeout(t); closeDrops(d); d.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); });
        d.addEventListener('mouseleave', function () { t = setTimeout(function () { d.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }, 160); });
      }
    });
    doc.addEventListener('click', function (e) { if (!nav.contains(e.target)) closeDrops(); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrops(); setMenu(false); } });
    function setMenu(on) {
      nav.classList.toggle('menu-open', on); doc.body.classList.toggle('ys-lock', on);
      if (burger) { burger.setAttribute('aria-expanded', on ? 'true' : 'false'); var i = $('i', burger); if (i) i.className = on ? 'fas fa-times' : 'fas fa-bars'; }
    }
    if (burger) burger.addEventListener('click', function () { setMenu(!nav.classList.contains('menu-open')); });
    $$('.ys-menu a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth > 991) setMenu(false); });
    var bar = $('#ys-progress'), top = $('#ys-top'), ticking = false;
    function onScroll() {
      var y = window.pageYOffset || root.scrollTop, h = root.scrollHeight - root.clientHeight;
      nav.classList.toggle('is-scrolled', y > 8);
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
      if (top) top.classList.toggle('on', y > 700);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
    if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  }

  /* ---------- aurora backdrop ---------- */
  function initAurora() {
    if ($('#ys-aurora')) return;
    var a = doc.createElement('div'); a.id = 'ys-aurora'; a.setAttribute('aria-hidden', 'true');
    a.innerHTML = '<i></i><i></i><i></i>'; doc.body.insertBefore(a, doc.body.firstChild);
  }

  /* ---------- hero network canvas (hexagonal nodes, like the login) ---------- */
  function initNet() {
    var c = $('#ys-net'); if (!c || !c.getContext) return;
    var ctx = c.getContext('2d'), W = 0, H = 0, nodes = [], dpr = Math.min(window.devicePixelRatio || 1, 2), raf = 0, running = true;
    function css(n, f) { return getComputedStyle(root).getPropertyValue(n).trim() || f; }
    var col = { t: '#6dc3d0', v: '#8984cd', o: '#ff642a' };
    function resize() {
      var r = c.parentNode.getBoundingClientRect(); W = r.width; H = r.height;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(14, Math.min(46, Math.round(W * H / 24000))); nodes = [];
      for (var i = 0; i < n; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: 3 + Math.random() * 5, c: [col.t, col.v, col.t, col.o][i % 4], p: Math.random() * 6.28 });
    }
    function hex(x, y, r) { ctx.beginPath(); for (var i = 0; i < 6; i++) { var a = Math.PI / 3 * i + Math.PI / 6; ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a)); } ctx.closePath(); }
    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      var light = root.getAttribute('data-theme') === 'light', lim = Math.min(170, Math.max(110, W / 7));
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20; if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20; }
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < lim) { ctx.globalAlpha = (1 - d / lim) * (light ? .35 : .4); ctx.strokeStyle = light ? '#0f7487' : '#6dc3d0'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k], pulse = reduce ? 1 : 1 + Math.sin(t / 900 + n.p) * .18;
        ctx.globalAlpha = light ? .4 : .55; ctx.fillStyle = n.c; hex(n.x, n.y, n.r * pulse); ctx.fill();
        ctx.globalAlpha = .18; hex(n.x, n.y, n.r * pulse * 2.1); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (running && !reduce) raf = requestAnimationFrame(frame);
    }
    resize(); frame(0);
    window.addEventListener('resize', function () { resize(); if (reduce) frame(0); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { running = e[0].isIntersecting; if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); } }).observe(c);
    doc.addEventListener('visibilitychange', function () { running = !doc.hidden; if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); } });
  }

  /* ---------- article enhancements ---------- */
  function article() { return $('#maincontent'); }
  function slug(s) { return s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'); }

  function initHeadings() {
    var a = article(); if (!a || isBlog) return;
    var seen = {};
    $$('h2, h3', a).forEach(function (h) {
      if (h.closest('details, .ys-card, .ys-footer')) return;
      if (!h.id) { var id = slug(h.textContent) || 'section', n = id, i = 2; while (seen[n] || doc.getElementById(n)) n = id + '-' + i++; h.id = n; }
      seen[h.id] = 1;
      if (!$('.ys-anchor', h)) { var l = doc.createElement('a'); l.className = 'ys-anchor'; l.href = '#' + h.id; l.setAttribute('aria-label', 'Link to this section'); l.textContent = '#'; h.appendChild(l); }
    });
  }

  function initToc() {
    var a = article(); if (!a || isBlog || $('.ys-toc')) return;
    var hs = $$('h2', a).filter(function (h) { return !h.closest('details, .ys-card'); });
    if (hs.length < 3) return;
    var toc = doc.createElement('nav'); toc.className = 'ys-toc'; toc.setAttribute('aria-label', 'On this page');
    toc.innerHTML = '<b>On this page</b>' + hs.map(function (h) { return '<a href="#' + h.id + '">' + h.firstChild.textContent.trim() + '</a>'; }).join('');
    doc.body.appendChild(toc);
    if ('IntersectionObserver' in window) {
      var links = $$('a', toc), io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id); }); } });
      }, { rootMargin: '-84px 0px -70% 0px' });
      hs.forEach(function (h) { io.observe(h); });
    }
  }

  function initTables() {
    $$('#maincontent table').forEach(function (t) {
      if (t.parentNode.classList.contains('ys-table-wrap') || t.closest('.ys-no-wrap')) return;
      var w = doc.createElement('div'); w.className = 'ys-table-wrap'; t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
  }

  function copyText(txt, btn) {
    function done() { var o = btn.textContent; btn.textContent = 'Copied'; btn.classList.add('ok'); setTimeout(function () { btn.textContent = o; btn.classList.remove('ok'); }, 1400); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
    function fallback() { var t = doc.createElement('textarea'); t.value = txt; t.style.position = 'fixed'; t.style.opacity = '0'; doc.body.appendChild(t); t.select(); try { doc.execCommand('copy'); done(); } catch (e) {} doc.body.removeChild(t); }
  }
  function initCopy() {
    $$('div.highlighter-rouge, figure.highlight, #maincontent > pre, details pre').forEach(function (box) {
      var host = box.tagName === 'PRE' && box.parentNode.classList.contains('highlight') ? box.parentNode : box;
      if (host.querySelector('.ys-copy') || host.closest('.ys-cmd')) return;
      if (host.tagName === 'PRE' && !host.style.position) host.style.position = 'relative';
      var b = doc.createElement('button'); b.type = 'button'; b.className = 'ys-copy'; b.textContent = 'Copy'; b.setAttribute('aria-label', 'Copy code');
      b.addEventListener('click', function () { var p = host.tagName === 'PRE' ? host : $('pre', host); copyText((p || host).innerText.replace(/\s+$/, ''), b); });
      host.appendChild(b);
    });
    $$('.ys-cmd').forEach(function (c) {
      if ($('.ys-copy', c)) return;
      var b = doc.createElement('button'); b.type = 'button'; b.className = 'ys-copy'; b.textContent = 'Copy'; b.setAttribute('aria-label', 'Copy command');
      b.addEventListener('click', function () { copyText($('code', c).innerText.trim(), b); }); c.appendChild(b);
    });
  }

  function initDetails() {
    var list = $$('#maincontent details'); if (!list.length) return;
    list.forEach(function (d) {
      var s = $('summary', d); if (!s || s.hasAttribute('data-excerpt')) return;
      var p = $('p', d); if (!p) return;
      var t = p.textContent.replace(/\s+/g, ' ').trim(); if (t.length > 96) t = t.slice(0, 93).replace(/\s+\S*$/, '') + '…';
      s.setAttribute('data-excerpt', t);
    });
    if (list.length >= 3 && !$('.ys-expand')) {
      var bar = doc.createElement('div'); bar.className = 'ys-expand';
      bar.innerHTML = '<button type="button" data-a="open">Expand all</button><button type="button" data-a="close">Collapse all</button>';
      list[0].parentNode.insertBefore(bar, list[0]);
      bar.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; list.forEach(function (d) { if (d.parentNode === bar.parentNode) d.open = b.getAttribute('data-a') === 'open'; }); });
    }
    if (location.hash) { var t = doc.getElementById(location.hash.slice(1)); var d = t && t.closest('details'); if (d) d.open = true; }
  }

  /* ---------- carousel (+ dots, keys, lightbox). Blog posts keep their own scripts. ---------- */
  function initCarousels() {
    if (window.ysLegacyCarousel) return;
    var lb;
    function lightbox(src, alt) {
      if (!lb) { lb = doc.createElement('div'); lb.className = 'ys-lightbox'; lb.innerHTML = '<img alt="">'; lb.addEventListener('click', function () { lb.classList.remove('on'); }); doc.body.appendChild(lb); doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); }); }
      var i = $('img', lb); i.src = src; i.alt = alt || ''; lb.classList.add('on');
    }
    $$('.custom-carousel').forEach(function (c) {
      var items = $$('.carousel-item', c); if (!items.length) return;
      var cur = Math.max(0, items.findIndex(function (i) { return i.classList.contains('active'); })), dots = doc.createElement('div'), timer;
      dots.className = 'ys-dots';
      items.forEach(function (_, i) { var b = doc.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Slide ' + (i + 1)); b.addEventListener('click', function () { go(i); }); dots.appendChild(b); });
      c.appendChild(dots);
      function go(n) { cur = (n + items.length) % items.length; items.forEach(function (it, i) { it.classList.toggle('active', i === cur); }); $$('button', dots).forEach(function (b, i) { b.classList.toggle('on', i === cur); }); }
      var nx = $('.next', c), pv = $('.prev', c);
      if (nx) nx.addEventListener('click', function (e) { e.preventDefault(); go(cur + 1); });
      if (pv) pv.addEventListener('click', function (e) { e.preventDefault(); go(cur - 1); });
      c.setAttribute('tabindex', '0');
      c.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); });
      items.forEach(function (it) { var im = $('img', it); if (im) im.addEventListener('click', function () { lightbox(im.currentSrc || im.src, im.alt); }); });
      var sx = 0; c.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
      c.addEventListener('touchend', function (e) { var d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1)); }, { passive: true });
      go(cur);
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = $$('.ys-reveal'); if (!els.length) return;
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    root.classList.add('ys-armed');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- download page: highlight the installer for this OS ---------- */
  function initOS() {
    var boxes = $$('.download-box[data-os]'); if (!boxes.length) return;
    var ua = (navigator.userAgent || '') + ' ' + (navigator.platform || ''), os = /Win/i.test(ua) ? 'windows' : /Mac/i.test(ua) ? 'macos' : /Linux|X11/i.test(ua) && !/Android/i.test(ua) ? 'linux' : '';
    boxes.forEach(function (b) { if (b.getAttribute('data-os') === os) b.classList.add('is-mine'); });
    var label = $('#ys-detected'); if (label && os) label.textContent = { windows: 'Windows', macos: 'macOS', linux: 'Linux' }[os];
  }

  function ready(fn) { if (doc.readyState !== 'loading') fn(); else doc.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    root.classList.remove('no-js');
    [initTheme, initNav, initAurora, initNet, initHeadings, initToc, initTables, initCopy, initDetails, initCarousels, initReveal, initOS].forEach(function (f) { try { f(); } catch (e) { if (window.console) console.warn('ysocial-v4:', f.name, e); } });
  });
})();
