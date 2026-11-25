/* =========================================================
   data.js ― このサイトの「中身」をまとめたファイル

   文章・リンク・デバイス・作品は、すべてここに1回書くだけです。
   トップ / デバイス一覧 / 各デバイスのページに、自動で反映されます。
   (見た目は style.css、表示の仕組みは shared.js。そちらは触らなくてOK)
   ========================================================= */


/* ───────── ① サイト全体の設定 ───────── */
var SITE = {
  siteName: "3Hachi6 Electronics",            // タブの題名などに使う名前

  email: "sanhachi_x86@icloud.com",         // メールアドレス
  github: "https://github.com/sanhachi/3Hachi6-Electronics",
  x: "https://x.com/386electronics",

  showGithubButton: true,          // お問い合わせに GitHub ボタンを出すか
  showContactLinkInFooter: true,   // フッター「つながる」に「お問い合わせ」を出すか

  // お問い合わせブロック(改行は <br>)
  contactCatch: "次のデバイスを、<br>一緒につくりませんか。",
  contactText: "共同開発、試作の依頼、展示や取材のご相談など、お気軽にご連絡ください。",

  // フッター
  footerNote: "掲載しているデバイスはすべて個人による自作品であり、一般販売は行っていません。仕様は開発中のものを含み、予告なく変更される場合があります。",
  copyright: "Copyright © 2026 3Hachi6 Electronics. All rights reserved.",
  madeBy: "Made by hand in Japan",

  // 各デバイスのページの、仕様の下に出る注意書き
  specNote: "仕様は開発中のものであり、予告なく変更される場合があります。"
};


/* ───────── ② デバイス ─────────
   ・デバイスを増やすとき:ここに Ellipsis を1つ足す + devices/ に、
     既存のページ(例 p100.html)をコピーして、中の data-device="..." を新しい slug に変える。
   ・並びは、ここに書いた順(デバイス一覧・フッター・前へ/次へ が、この順になります)。 */
