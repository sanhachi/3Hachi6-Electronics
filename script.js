// 作品集の横スクロールを「途切れず無限にループ」させるための小さなスクリプトです。
// 1セット目のリストを複製して、後ろにつなげています。
// 作品を追加するときは index.html に書くだけでOK。ここは触らなくて大丈夫です。
document.querySelectorAll('.marquee-track').forEach(function (track) {
  var list = track.querySelector('ul');
  if (!list) return;
  var copy = list.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  track.appendChild(copy);
});
