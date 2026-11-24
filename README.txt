3Hachi6 Electronics サイト 編集メモ
=====================================

■ フォルダの中身
  index.html        トップページ
  style.css         色・大きさ・レイアウト(見た目はここ)
  script.js         作品集の横スクロール用(触らなくてOK)
  devices/          デバイスごとのページ(f100.html, p100.html ...)
  images/           画像
  fonts/            見出し用フォント

■ よくある編集
  文章を変える      該当の .html をメモ帳/VS Codeで開いて、日本語の部分を書き換える
  画像を差し替える  images/ の中の同じ名前のファイルを上書き(例: images/p100.png)
  色を変える        style.css の先頭の「色・サイズ」の値を書き換える
  デバイスを足す    devices/p100.html をコピーして名前を変え、中身を書き換える。
                    index.html のデバイス一覧にも <article> のかたまりを追加する
  メールアドレス    「hello@example.com」を全ファイルで検索して置換
                    (VS Codeなら Ctrl+Shift+H で全ファイルまとめて置換できます)

■ 確認のしかた
  index.html をダブルクリックすれば、ブラウザでそのまま開けます。

■ 注意
  ヘッダー・お問い合わせ・フッターは各ページに同じものが書いてあります。
  変更したいときは全ページ分(6ファイル)を直してください。
  images/ の dial.png / orbit.png / keys-split.png / tone-mini.png は、
  今のページでは使っていません(不要なら削除してOK)。