var DEVICES = [
  {
    slug: "f100",                 // ファイル名(devices/f100.html)と同じにする
    name: "F100",
    category: "音楽プレーヤー",
    tagline: "LESS TO SEE, MORE TO HEAR.",
    status: "開発中",
    date: '2026.12',                      // 作った年月(例 '2026.11')。空なら表示されない
    theme: "light",               // タイルの配色: 'light'(明るい) / 'dark'(暗い)
    image: "images/f100.jpg",
    alt: "黒い布の上に置かれた、白いケーブルの3.5mmイヤホンプラグ",
    summary: "画面を見る時間を減らし、音楽を聴く時間を増やすための音楽プレーヤー。",   // タイルに出る短い説明
    overview: "画面を見る時間を減らし、音楽を聴く時間を増やすための音楽プレーヤー。",   // 詳細ページに出る概要
    highlights: [
      { title: "表示部分の省略", body: "耳で聞く。目を閉じる。" },
      { title: "手で覚える操作", body: "片手で操作できる5ディレクションスイッチ。" },
      { title: "音に集中", body: "通知もアプリもない、音楽のためだけの道具。" }
    ],
    specs: [
      { label: "種別", value: "音楽プレーヤー" },
      { label: "プロセッサ", value: "XIAO ESP32-C3" },
      { label: "ディスプレイ", value: "なし" },
      { label: "入力方式", value: "5ディレクションスイッチ" },
      { label: "電源", value: "充電式バッテリー 500mAh前後" },
      { label: "接続方式", value: "TFカード" }
    ]
  },
  {
    slug: "p100",                 // ファイル名(devices/p100.html)と同じにする
    name: "P100",
    category: "ポケットベル",
    tagline: "ポケットベルをもう一度",
    status: "量産検討中",
    date: '2026.10',                      // 作った年月(例 '2026.11')。空なら表示されない
    theme: "dark",               // タイルの配色: 'light'(明るい) / 'dark'(暗い)
    image: "images/p100.jpg",
    alt: "「Unit-01」と書かれた白い筐体に、モノクロ液晶を搭載したP100の試作機",
    summary: "Seeed Studio XIAO ESP32C3を搭載した小さなポケットベル。",   // タイルに出る短い説明
    overview: "Seeed Studio XIAO ESP32C3を中心に組んだ、手のひらに収まるポケットベル。短いメッセージを受け取ることだけに機能を絞り、試験量産に向けた検討を進めています。",   // 詳細ページに出る概要
    highlights: [
      { title: "小さく、軽く", body: "親指サイズのXIAOで、筐体を最小限に。" },
      { title: "受け取るだけ", body: "短いメッセージを静かに知らせる単機能設計。" },
      { title: "量産を見据えて", body: "組み立てやすさと部品調達を検証中。" }
    ],
    specs: [
      { label: "種別", value: "ポケットベル" },
      { label: "プロセッサ", value: "XIAO ESP32-C3" },
      { label: "ディスプレイ", value: "キャラクタLCD 16x2" },
      { label: "入力方式", value: "5ディレクションスイッチ" },
      { label: "電源", value: "単三型電池" },
      { label: "接続方式", value: "Wi-Fi/ESP-NOW" }
    ]
  },
  {
    slug: "w100",                 // ファイル名(devices/w100.html)と同じにする
    name: "W100",
    category: "ウェアラブル端末",
    tagline: "手首ではない選択",
    status: "開発中",
    date: '2026.10',                      // 作った年月(例 '2026.11')。空なら表示されない
    theme: "dark",               // タイルの配色: 'light'(明るい) / 'dark'(暗い)
    image: "images/w100.jpg",
    alt: "時計画面を表示した、3.5インチ画面のW100試作機",
    summary: "D100と同サイズの本体に、前腕へしっかり固定できる大きなバンドを搭載。",   // タイルに出る短い説明
    overview: "D100と同じ筐体に、前腕へしっかり固定できる大きなバンドを組み合わせたウェアラブル端末。両手を空けたまま情報を確認・操作できます。完成まであと一歩です。",   // 詳細ページに出る概要
    highlights: [
      { title: "D100と同じ筐体", body: "なじみのある3.5インチ画面をそのまま腕へ。" },
      { title: "大型バンド", body: "前腕に固定し、動いてもずれにくい。" },
      { title: "ハンズフリー", body: "作業中でも画面をすぐに確認。" }
    ],
    specs: [
      { label: "種別", value: "ウェアラブル端末" },
      { label: "プロセッサ", value: "ESP32-32E" },
      { label: "ディスプレイ", value: "3.5インチ" },
      { label: "入力方式", value: "抵抗膜式タッチパネル" },
      { label: "電源", value: "充電式バッテリー" },
      { label: "接続方式", value: "Wi-Fi/Bluetooth" }
    ]
  },
  {
    slug: "c100",                 // ファイル名(devices/c100.html)と同じにする
    name: "C100",
    category: "パーソナルコンピューター",
    tagline: "TRIPLE FAULT.",
    status: "構想段階",
    date: '2026.08',                      // 作った年月(例 '2026.11')。空なら表示されない
    theme: "light",               // タイルの配色: 'light'(明るい) / 'dark'(暗い)
    image: "images/c100.jpg",
    alt: "レトロなデザインの折り畳みポータブルPCのスケッチ",
    summary: "筐体と構成の検討中",   // タイルに出る短い説明
    overview: "3Hachi6として初めてのx86アーキテクチャPC。現在は構想段階で、筐体のかたちと内部構成を検討しています。",   // 詳細ページに出る概要
    highlights: [
      { title: "はじめてのx86", body: "マイコンから、パソコンへ。" },
      { title: "小さな筐体", body: "机の上に置ける、コンパクトなかたちを検討中。" },
      { title: "これから", body: "構成と設計の詳細は順次公開予定。" }
    ],
    specs: [
      { label: "種別", value: "パーソナルコンピューター" },
      { label: "プロセッサ", value: "検討中" },
      { label: "ディスプレイ", value: "4-6インチ前後" },
      { label: "入力方式", value: "キーボード、USBマウスなど" },
      { label: "電源", value: "充電式バッテリー" },
      { label: "接続方式", value: "Wi-Fi/Bluetooth/USBなど" }
    ]
  },
    {
    slug: "d100",                 // ファイル名(devices/d100.html)と同じにする
    name: "D100",
    category: "PDA",
    tagline: "Pocket PCの先へ",
    status: "開発中",
    date: '2026.05',                      // 作った年月(例 '2026.11')。空なら表示されない
    theme: "light",               // タイルの配色: 'light'(明るい) / 'dark'(暗い)
    image: "images/d100.jpg",
    alt: "ロック画面を表示した、3.5インチタッチスクリーンのD100試作機",
    summary: "ESP32-32Eと3.5インチディスプレイを組み合わせた携帯情報端末。",   // タイルに出る短い説明
    overview: "ESP32-32Eと3.5インチディスプレイを組み合わせた携帯情報端末。予定、メモ、連絡先など、日々の情報をひとつのデバイスにまとめることを目指しています。",   // 詳細ページに出る概要
    highlights: [
      { title: "3.5インチの画面", body: "持ち歩けるサイズで、文字も読みやすく。" },
      { title: "ESP32-32E", body: "無線通信を内蔵し、データ同期にも対応予定。" },
      { title: "共通の筐体", body: "W100とハードウェアを共有する設計。" }
    ],
    specs: [
      { label: "種別", value: "PDA" },
      { label: "プロセッサ", value: "ESP32-32E" },
      { label: "ディスプレイ", value: "3.5インチ" },
      { label: "入力方式", value: "抵抗膜式タッチパネル" },
      { label: "電源", value: "充電式バッテリー" },
      { label: "接続方式", value: "Wi-Fi/Bluetooth" }
    ]
  }
];

