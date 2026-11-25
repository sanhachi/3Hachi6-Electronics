/* =========================================================
   shared.js ― ページの組み立て(通常は触らなくてOK)

   data.js に書いた中身を、各ページに表示します。
     ・ヘッダー / お問い合わせ / フッター / 前へ・次へ
     ・デバイスのタイル(トップ・デバイス一覧)
     ・作品のカード(トップ・デバイス一覧)
     ・各デバイスのページの本文
   ========================================================= */
(function () {
  var body = document.body;
  var root = body.getAttribute('data-root') || '';      // トップなら '' / devices内なら '../'
  var current = body.getAttribute('data-device') || ''; // デバイスページなら、そのslug
  var home = root + 'index.html';
  var devDir = root ? '' : 'devices/';
  var devIndex = devDir + 'index.html';                 // デバイス一覧ページ

  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function findDevice(slug) {
    for (var i = 0; i < DEVICES.length; i++) if (DEVICES[i].slug === slug) return DEVICES[i];
    return null;
  }
  function devHref(slug) { return devDir + slug + '.html'; }

  /* ----- パーツ:デバイスのタイル ----- */
  function tileHTML(d) {
    var theme = d.theme === 'dark' ? 'tile-dark' : 'tile-light';
    return `
          <article id="${esc(d.slug)}" class="tile ${theme}" aria-labelledby="${esc(d.slug)}-title">
            <div class="tile-top">
              <span class="tile-date">${esc(d.date)}</span>
              <span class="tile-cat">${esc(d.category)}</span>
            </div>
            <div class="tile-body">
              <h3 id="${esc(d.slug)}-title">${esc(d.name)}</h3>
              <p class="tile-tagline">${esc(d.tagline)}</p>
              <p class="tile-desc">${esc(d.summary)}</p>
              <div class="tile-actions">
                <span class="status-chip">${esc(d.status)}</span>
                <a href="${devHref(d.slug)}" class="tile-link">仕様を見る<span class="sr-only">（${esc(d.name)}）</span> ↗</a>
              </div>
            </div>
            <div class="tile-image">
              <img src="${root + esc(d.image)}" alt="${esc(d.alt)}" loading="lazy">
            </div>
            <div class="tile-bar" aria-hidden="true"></div>
          </article>`;
  }

  /* ----- パーツ:作品のカード ----- */
  function workHTML(w) {
    return `
            <li class="work-card">
              <div class="work-meta"><span class="work-cat">${esc(w.category)}</span><span>${esc(w.date)}</span></div>
              <h3>${esc(w.name)}</h3>
              <p>${esc(w.body)}</p>
            </li>`;
  }

  /* ----- ヘッダー ----- */
  var header = byId('site-header');
  if (header) {
    header.innerHTML = `
      <nav class="site-nav" aria-label="メインナビゲーション">
        <a href="${home}" class="site-logo">
          <img src="${root}images/logo.png" alt="${esc(SITE.siteName)}" width="1600" height="320">
        </a>
        <ul class="nav-links">
          <li><a href="${devIndex}">デバイス</a></li>
          <li><a href="${devIndex}#works">作品集</a></li>
          <li><a href="${home}#contact">お問い合わせ</a></li>
        </ul>
        <a href="#contact" class="nav-contact">連絡する</a>
      </nav>`;
  }

  /* ----- トップの大きな見出し(FEATURED のデバイス) ----- */
  var hero = byId('featured');
  var featured = hero && findDevice(FEATURED);
  if (featured) {
    hero.innerHTML = `
      <div class="container-md">
        <p class="hero-label"><span aria-hidden="true"></span>FEATURED PROJECT<span aria-hidden="true"></span></p>
        <h1 id="hero-title">${esc(featured.tagline)}</h1>
        <p class="hero-name">
          <span class="font-display">${esc(featured.name)}</span>
          <span class="status-badge">${esc(featured.status)}</span>
        </p>
        <div class="hero-buttons">
          <a href="${devHref(featured.slug)}" class="btn btn-primary">仕様を見る →</a>
          <a href="#devices" class="btn btn-ghost">ほかのデバイス</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="${root + esc(featured.image)}" alt="${esc(featured.alt)}">
      </div>
      <div class="hero-bar" aria-hidden="true"></div>`;
  }

  /* ----- デバイスのタイル( data-devices="latest" / "all" ) ----- */
  document.querySelectorAll('[data-devices]').forEach(function (el) {
    var list = el.getAttribute('data-devices') === 'latest'
      ? LATEST_DEVICES.map(findDevice).filter(Boolean)
      : DEVICES;
    el.innerHTML = list.map(tileHTML).join('');
  });

  /* ----- 作品のカード( data-works="latest" / "all" ) ----- */
  document.querySelectorAll('[data-works]').forEach(function (el) {
    var list = el.getAttribute('data-works') === 'latest'
      ? WORKS.filter(function (w) { return w.latest; })
      : WORKS;
    el.innerHTML = list.map(workHTML).join('');
  });

  /* ----- 各デバイスのページの本文 ----- */
  var main = byId('device-main');
  var dev = main && current && findDevice(current);
  if (dev) {
    document.title = dev.name + ' ' + dev.category + ' — ' + SITE.siteName;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dev.overview);

    var highlights = (dev.highlights || []).map(function (h) {
      return `
            <li class="highlight">
              <h3>${esc(h.title)}</h3>
              <p>${esc(h.body)}</p>
            </li>`;
    }).join('');
    var specs = (dev.specs || []).map(function (s) {
      return `
            <div class="spec-row">
              <dt>${esc(s.label)}</dt>
              <dd>${esc(s.value)}</dd>
            </div>`;
    }).join('');

    main.innerHTML = `
    <section class="device-hero" aria-labelledby="device-title">
      <div class="container-sm">
        <p class="eyebrow">${esc(dev.category)}</p>
        <h1 id="device-title">${esc(dev.name)}</h1>
        <p class="device-tagline">${esc(dev.tagline)}</p>
        <span class="status-badge">${esc(dev.status)}</span>
      </div>
      <div class="device-image">
        <img src="${root + esc(dev.image)}" alt="${esc(dev.alt)}">
      </div>
      <div class="hero-bar" aria-hidden="true"></div>
    </section>

    <section class="section-overview" aria-labelledby="overview-title">
      <div class="container-sm">
        <h2 id="overview-title" class="eyebrow">OVERVIEW<span class="sr-only">（概要）</span></h2>
        <p class="overview-text">${esc(dev.overview)}</p>
        <ul class="highlights">${highlights}
        </ul>
      </div>
    </section>

    <section class="section-specs" aria-labelledby="specs-title">
      <div class="container-sm">
        <p class="eyebrow">SPECIFICATIONS</p>
        <h2 id="specs-title">仕様</h2>
        <dl class="spec-list">${specs}
        </dl>
        <p class="spec-note">${esc(SITE.specNote)}</p>
      </div>
    </section>`;
  }

  /* ----- お問い合わせ ----- */
  var contact = byId('contact');
  if (contact) {
    var githubButton = SITE.showGithubButton
      ? `<a href="${SITE.github}" class="btn btn-ghost-ink btn-lg">GitHubでソースを見る ›</a>`
      : '';
    contact.innerHTML = `
      <div class="container-sm">
        <p class="eyebrow">CONTACT</p>
        <h2 id="contact-title">${SITE.contactCatch}</h2>
        <p class="contact-text">${SITE.contactText}</p>
        <div class="contact-buttons">
          <a href="mailto:${SITE.email}" class="btn btn-primary btn-lg">メールで連絡する</a>
          ${githubButton}
        </div>
      </div>`;
  }

  /* ----- 前へ・次へ(デバイスページのみ) ----- */
  var pager = byId('site-pager');
  if (pager && current) {
    var n = DEVICES.length;
    var i = DEVICES.findIndex(function (d) { return d.slug === current; });
    if (i >= 0) {
      var prev = DEVICES[(i - 1 + n) % n];
      var next = DEVICES[(i + 1) % n];
      pager.innerHTML = `
        <div class="container-sm">
          <a href="${devHref(prev.slug)}" class="pager-link">
            <span aria-hidden="true">‹</span>
            <span><small>前へ</small><span class="font-display">${esc(prev.name)}</span></span>
          </a>
          <a href="${devIndex}" class="pager-list">デバイス一覧</a>
          <a href="${devHref(next.slug)}" class="pager-link pager-next">
            <span><small>次へ</small><span class="font-display">${esc(next.name)}</span></span>
            <span aria-hidden="true">›</span>
          </a>
        </div>`;
    }
  }

  /* ----- フッター ----- */
  var footer = byId('site-footer');
  if (footer) {
    var deviceLinks = DEVICES.map(function (d) {
      return '<li><a href="' + devHref(d.slug) + '">' + esc(d.name) + '</a></li>';
    }).join('');
    var contactLink = SITE.showContactLinkInFooter
      ? `<li><a href="${home}#contact">お問い合わせ</a></li>`
      : '';
    footer.innerHTML = `
      <div class="container">
        <p class="footer-note">${SITE.footerNote}</p>
        <nav class="footer-nav" aria-label="フッター">
          <div>
            <h3>デバイス</h3>
            <ul>${deviceLinks}</ul>
          </div>
          <div>
            <h3>ラボについて</h3>
            <ul>
              <li><a href="${devIndex}">デバイス一覧</a></li>
              <li><a href="${devIndex}#works">作品集</a></li>
            </ul>
          </div>
          <div>
            <h3>つながる</h3>
            <ul>
              <li><a href="${SITE.github}">GitHub</a></li>
              <li><a href="${SITE.x}">X</a></li>
              ${contactLink}
            </ul>
          </div>
        </nav>
        <div class="footer-bottom">
          <p>${SITE.copyright}</p>
          <p>${SITE.madeBy}</p>
        </div>
      </div>`;
  }

  /* ----- 後から中身を入れたので、#contact などの位置へ改めてジャンプ ----- */
  if (location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }
})();
