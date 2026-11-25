// 作品集の横スクロールを「途切れず無限にループ」させるためのスクリプトです。
// 作品の数と画面の幅に合わせて、リストを必要なだけ複製してつなげます。
// 作品を追加するときは index.html に書くだけでOK。ここは触らなくて大丈夫です。
(function () {
  var SPEED = 45;     // 流れる速さ(px/秒)。大きいほど速い
  var MIN_ITEMS = 3;  // 作品がこれより少ないときは、流さずに並べるだけにする

  document.querySelectorAll('.marquee').forEach(function (marquee) {
    var track = marquee.querySelector('.marquee-track');
    var list = track && track.querySelector('.work-list');
    if (!list) return;

    function build() {
      // いったん複製を消して、作り直す(画面幅が変わったときのため)
      track.querySelectorAll('.work-list[data-clone]').forEach(function (el) { el.remove(); });
      track.style.removeProperty('--marquee-distance');
      track.style.removeProperty('--marquee-duration');
      marquee.classList.remove('is-static');

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
        track.appendChild(copy);
      }
      track.style.setProperty('--marquee-distance', '-' + w + 'px');
      track.style.setProperty('--marquee-duration', (w / SPEED) + 's');
    }

    build();
    var timer;
    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(build, 150);
    });
  });
})();