/* トップの大きな見出し(フィーチャー)
   デバイスに限らず、ソフト・機能・ハードなど何でも載せられます。
   画像はトップ専用のものを images/ に置いてOK(横長 16:9、1600×900px くらいがおすすめ)。
   ボタンは何個でも可。style は 'primary'(塗り) / 'ghost'(枠線)。
   href は、サイト内なら 'devices/f100.html' のように書き、外部なら https:// から書く。 */
var FEATURED = {
  label: "FEATURED PROJECT",             // 上の小さな英字ラベル(例:FEATURED SOFTWARE)
  title: "LESS TO SEE, MORE TO HEAR.",   // 大きな見出し
  name: "F100",                          // 名前(空にすると非表示)
  badge: "開発中",                        // 名前の横のバッジ(空にすると非表示)
  image: "images/featured-f100.jpg",     // トップ専用の画像
  alt: "F100のイメージ画像",              // 画像の説明文
  buttons: [
    { text: "仕様を見る →",     href: "devices/f100.html", style: "primary" },
    { text: "ほかのデバイス",   href: "#devices",          style: "ghost" }
  ]
};

/* ── 書き換え用のひな形(使うときは上の FEATURED と入れ替える) ──

// ソフトウェアをフィーチャーする場合
var FEATURED = {
  label: "FEATURED SOFTWARE",
  title: "古いFire Stickを、情報ボードに。",
  name: "Status Console",
  badge: "公開中",
  image: "images/featured-status-console.jpg",
  alt: "Fire Stickに表示されたStatus Consoleの画面",
  buttons: [
    { text: "GitHubで見る →", href: "https://github.com/sanhachi/...", style: "primary" },
    { text: "ほかの作品",     href: "#works",                          style: "ghost" }
  ]
};

// 機能・ハードの一部をフィーチャーする場合
var FEATURED = {
  label: "FEATURED HARDWARE",
  title: "手で覚える、5ディレクションスイッチ。",
  name: "",        // 名前なし
  badge: "",       // バッジなし
  image: "images/featured-switch.jpg",
  alt: "5ディレクションスイッチのクローズアップ",
  buttons: [
    { text: "F100を見る →", href: "devices/f100.html", style: "primary" }
  ]
};
*/

/* トップの「最新のデバイス」に出すデバイス(slug。この順に並びます)。入れ替えはここだけ */
var LATEST_DEVICES = ["p100", "d100"];


/* ───────── ③ 作品(その他の作品) ─────────
   ・latest: true にした作品が、トップの「最新の作品」に流れます。
     false にすると、デバイス一覧ページの「その他の作品」にだけ出ます。
   ・載せたくなくなったら、行の頭に // を付けてください(消さなくてOK)。 */
var WORKS = [
  { name: "Status Console", category: "IoTアプリ", date: "2026.11", latest: true,
    body: "古いFire Stickで日常的な情報を常時表示。緊急の際はクールに警告。" },
  { name: "DirectStep", category: "フットスイッチ", date: "2026.09", latest: true,
    body: "青軸キースイッチとキーボードを接続。段ボール製で省スペース。" },
  { name: "MapHUD", category: "ナビもどき", date: "2025.08", latest: true,
    body: "ヘルメットに接続した小さなOLEDディスプレイで、ターンバイターンの案内。自転車のスマホ運転を防止。" },
  { name: "C980", category: "製品構想", date: "2026.08", latest: true,
    body: "往年のPC-98を意識した、レトロなデスクトップPC。" },
  { name: "Multi Remote", category: "製品構想", date: "2026.12", latest: true,
    body: "ESP32C3を使用し、赤外線とBLEの機能を兼ねた多機能リモコン。" },

  // { name: 'BLE Remote', category: 'リモコン', date: '2023', latest: false,
  //   body: 'スライド送り用の小さなBluetoothリモコン。CR2032で約1年動作。' }
];
