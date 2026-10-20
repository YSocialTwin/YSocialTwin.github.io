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
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var o = $('.ys-drop.open .ys-drop-btn', nav); closeDrops(); setMenu(false); if (o && nav.contains(doc.activeElement)) o.focus(); } });
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
    var a = article(); if (!a || isBlog || $('.ys-toc') || $('.ys-home') || !$('.ys-article', a)) return;
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


  function initJump() {
    var art = $('.ys-article'); if (!art || art.classList.contains('ys-moved') || art.querySelector('.ys-jump')) return;
    var hs = $$('h2[id]', art).filter(function (h) { return !h.classList.contains('ys-tldr-title'); });
    if (hs.length < 4) return;
    var ul = doc.createElement('ul'); ul.className = 'ys-jump'; ul.setAttribute('aria-label', 'On this page');
    ul.innerHTML = hs.map(function (h) { var t = h.textContent.replace(/[#\u00b6]/g, '').trim(); return '<li style="display:contents"><a href="#' + h.id + '">' + t + '</a></li>'; }).join('');
    var anchor = $('.ys-lede', art) || $('.ys-tldr', art);
    if (anchor && anchor.parentNode === art) anchor.insertAdjacentElement('afterend', ul); else art.insertBefore(ul, art.firstChild);
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
    $$('pre').forEach(function (p) { if (p.scrollWidth > p.clientWidth + 1) p.setAttribute('tabindex', '0'); });
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


  /* ---------- tabs (install page). Without JS every panel is simply shown. ---------- */
  function initTabs() {
    $$('[data-tabs]').forEach(function (box) {
      var panels = $$(':scope > .ys-tabpanel', box); if (!panels.length) return;
      var cards = box.hasAttribute('data-cards'); var list = doc.createElement('div'); list.className = 'ys-tablist' + (cards ? ' as-cards' : ''); list.setAttribute('role', 'tablist'); list.setAttribute('aria-label', box.getAttribute('data-label') || 'Sections');
      var tabs = panels.map(function (p, i) {
        var b = doc.createElement('button'); b.type = 'button'; b.className = 'ys-tab'; b.id = 'tab-' + p.id; b.setAttribute('role', 'tab');
        b.setAttribute('aria-controls', p.id);
        if (cards && p.getAttribute('data-desc')) {
          b.className += ' ys-tabcard';
          b.innerHTML = '<span class="ys-pill ' + (p.getAttribute('data-pill') || '') + '">' + p.getAttribute('data-kicker') + '</span><strong>' + (p.getAttribute('data-title') || p.id) + '</strong><span class="ys-tabdesc">' + p.getAttribute('data-desc') + '</span>';
        } else b.textContent = p.getAttribute('data-title') || p.id;
        p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id); p.setAttribute('tabindex', '0');
        b.addEventListener('click', function () { show(i, true); });
        b.addEventListener('keydown', function (e) {
          var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? panels.length - 1 : null;
          if (n === null) return; e.preventDefault(); n = (n + panels.length) % panels.length; show(n, true); tabs[n].focus();
        });
        list.appendChild(b); return b;
      });
      box.insertBefore(list, box.firstChild); box.classList.add('is-tabbed');
      function show(i, push) {
        panels.forEach(function (p, k) { p.classList.toggle('on', k === i); tabs[k].setAttribute('aria-selected', k === i ? 'true' : 'false'); tabs[k].setAttribute('tabindex', k === i ? '0' : '-1'); });
        if (push && history.replaceState) history.replaceState(null, '', '#' + panels[i].id);
      }
      function fromHash() {
        var id = decodeURIComponent(location.hash.slice(1)), t = id && doc.getElementById(id), i = -1;
        if (t) panels.forEach(function (p, k) { if (p === t || p.contains(t)) i = k; });
        if (i >= 0) { show(i, false); if (t !== panels[i]) t.scrollIntoView(); return true; }
        return false;
      }
      var os = doc.documentElement.getAttribute('data-os');
      if (!fromHash()) show(0, false);
      window.addEventListener('hashchange', fromHash);
      $$('a[href^="#"]', doc).forEach(function (a) { var id = a.getAttribute('href').slice(1); if (panels.some(function (p) { return p.id === id; })) a.addEventListener('click', function () { setTimeout(fromHash, 0); var b = box.getBoundingClientRect(); window.scrollTo({ top: b.top + window.pageYOffset - 90, behavior: reduce ? 'auto' : 'smooth' }); }); });
    });
  }

  /* ---------- publication filter (resources page) ---------- */
  function initDataTables() {
    $$('#maincontent table.ys-data').forEach(function (t, ti) {
      var body = t.tBodies[0]; if (!body) return;
      var rows = $$('tr', body), heads = $$('thead th', t), id = 'ys-dt-' + ti;
      var label = t.getAttribute('data-label') || 'Filter rows';
      var yc = t.getAttribute('data-year-col'); yc = yc === null ? -1 : parseInt(yc, 10);
      var bar = doc.createElement('div'); bar.className = 'ys-filter';
      var h = '<label class="sr-only" for="' + id + '-q">' + label + '</label><input id="' + id + '-q" type="search" placeholder="' + (t.getAttribute('data-placeholder') || 'Search') + '" autocomplete="off">';
      var years = {};
      if (yc > -1) rows.forEach(function (r) { var y = r.cells[yc].textContent.trim(); if (y) years[y] = 1; });
      if (yc > -1) h += '<label class="sr-only" for="' + id + '-y">Filter by year</label><select id="' + id + '-y"><option value="">All years</option>' + Object.keys(years).sort().reverse().map(function (y) { return '<option>' + y + '</option>'; }).join('') + '</select>';
      h += '<span class="ys-count" role="status" aria-live="polite"></span>';
      bar.innerHTML = h;
      var host = t.closest('.ys-table-wrap') || t; host.parentNode.insertBefore(bar, host);
      var q = $('#' + id + '-q', bar), ys = yc > -1 ? $('#' + id + '-y', bar) : null, c = $('.ys-count', bar);
      rows.forEach(function (r, i) { r._i = i; r._t = r.textContent.toLowerCase(); });
      function apply() {
        var term = q.value.toLowerCase().trim(), yy = ys ? ys.value : '', n = 0;
        rows.forEach(function (r) {
          var ok = (!yy || r.cells[yc].textContent.trim() === yy) && (!term || r._t.indexOf(term) > -1);
          r.hidden = !ok; if (ok) n++;
        });
        c.textContent = n + ' of ' + rows.length;
      }
      q.addEventListener('input', apply); if (ys) ys.addEventListener('change', apply); apply();
      function key(r, col) {
        var cell = r.cells[col], v = cell.getAttribute('data-v'); if (v === null) v = cell.textContent.trim();
        var num = parseFloat(String(v).replace(/[^0-9.\-]/g, ''));
        return (!isNaN(num) && /^[\sv0-9.,\-]+$/i.test(String(v))) ? num : String(v).toLowerCase();
      }
      heads.forEach(function (th, col) {
        if (th.hasAttribute('data-nosort')) return;
        var txt = th.textContent; th.textContent = '';
        var btn = doc.createElement('button'); btn.type = 'button'; btn.className = 'ys-sort'; btn.textContent = txt;
        th.appendChild(btn); th.setAttribute('aria-sort', 'none');
        btn.addEventListener('click', function () {
          var dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
          heads.forEach(function (o) { if (o.hasAttribute('aria-sort')) o.setAttribute('aria-sort', 'none'); });
          th.setAttribute('aria-sort', dir);
          var m = dir === 'ascending' ? 1 : -1;
          rows.slice().sort(function (a, b) {
            var x = key(a, col), y = key(b, col);
            if (x < y) return -m; if (x > y) return m; return a._i - b._i;
          }).forEach(function (r) { body.appendChild(r); });
        });
      });
    });
  }

  /* Landing page: animated simulated feed with rotating discussion threads (illustrative content). */
  function initFeed() {
    var feed = document.querySelector('.ys-feed[data-feed]');
    if (!feed || !window.Promise) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var COL = { teal: 'var(--teal)', violet: 'var(--violet)', orange: 'var(--orange)', green: 'var(--ok)' };
    var T = [
      { tag: '#urbanplanning', posts: [
        { n: 'Marta', h: 'marta_rome', c: 'teal', t: '4m', x: 'New bike lanes downtown finally approved. Curious how the shops on the corner will react', g: '#urbanplanning', r: 12, l: 48, s: 7 },
        { n: 'Luca', h: 'luca_b', c: 'violet', t: '2m', x: 'Less parking means fewer customers. Nobody asked the people who work here.', r: 4, l: 21, s: 2 },
        { n: 'Sara', h: 'sara_k', c: 'orange', t: '1m', x: 'Two good points here. A pilot on one street might settle it', g: '#evidence', r: 1, l: 9, s: 1 },
        { n: 'Dario', h: 'dario_m', c: 'green', t: 'now', x: 'Pilot for three months, publish the footfall data, then vote. Deal?', r: 0, l: 6, s: 0 } ] },
      { tag: '#climate', posts: [
        { n: 'Giulia', h: 'giulia_r', c: 'green', t: '5m', x: 'Third heatwave this summer. Can we talk about adaptation, not only targets?', g: '#climate', r: 18, l: 73, s: 15 },
        { n: 'Omar', h: 'omar_h', c: 'violet', t: '3m', x: 'Adaptation is expensive and invisible. Voters reward ribbons, not shade trees.', r: 6, l: 34, s: 4 },
        { n: 'Chen', h: 'chen_w', c: 'teal', t: '1m', x: 'Streets with new trees were 2 degrees cooler at noon. Boring and it works', g: '#evidence', r: 2, l: 41, s: 9 } ] },
      { tag: '#health', posts: [
        { n: 'Elena', h: 'elena_md', c: 'orange', t: '6m', x: 'Our clinic now uses an AI assistant for triage notes. Faster, but who checks the checker?', g: '#health', r: 9, l: 52, s: 6 },
        { n: 'Paolo', h: 'paolo_v', c: 'violet', t: '4m', x: 'Humans in the loop, or it is just liability laundering.', r: 3, l: 27, s: 3 },
        { n: 'Amira', h: 'amira_s', c: 'teal', t: '2m', x: 'We audit a weekly sample. Errors were 3%, nearly all in the same category.', g: '#evidence', r: 2, l: 19, s: 2 },
        { n: 'Elena', h: 'elena_md', c: 'orange', t: 'now', x: 'That is exactly the kind of number we needed. Sharing it with the board.', r: 0, l: 8, s: 1 } ] },
      { tag: '#football', posts: [
        { n: 'Tom', h: 'tom_fc', c: 'violet', t: '3m', x: 'That offside call again. Replays settle nothing when the rule is fuzzy', g: '#football', r: 31, l: 96, s: 12 },
        { n: 'Ivana', h: 'ivana_p', c: 'orange', t: '2m', x: 'The rule is clear. The camera angle is the problem.', r: 8, l: 44, s: 5 },
        { n: 'Noor', h: 'noor_a', c: 'green', t: 'now', x: 'Honest question: would you rather have fast calls or right calls?', r: 5, l: 23, s: 2 } ] },
      { tag: '#openscience', posts: [
        { n: 'Ada', h: 'ada_lab', c: 'teal', t: '7m', x: 'Our lab code is finally public. Reviewers asked for it, nobody asked for the docs', g: '#openscience', r: 14, l: 88, s: 21 },
        { n: 'Ben', h: 'ben_phd', c: 'violet', t: '4m', x: 'Docs are the real paper. I can rerun yours in an hour or I cannot.', r: 5, l: 39, s: 6 },
        { n: 'Rita', h: 'rita_o', c: 'orange', t: '2m', x: 'Pin your dependencies and add one runnable example. That is 90% of it', r: 3, l: 31, s: 8 },
        { n: 'Ada', h: 'ada_lab', c: 'teal', t: 'now', x: 'Adding a notebook tonight. Thank you both.', r: 0, l: 12, s: 0 } ] },
      { tag: '#news', posts: [
        { n: 'Marco', h: 'marco_t', c: 'orange', t: '5m', x: 'A headline claims the new tax doubles rent. I read the bill: it does not', g: '#news', r: 22, l: 67, s: 31 },
        { n: 'Yara', h: 'yara_j', c: 'green', t: '3m', x: 'Corrections never travel as far as the first headline.', r: 7, l: 58, s: 14 },
        { n: 'Leo', h: 'leo_k', c: 'teal', t: '1m', x: 'A visible note under the original post would help more than another thread', g: '#factcheck', r: 3, l: 26, s: 5 } ] }
    ];

    var head = feed.querySelector('.ys-feed-head');
    var topic = head && head.children[1];
    var body = document.createElement('div');
    body.className = 'ys-feed-body';
    feed.insertBefore(body, head ? head.nextSibling : feed.firstChild);
    [].slice.call(feed.querySelectorAll(':scope > .ys-post')).forEach(function (p, i) { p.classList.add('l' + i); body.appendChild(p); });
    feed.setAttribute('aria-label', 'Illustration of a simulated social media feed in which agents discuss different topics');

    function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
    function avatar(p) { var a = el('div', 'ys-av', p.n.charAt(0)); a.style.background = COL[p.c]; return a; }
    function stats(e) {
      e.rep.textContent = e.d.r + (e.d.r === 1 ? ' reply' : ' replies');
      e.like.textContent = '♥ ' + e.d.l;
      e.sh.textContent = e.d.s + (e.d.s === 1 ? ' share' : ' shares');
    }
    function build(p, lvl) {
      var node = el('div', 'ys-post l' + lvl), col = el('div');
      var who = el('div', 'ys-who', p.n + ' ');
      who.appendChild(el('span', null, '@' + p.h + ' · ' + p.t));
      var para = el('p', null, p.x);
      if (p.g) { para.appendChild(document.createTextNode(' ')); para.appendChild(el('span', 'ys-tag', p.g)); }
      var act = el('div', 'ys-act'), rep = el('span'), like = el('span', 'liked'), sh = el('span');
      act.appendChild(rep); act.appendChild(like); act.appendChild(sh);
      col.appendChild(who); col.appendChild(para); col.appendChild(act);
      node.appendChild(avatar(p)); node.appendChild(col);
      var rec = { node: node, rep: rep, like: like, sh: sh, d: { r: p.r, l: p.l, s: p.s } };
      stats(rec);
      return rec;
    }
    function typing(p, lvl) {
      var node = el('div', 'ys-post ys-typing l' + lvl), col = el('div');
      col.appendChild(el('div', 'ys-who', p.n + ' is typing'));
      var dots = el('div', 'ys-dots'); dots.appendChild(el('i')); dots.appendChild(el('i')); dots.appendChild(el('i'));
      col.appendChild(dots);
      node.appendChild(avatar(p)); node.appendChild(col);
      return node;
    }

    /* keep the card height steady: measure the tallest thread off-screen */
    function measure() {
      var probe = el('div', 'ys-feed-body ys-probe');
      probe.style.width = body.offsetWidth + 'px';
      feed.appendChild(probe);
      var max = 0;
      T.forEach(function (th) {
        probe.textContent = '';
        th.posts.forEach(function (p, i) { probe.appendChild(build(p, i).node); });
        max = Math.max(max, probe.offsetHeight);
      });
      feed.removeChild(probe);
      body.style.minHeight = max + 'px';
    }
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(measure, 200); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    measure();

    var visible = true, live = [];
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(feed);
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    function gate() { return (document.hidden || !visible) ? wait(400).then(gate) : Promise.resolve(); }
    function step(ms) { return gate().then(function () { return wait(ms); }); }

    setInterval(function () {
      if (document.hidden || !visible || !live.length) return;
      var e = live[Math.floor(Math.random() * live.length)], k = Math.random();
      if (k < .65) e.d.l += 1; else if (k < .85) e.d.s += 1; else e.d.r += 1;
      stats(e);
    }, 1300);

    function clear(recs) {
      recs.forEach(function (e) { e.node.classList.add('out'); });
      return wait(550).then(function () { recs.forEach(function (e) { if (e.node.parentNode) e.node.parentNode.removeChild(e.node); }); live = []; });
    }
    function play(th) {
      var recs = [], chain = Promise.resolve();
      chain = chain.then(function () { if (topic) topic.textContent = th.tag + ' · illustrative feed'; });
      th.posts.forEach(function (p, i) {
        chain = chain.then(function () {
          if (i === 0) return null;
          return step(300).then(function () { var t = typing(p, i); body.appendChild(t); return step(1000).then(function () { body.removeChild(t); }); });
        }).then(function () {
          var e = build(p, i); recs.push(e); live.push(e); body.appendChild(e.node); return step(1700);
        });
      });
      return chain.then(function () { return step(5200); }).then(function () { return clear(recs); });
    }
    function loop(i) { return play(T[i % T.length]).then(function () { return loop(i + 1); }); }

    /* the first thread is already in the page: let it rest, then rotate */
    var first = [].slice.call(body.querySelectorAll('.ys-post')).map(function (n) { return { node: n }; });
    step(6500).then(function () { return clear(first); }).then(function () { return loop(1); });
  }

  function initBlog() {
    var bar = $('[data-tagbar]'); if (!bar) return;
    var items = $$('.ys-blog [data-tags]'), tags = {};
    items.forEach(function (a) { (a.getAttribute('data-tags') || '').split(',').forEach(function (t) { t = t.trim(); if (t) tags[t] = (tags[t] || 0) + 1; }); });
    var names = Object.keys(tags).sort(); if (names.length < 2) { bar.hidden = true; return; }
    var cur = '';
    function render() {
      bar.innerHTML = ['All'].concat(names).map(function (n) {
        var on = (n === 'All' && !cur) || n === cur;
        return '<button type="button" class="ys-chip' + (on ? ' on' : '') + '" aria-pressed="' + on + '" data-t="' + (n === 'All' ? '' : n) + '">' + (n === 'All' ? 'All' : '#' + n) + '</button>';
      }).join('');
      var shown = 0;
      items.forEach(function (a) { var ok = !cur || (a.getAttribute('data-tags') || '').split(',').indexOf(cur) > -1; a.hidden = !ok; if (ok) shown++; });
      $$('.ys-entries').forEach(function (g) { var any = $$('.ys-entry:not([hidden])', g).length > 0; g.hidden = !any; if (g.previousElementSibling && g.previousElementSibling.classList.contains('ys-year')) g.previousElementSibling.hidden = !any; });
      var e = $('.ys-empty'); if (e) e.hidden = shown > 0;
    }
    bar.addEventListener('click', function (ev) { var b = ev.target.closest('button[data-t]'); if (!b) return; cur = b.getAttribute('data-t'); render(); var f = $('[data-t="' + cur + '"]', bar); if (f) f.focus(); });
    render();
  }

  function ready(fn) { if (doc.readyState !== 'loading') fn(); else doc.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    root.classList.remove('no-js');
    [initTheme, initNav, initAurora, initNet, initHeadings, initToc, initJump, initTables, initCopy, initDetails, initCarousels, initReveal, initOS, initTabs, initDataTables, initBlog, initFeed].forEach(function (f) { try { f(); } catch (e) { if (window.console) console.warn('ysocial-v4:', f.name, e); } });
  });
})();
