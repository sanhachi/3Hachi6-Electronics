3Hachi6 Electronics サイト 編集メモ(更新版)
=============================================

■ 全ページ共通の部分は shared.js 1か所で直す
  ヘッダー / お問い合わせ / フッター / 「前へ・次へ」は、すべて shared.js が各ページに入れています。
  shared.js の先頭にある「設定」を書き換えるだけで、全ページに反映されます。

    SITE.email                    メールアドレス
    SITE.contactCatch / contactText  お問い合わせのキャッチコピーと説明文
    SITE.footerNote / copyright   フッターの文章
    SITE.github / x               フッターのリンク先
    SITE.showGithubButton         お問い合わせに GitHub ボタンを出す(true / false)
    SITE.showContactLinkInFooter  フッターに「お問い合わせ」リンクを出す(true / false)
    DEVICES                       デバイス一覧(フッター・前へ/次へ に反映。増やすときは1行足す)

■ 各ページ個別の部分(HTMLを直接編集)
  index.html            トップ(F100の見出し、デバイスのタイル、作品集)
  devices/xxx.html      デバイスごとの概要・特長・仕様
  ※ F100のキャッチコピーは index.html と devices/f100.html の2か所にあります。

■ 画像
  images/ の中に入れます。名前は「すべて小文字」にしてください
  (GitHub / Cloudflare では p100.jpg と P100.jpg は別のファイル扱いです)。

■ 注意
  ・ブラウザで JavaScript が無効だと、共通パーツは表示されません(通常の利用では問題なし)。
  ・index.html をダブルクリックで開いても、そのまま確認できます。
