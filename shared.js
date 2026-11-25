/* =========================================================
   shared.js ― 全ページ共通のパーツ
   (ヘッダー / お問い合わせ / フッター / 前へ・次へ)

   ここを1回直せば、全ページに反映されます。
   ・文章やリンクを変えたいだけなら、すぐ下の「設定」だけ編集してください。
   ・デザインの崩れが心配なら、その下の HTML 部分は触らなくてOKです。
   ========================================================= */

/* ▼▼▼ 設定(ここだけ編集すればOK) ▼▼▼ */
var SITE = {
  // メールアドレス
  email: 'sanhachi_x86@icloud.com',

  // フッター「つながる」のリンク先
  github: 'https://github.com/sanhachi/3Hachi6-Electronics',
  x: 'https://x.com/386electronics',

  // お問い合わせブロックに「GitHubでソースを見る」ボタンを出すか(true / false)
  showGithubButton: false,
  // フッター「つながる」に「お問い合わせ」リンクを出すか(true / false)
  showContactLinkInFooter: false,

  // お問い合わせブロックのキャッチコピー(改行は <br>)
  contactCatch: '次のデバイスを、<br>一緒につくりませんか。',
  contactText: '共同開発、試作の依頼、展示や取材のご相談など、お気軽にご連絡ください。',

  // フッターの文章
  footerNote: '掲載しているデバイスはすべて個人による自作品であり、一般販売は行っていません。仕様は開発中のものを含み、予告なく変更される場合があります。',
  copyright: 'Copyright © 2026 3Hachi6 Electronics. All rights reserved.',
  madeBy: 'Made by hand in Japan'
};

/* ▼ デバイスを増やしたら、ここに1行足す(フッターと「前へ・次へ」に反映されます)
     slug = ファイル名(devices/ の中の .html の名前) */
var DEVICES = [
  { slug: 'f100', name: 'F100' },
  { slug: 'p100', name: 'P100' },
  { slug: 'd100', name: 'D100' },
  { slug: 'w100', name: 'W100' },
  { slug: 'c100', name: 'C100' }
];
/* ▲▲▲ 設定ここまで ▲▲▲ */


/* ---------------------------------------------------------
   ここから下は、パーツの組み立て(通常は触らなくてOK)
   --------------------------------------------------------- */
(function () {
  var body = document.body;
  var root = body.getAttribute('data-root') || '';      // トップなら '' / devices内なら '../'
  var current = body.getAttribute('data-device') || ''; // デバイスページなら、そのslug
  var home = root + 'index.html';
  var devDir = root ? '' : 'devices/';

  function byId(id) { return document.getElementById(id); }
  function devHref(slug) { return devDir + slug + '.html'; }

  /* ----- ヘッダー ----- */
  var header = byId('site-header');
  if (header) {
    header.innerHTML = `
      <nav class="site-nav" aria-label="メインナビゲーション">
        <a href="${home}" class="site-logo">
          <img src="${root}images/logo.png" alt="3Hachi6 Electronics" width="1600" height="320">
        </a>
        <ul class="nav-links">
          <li><a href="${home}#devices">デバイス</a></li>
          <li><a href="${home}#works">作品集</a></li>
          <li><a href="${home}#contact">お問い合わせ</a></li>
        </ul>
        <a href="#contact" class="nav-contact">連絡する</a>
      </nav>`;
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
            <span><small>前へ</small><span class="font-display">${prev.name}</span></span>
          </a>
          <a href="${home}#devices" class="pager-list">デバイス一覧</a>
          <a href="${devHref(next.slug)}" class="pager-link pager-next">
            <span><small>次へ</small><span class="font-display">${next.name}</span></span>
            <span aria-hidden="true">›</span>
          </a>
        </div>`;
    }
  }

  /* ----- フッター ----- */
  var footer = byId('site-footer');
  if (footer) {
    var deviceLinks = DEVICES.map(function (d) {
      return '<li><a href="' + devHref(d.slug) + '">' + d.name + '</a></li>';
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
              <li><a href="${home}#devices">デバイス一覧</a></li>
              <li><a href="${home}#works">作品集</a></li>
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

  /* ----- パーツを後から入れたので、#contact などの位置へ改めてジャンプ ----- */
  if (location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }
})();
