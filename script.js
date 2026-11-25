// 作品集の横スクロールを「途切れず無限にループ」させるためのスクリプトです。
// 作品の数と画面の幅に合わせて、リストを必要なだけ複製してつなげます。
// 画像つきカードは、写真の縦横比からカード幅を決め、タップでめくれるようにもします。
(function () {
  var SPEED = 45;     // 流れる速さ(px/秒)。大きいほど速い
  var MIN_ITEMS = 3;  // 作品がこれより少ないときは、流さずに並べるだけにする

  // 写真の縦横比をカードに伝える(CSSが幅を計算する)
  function applyRatio(img) {
    var card = img.closest('.work-card');
    if (card && img.naturalWidth) {
      card.style.setProperty('--ar', (img.naturalWidth / img.naturalHeight).toFixed(4));
    }
  }

  // 一覧ページ(流れないほう)用
  document.querySelectorAll('.work-grid .work-cover img').forEach(function (img) {
    if (img.complete) applyRatio(img);
    else img.addEventListener('load', function () { applyRatio(img); });
  });

  // タップ・クリックでめくる/戻す(スマホ用。PCはホバーでも開く)
  document.addEventListener('click', function (e) {
    var card = e.target.closest && e.target.closest('.work-card.has-image');
    document.querySelectorAll('.work-card.is-open').forEach(function (c) {
      if (c !== card) c.classList.remove('is-open');
    });
    if (card) card.classList.toggle('is-open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var card = e.target.closest && e.target.closest('.work-card.has-image');
      if (card && e.target === card) { e.preventDefault(); card.classList.toggle('is-open'); }
    }
  });

  document.querySelectorAll('.marquee').forEach(function (marquee) {
    var track = marquee.querySelector('.marquee-track');
    var list = track && track.querySelector('.work-list');
    if (!list) return;

    function build() {
      // いったん複製を消して、作り直す(画面幅や画像の読み込みが変わったとき)
      track.querySelectorAll('.work-list[data-clone]').forEach(function (el) { el.remove(); });
      track.style.removeProperty('--marquee-distance');
      track.style.removeProperty('--marquee-duration');
      marquee.classList.remove('is-static');

      list.querySelectorAll('.work-cover img').forEach(function (img) {
        if (img.complete) applyRatio(img);
      });

      if (list.children.length < MIN_ITEMS) {
        marquee.classList.add('is-static');
        return;
      }

      var w = list.offsetWidth;                         // リスト1つ分の幅
      if (!w) return;
      var copies = Math.ceil(marquee.offsetWidth / w);  // 画面を埋めるのに必要な複製の数
      for (var i = 0; i < copies; i++) {
        var copy = list.cloneNode(true);
        copy.setAttribute('data-clone', '');
        copy.setAttribute('aria-hidden', 'true');
        copy.querySelectorAll('[tabindex]').forEach(function (el) { el.setAttribute('tabindex', '-1'); });
        track.appendChild(copy);
      }
      track.style.setProperty('--marquee-distance', '-' + w + 'px');
      track.style.setProperty('--marquee-duration', (w / SPEED) + 's');
    }

    var timer;
    function schedule(ms) {
      clearTimeout(timer);
      timer = setTimeout(build, ms);
    }

    build();
    window.addEventListener('resize', function () { schedule(150); });

    // 画像の読み込みが終わるたびに、幅が変わるので組み直す
    list.querySelectorAll('.work-cover img').forEach(function (img) {
      if (!img.complete) img.addEventListener('load', function () { schedule(50); });
    });
  });
})();