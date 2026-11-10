export type DiagramKind = 'loc' | 'diagnostic' | 'fileshare' | 'sparelink';

export interface WorkLayer {
  nodeKey: string;
  layer: string;
  tech: string;
  detail: string;
  isPrimaryScope?: boolean;
}

/**
 * 制作物を増やすときは WORKS_DATA に1件追加するだけ。
 * 構成図（diagramKind）と layers は無くても表示できる。
 */
export interface WorkItem {
  id: string;
  shortTitle: string;
  summary: string;
  title: string;
  period?: string;
  context: string;
  role: string;
  description: string;
  story: string[];
  points: string[];
  tags: string[];
  githubUrl?: string;
  repoLabel?: string;
  diagramKind?: DiagramKind;
  layers?: WorkLayer[];
}

export interface ResearchSection {
  heading: string;
  body?: string[];
  points?: string[];
  command?: string;
}

export interface ResearchHighlight {
  label: string;
  value: string;
  detail?: string;
}

export interface ResearchPdf {
  title: string;
  subtitle?: string;
  url: string;
  size?: string;
}

/**
 * 研究を増やすときは RESEARCH_DATA に1件追加するだけ。
 */
export interface ResearchItem {
  id: string;
  title: string;
  shortTitle?: string;
  period?: string;
  summary: string;
  tags?: string[];
  highlights?: ResearchHighlight[];
  sections?: ResearchSection[];
  body?: string[];
  findings?: string[];
  links?: { label: string; url: string }[];
  pdfDownloads?: ResearchPdf[];
}

export const PROFILE_DATA = {
  name: '辻 昂志朗',
  handle: 'kt-suji',
  desiredRole: 'ネットワーク・インフラエンジニア志望',
  graduation: '2028年3月卒業予定',
  school: 'ECCコンピュータ専門学校',
  department: '高度情報処理研究学科 IT開発エキスパートコース',
  major: 'ネットワーク・セキュリティ専攻',
  email: 'ktsuji.osigoto@gmail.com',
  githubUrl: 'https://github.com/kt-suji',
  spineSummary:
    'PCの不調の原因を調べて直すことが好きで、現在はネットワークとサーバーを中心に学んでいます。',
  paragraphs: [
    '家族や友人からPCトラブルの相談を受けることが多く、何が原因かを一つずつ切り分けて解決できたときに一番面白さを感じます。それがきっかけで、仕組みの土台になるネットワーク・セキュリティ分野に進みました。',
    '学校での学習に加えて、自分でLinuxやDocker、Proxmox VEを使ってサーバーを立てながら動きを確かめています。チーム開発や個人制作ではAPIやデータベースまわりも触っており、上で動くアプリのことも分かったうえでインフラを支えられるエンジニアを目指しています。',
  ],
  habits: [
    {
      title: '原因を順番に切り分ける',
      body: '家族や友人のPCトラブル相談のほか、Wiresharkでの通信確認や「PCトラブル診断ツール」の制作でも、現象を整理して範囲を絞っていく進め方を意識しています。',
    },
    {
      title: '自分で環境を作って確かめる',
      body: '知識だけで終わらせず、LinuxやDocker、Proxmox VEなどで実際に環境を立てて動きを見るようにしています。',
    },
    {
      title: '失敗したら作りから見直す',
      body: '個人制作のファイル共有システムをApacheで公開した際にRATに感染した経験から、仕組みを一から見直し、Nginxなどを使い始めました。この経験からセキュリティを意識して構成を考えるようになりました。',
    },
  ],
  educationRows: [
    { label: '卒業予定', value: '2028年 3月' },
    { label: '学校', value: 'ECCコンピュータ専門学校' },
    { label: '学科・コース', value: '高度情報処理研究学科 IT開発エキスパートコース' },
    { label: '専攻', value: 'ネットワーク・セキュリティ専攻' },
  ],
} as const;

export const WORKS_DATA: WorkItem[] = [
  {
    id: 'sparelink',
    shortTitle: 'SpareLink',
    summary: 'Tailscale/LAN接続で複数PCの余剰CPU・メモリを自動評価・集約するP2P分散基盤',
    title: 'SpareLink ― P2P分散余剰計算資源コーディネーター',
    period: '2026年',
    context: '個人開発',
    role: '全体設計・エージェント実装・Webフロントエンド',
    description:
      '自宅や研究室にある複数台のPCをTailscale、WireGuard、ローカルLANでP2P接続し、各PCの「実効余剰能力（CPU・メモリ）」をリアルタイムに評価・集約する分散コーディネーターです。単なる使用率の逆数ではなく、各PCのアーキテクチャ性能や安全マージンを考慮して余剰スコアを算出。外部ソフト（Blenderの分散レンダリングやバッチ処理等）へWebSocket API経由で計算資源を提供します。',
    story: [
      '複数のマシンを運用している中で、メイン機で重い処理をしていてもサブ機のCPUやメモリは遊んでいることが多い点に着目しました。',
      '「余っている計算力を無駄なく使いたいが、ホストPCの操作感を損なったり、サブPCごとに重いランタイムを入れるのは避けたい」と考え、Windows Native APIから直接システム情報を取得する単独バイナリ（ゼロ依存）のエージェントをRustで設計・実装しました。',
    ],
    points: [
      '単独exe・外部ランタイム不要（Windows Native API直接呼び出しによる低負荷プローブ）',
      '約0.08秒で完了する頭打ちゼロ設計の並列CPUマイクロベンチマークを自作',
      'CPU 20%、メモリ 4GBの安全マージンを確保し、操作快適性を維持した実効余剰スコア算出',
      'Tailscale / WireGuard の自動検出によるゼロコンフィグP2Pメッシュ接続',
      '外部連携用 WebSocket API（ポート3001）と、React 19製リアルタイムトポロジーダッシュボード',
    ],
    tags: ['Rust', 'React', 'TypeScript', 'P2P', 'Tailscale', 'WebSocket'],
    githubUrl: 'https://github.com/kt-suji/SpareLink',
    repoLabel: 'kt-suji/SpareLink',
    diagramKind: 'sparelink',
    layers: [
      {
        nodeKey: 'agent',
        layer: 'エージェント（各ノード）',
        tech: 'Rust 2024 / Win32 API',
        detail: 'Windows Native APIから直接メモリ・CPU負荷を取得。起動時に超高速CPUマイクロベンチマークを実行し、安全マージンを差し引いた実効余剰能力を動的に評価します。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'mesh',
        layer: 'P2Pメッシュ通信',
        tech: 'Tailscale / WireGuard / LAN',
        detail: 'ポート開放不要でノード同士が相互接続。ハートビートと余剰能力のスナップショットをピア間で自律同期します。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'api',
        layer: 'API配信 & ダッシュボード',
        tech: 'WebSocket / React 19',
        detail: 'ローカルのWebSocket API経由でクラスタ全体の余剰リソース情報を配信。React製Web画面で接続トポロジーとメーターを可視化します。',
        isPrimaryScope: true,
      },
    ],
  },
  {
    id: 'loudy-cushion',
    shortTitle: 'LOudyCushion (L.O.C.)',
    summary: '座りすぎを検知して休憩を促すクッション型IoTシステム',
    title: 'LOudyCushion (L.O.C.) ― 健康支援システム',
    context: 'チーム開発（+E展 展示予定）',
    role: 'バックエンドAPI・データベース設計',
    description:
      '長時間の座りすぎを検知して休憩を促す、クッション型のIoTシステムです。クッション内のセンサーで座っている時間や姿勢・動きを取り、振動や膨張で知らせます。スマホアプリと繋いで、通知スケジュールの設定や座り方の統計、健康スコアを見られるようにしています。',
    story: [
      'バックエンドとデータベースの設計を担当しました。担当になった理由は、メンバーの中でNode.jsを触ったことがあったのが自分だけだったからです。',
    ],
    points: [
      '着座データを保存し、統計や健康スコアとしてアプリに返すAPIとデータベースを担当',
      'Node.jsとMySQLをDockerコンテナ上で動かす構成',
      '通知スケジュールの設定など、アプリ側の機能に必要なエンドポイントを用意',
    ],
    tags: ['Node.js', 'Docker', 'MySQL', 'チーム開発'],
    githubUrl: 'https://github.com/ymk-1024/L.O.C.-Algorithm',
    repoLabel: 'ymk-1024/L.O.C.-Algorithm',
    diagramKind: 'loc',
    layers: [
      {
        nodeKey: 'cushion',
        layer: 'クッション本体',
        tech: 'センサー・振動/膨張',
        detail: '座っている時間・姿勢・動きを検知し、振動や膨張で休憩タイミングを知らせます。',
      },
      {
        nodeKey: 'mobile',
        layer: 'スマホアプリ',
        tech: 'モバイル連携画面',
        detail: '通知スケジュールの設定や、座っていた時間の統計・健康スコアの確認を行います。',
      },
      {
        nodeKey: 'api',
        layer: 'バックエンドAPI',
        tech: 'Node.js / Docker',
        detail: 'センサーからのデータ受け取り、統計・スコアの集計、通知設定のやり取りを処理します。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'db',
        layer: 'データベース',
        tech: 'MySQL',
        detail: '着座データ、統計、健康スコア、通知スケジュールの設定を保存します。',
        isPrimaryScope: true,
      },
    ],
  },
  {
    id: 'pc-trouble-diagnostic',
    shortTitle: 'PC トラブル診断ツール',
    summary: 'Yes/Noで答えていくとPCの不調の原因が絞れるWebアプリ',
    title: 'PC トラブル診断ツール',
    context: '個人制作（1年次）／2025年度 +E展 企業展示作品',
    role: '個人制作',
    description:
      'PCの調子が悪いときに、Yes/Noの質問に順番に答えていくだけで原因を特定できるトラブルシューティングWebサイトです。2択が最大7回枝分かれし、フォルダーの階層構造（ネスト）を利用して約600ファイルで構成しました。',
    story: [
      '1年生の基礎を学んでいる段階で、まだ扱えるプログラミング言語が少なかった頃の個人制作です。もともと持っていたPCハードウェアの知識やトラブルシューティングの経験を活かせるものを作ろうと考えました。',
      '当時の自分にできる確実な方法として、分岐ごとのフォルダ階層を作り、約600ものファイルを手作業で作成・ネストして力技で完成させました。パス指定やファイルアップロードの膨大な作業に苦労しましたが、トラブル切り分けのロジックを直感的に形にした原点となる制作です。',
    ],
    points: [
      'PCに詳しくない人でも答えられるよう、Yes/Noの2択質問だけで原因を特定',
      '2択が最大7段階枝分かれするロジックツリー構造',
      'フォルダーネストを活用した全体で約600ファイルの構成',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/kt-suji/Webapp',
    repoLabel: 'kt-suji/Webapp',
    diagramKind: 'diagnostic',
    layers: [
      {
        nodeKey: 'browser',
        layer: '質問画面',
        tech: 'HTML / CSS / JavaScript',
        detail: '今のPCの状態について、Yes / No の2択で答えていきます。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'tree',
        layer: '分岐構造',
        tech: '最大7段階（フォルダ階層）',
        detail: '回答に合わせて次の階層へ進み、原因の範囲を絞り込みます。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'result',
        layer: '診断結果ページ群',
        tech: '約600ファイル',
        detail: '分岐ごとのページと、最終的に考えられるハードウェア・システム原因を表示します。',
        isPrimaryScope: true,
      },
    ],
  },
  {
    id: 'file-share-system',
    shortTitle: 'ファイル共有システム',
    summary: 'RAT感染の失敗経験からセキュリティを一新したLaravel API＋Flutterアプリ',
    title: 'ファイル共有システム',
    context: '個人制作（フルスタック）',
    role: 'API・モバイルアプリの実装、セキュリティ改善と再設計',
    description:
      'スマホアプリ（Flutter）からサーバー上のファイルを安全にやり取りできるファイル共有システムです。LaravelでREST APIを再構築し、APIキー認証、レート制限、ファイル難読化保存、ページネーション、ローカルストレージおよびNAS（ネットワークストレージ）への保存に対応しています。',
    story: [
      '最初のv1は、素のPHPでファイルアップロード機能を作り、Apacheで公開していました。しかし公開直後にRAT（遠隔操作ウイルス）に感染してしまい、セキュリティの甘さを痛感しました。',
      'この痛烈な失敗を機にサーバー構成を一から見直し、Nginxを導入。さらにLaravelを用いたREST API（v2）へと全面的に作り直しました。アップロードされたファイルを直接実行されないよう拡張子を強制的に「.dat」へ変換し、ランダム名でWeb公開ディレクトリ外に保存するなど、多層的な防御を施しました。',
    ],
    points: [
      '素のPHP＋Apache構成（v1）でのRAT感染経験を踏まえ、Nginx＋Laravel REST API（v2）へ全面刷新',
      'アップロードファイルを「.dat」拡張子へ強制変換＆ランダム命名し、Web公開ディレクトリ外に隔離保存',
      'APIキー（X-API-KEY）による認証と、1分間60リクエストのレート制限（throttle:60,1）',
      '保存先としてサーバー内ローカルとNAS（ネットワークストレージ）の両方に対応',
    ],
    tags: ['Laravel', 'PHP', 'Dart (Flutter)', 'REST API', 'Nginx'],
    githubUrl: 'https://github.com/kt-suji/file_share',
    repoLabel: 'kt-suji/file_share',
    diagramKind: 'fileshare',
    layers: [
      {
        nodeKey: 'flutter',
        layer: 'スマホアプリ',
        tech: 'Dart (Flutter)',
        detail: 'ファイル一覧の表示（ページ送り）やアップロード、共有URLの発行を行います。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'laravel',
        layer: 'REST API (v2)',
        tech: 'Laravel / PHP / Nginx',
        detail: 'APIキー認証、レート制限、拡張子の.dat変換・隔離保存、NAS振り分けを安全に処理します。',
        isPrimaryScope: true,
      },
      {
        nodeKey: 'storage',
        layer: 'ファイル保存先',
        tech: 'ローカル / NAS',
        detail: 'Web公開ディレクトリ外のローカル領域およびNASに隔離して安全に保存します。',
        isPrimaryScope: true,
      },
    ],
  },
];


/**
 * 研究。詳しい内容（概要・やったこと・分かったこと）は body / findings に追記する。
 */
export const RESEARCH_DATA: ResearchItem[] = [
  {
    id: 'iscsi-zfs-diskless-sandbox',
    title: 'iSCSI×ZFS ディスクレスPCで瞬間復元サンドボックス環境の構築',
    shortTitle: 'iSCSI×ZFS サンドボックス',
    period: 'ITゼミ演習（ネット・インフラ） 2022年度後期報告書',
    summary:
      '「物理ディスクを持たない」×「1秒で初期状態に戻せる」実験環境を、オープンソース技術（OSS）のみで低コストに構築。ネイティブiSCSIブート（iBFT）とZFSの瞬間ロールバック（CoW）を組み合わせ、マルウェア検証やOS破壊テストに伴う再構築コスト・ストレージ摩耗・漏洩リスクを根本解決。',
    tags: ['iSCSI', 'ZFS', 'iBFT', 'PXE', 'Windows', 'Lubuntu', 'セキュリティ'],
    highlights: [
      { label: '復元時間', value: '1〜2秒', detail: '従来の再インストール（数十分）から劇的短縮' },
      { label: '導入コスト', value: '完全OSS', detail: '高額な商用製品を使わず無償ツールのみで構築' },
      { label: '安全性', value: 'ディスク残留 0', detail: '物理ディスク未搭載でマルウェア残留・流出を根絶' },
      { label: 'スケーラビリティ', value: '数十台規模', detail: 'ZFSクローンでマスターから一瞬で複製可能' },
    ],
    sections: [
      {
        heading: '研究の背景と課題（なぜこの仕組みが必要か）',
        body: [
          'マルウェア検証や破壊的テスト（ランサムウェア感染、System32削除など）を行う現場では、OSが壊れるたびにクリーンインストールが必要になり、大きな負担となっていました。',
        ],
        points: [
          '復旧コストの増大：クリーンインストールに数十分〜数時間の膨大な時間を消費',
          '物理ストレージの摩耗：繰り返しの書き込みでSSDの寿命（TBW）を急速に消費',
          'データ流出リスク：実機に物理ディスクが残る限り、マルウェアの残留や機密持ち出しのリスクが消えない',
        ],
      },
      {
        heading: 'システム構成（アーキテクチャ）',
        body: [
          '物理ディスクを一切搭載しないクライアントPC（実機）と、LubuntuサーバーをギガビットLANで接続。OSに「ネットワーク越しのディスクを物理SATAの内蔵ディスクである」と錯覚させて完全ディスクレス起動させます。',
        ],
        points: [
          'クライアント側（物理ディスク未搭載）：通常のPXE（LANカード）でipxe.efiを取得 → iPXEでiSCSIを有効化しLUN 0を直接マウント → Windowsが完全ディスクレス起動',
          'サーバー側（Lubuntu物理PC＋外付けSSD）：外付けSSD上のZFSプール（tank）に70GB仮想ブロック（ZVOL: win10_disk）を作成。dnsmasq（DHCP/TFTP）でブートローダを配信し、targetcliでZVOLをiSCSI LUN 0（TCP 3260）として公開',
        ],
      },
      {
        heading: '試行錯誤：従来手法（wimboot）の限界とiBFTへの転換',
        body: [
          '当初はHTTP経由でboot.wim（約4GB）をすべてメモリに展開する従来手法「iPXE（wimboot方式）」を試みましたが、2つの壁に阻まれました。',
        ],
        points: [
          '2GBメモリの壁（古いBIOS）：メモリ空間の制限により4GBの読み込みでキャパオーバーしクラッシュ',
          'セキュリティ保護の壁（最新UEFI）：wimbootのメモリ書き換えが不正アクセスと検知され起動不可（Access Denied）',
          '解決策（ネイティブiSCSIブート）：iBFT（iSCSI Boot Firmware Table）を利用してBIOSからOSへ「このディスクはネットワーク越し」という情報を引き継ぎ、Windowsが起動途中で自発的にネットワークドライバを読み込む構成に転換。メモリ一括展開が不要なため、BIOS制限もUEFI保護もクリアし通信切断なしの安定起動を実現',
        ],
      },
      {
        heading: '高速復元サンドボックスの運用フロー（3ステップ）',
        body: [
          'ZFSのコピー・オン・ライト（CoW）機能を活用し、わずか1〜2秒でバイト単位の完全復元を行える運用フローを確立しました。',
        ],
        points: [
          '1. スナップショット作成：綺麗な状態のWindowsを保存（処理時間約1秒、容量消費0バイト）',
          '2. 破壊的テストの実行：ランサムウェアの全暗号化やSystem32削除など、危険な検証をクライアント上で実行',
          '3. 瞬間ロールバック：クライアントPCをシャットダウンし、サーバー側でコマンドを1行実行するだけで、1〜2秒で無傷な状態へバイト単位で完全復元。クライアント側には何も残らない',
        ],
        command: 'sudo zfs snapshot tank/win10@clean\n# （破壊的テストを実行後、PCをシャットダウンして実行）\nsudo zfs rollback tank/win10@clean',
      },
      {
        heading: '研究結果・導入効果',
        points: [
          '安全性の向上：実機に物理ディスクが存在しないため、マルウェアが残留せず物理層からの情報持ち出し・侵害経路が根本消滅',
          'テストサイクルの高速化：復元にかかる時間が従来の数十分から「1〜2秒」へ短縮され、検証サイクルを劇的に高速化',
          '低コスト＆スケール：Deep Freeze等の高額な商用製品を使わずOSSのみで実現。ZFSクローンにより1つのイメージから数十台規模へ一瞬で複製可能',
        ],
      },
    ],
    pdfDownloads: [
      {
        title: 'ゼミ演習報告書（PDF）',
        subtitle: 'ITゼミ演習（ネット・インフラ）2022年度後期報告書 / 辻 昂志朗',
        url: '/docs/iscsi-zfs-sandbox-report.pdf',
        size: '755 KB',
      },
      {
        title: '発表スライド資料（PDF）',
        subtitle: '「iSCSI×ZFS ディスクレスPCで瞬間復元サンドボックス環境の構築」全17ページ・図解付き',
        url: '/docs/iscsi-zfs-sandbox-slide.pdf',
        size: '2.3 MB',
      },
    ],
  },
  {
    id: '9p-filesystem-llm',
    title: '9Pを用いたファイルシステム指向のリモート操作インターフェースの構築',
    shortTitle: '9Pリモート操作インターフェース',
    period: 'ゼミ演習（現在進行中）',
    summary:
      'Plan 9の思想に基づき、SSHやWeb APIごとに異なるリモート管理操作を「ファイルシステムの読み書き」として統一する試み。CPUやメモリ等のリソースだけでなく「処理」も仮想ファイルツリーとして公開・制御し、発展としてLocal LLMとの親和性や新たな情報取得方式を検証中。',
    tags: ['Go', '9Pプロトコル', 'Plan 9', 'ファイルシステム', 'リモート管理', 'Local LLM'],
    highlights: [
      { label: '研究状況', value: '現在進行中', detail: 'サーバー・クライアント実装と基本操作を検証完了' },
      { label: '設計思想', value: 'Plan 9', detail: 'リソースも処理も「すべてはファイル」として抽象化' },
      { label: '操作体系', value: 'File Read/Write', detail: 'SSHや個別Web APIに依存しない統一インターフェース' },
      { label: '発展テーマ', value: 'Local LLM連携', detail: '従来のRAGとは異なるファイルツリー探索の検討' },
    ],
    sections: [
      {
        heading: 'テーマを決めた理由（研究の背景と動機）',
        body: [
          '9PはPlan 9というOSで使用されている通信プロトコルで、ネットワーク上のあらゆるリソースをファイルシステムのような階層構造として扱える点に興味を持ちました。',
          '一般的なネットワーク管理では、SSH、Web API、SNMPなど対象ごとに異なる操作方法を使い分ける必要がありますが、9Pを利用すれば情報の取得や設定を「ファイルの読み書き」に近い操作として統一できます。',
          'そこで、CPUやメモリなどのリソース情報だけでなく、ベンチマーク実行などの「処理」自体も仮想ファイルとして扱うことで、ネットワーク越しの操作をすべてファイルシステムのようなインターフェースに統一できないかと考え、研究を開始しました。',
        ],
      },
      {
        heading: '検証システムの構成と実装（現時点で構築したもの）',
        body: [
          'Go言語を用いて9P2000プロトコルのサーバー（9p_server）とクライアント（9p_client）を独自実装し、LAN環境でのリモート操作を検証しています。',
        ],
        points: [
          '9Pサーバー（9p_server）：TreeBuilderにより動的な仮想ディレクトリツリーを生成。CPU使用率・メモリ残量（node_sys）の取得や、ベンチマーク（node_bench）、リモート実行（node_exec）などを仮想ファイルノードとして公開',
          '9Pクライアント（9p_client）：LAN上の別PCから接続し、仮想ファイル「server/ctl/bench」に対するファイル読み書き操作だけでリモート制御を検証',
          'ファイル操作による処理フロー：Open/Readで初期状態確認 → 「start 5」等をWriteして処理開始 → 再度Readして進行状況を監視し、完了後に結果スコアを取得',
        ],
      },
      {
        heading: '現時点でわかっていること（得られた知見）',
        points: [
          '独自プロトコルやWeb APIを個別に設計しなくても、ディレクトリ階層（ツリー構造）と標準のRead/Write操作だけで、直感的かつ実用的なリモート操作インターフェースが成立することを確認',
          'CLIからの操作だけでなく、WinFsp等のファイルシステムマウント技術を組み合わせることで、OS標準のエクスプローラーや一般ツールからも同一の作法でリモートPCを操作できる柔軟性を実証',
          '軽量なTCPバイナリプロトコルでありながら、OSのファイルツリー構造が持つ認知的負荷の低さをリモート管理に応用できる手応えを得た',
        ],
      },
      {
        heading: '今後の検証・発展（Local LLMとの親和性）',
        body: [
          '本研究の発展的な試みとして、9Pで公開した情報や処理インターフェースを Local LLM から直接利用できる構成の検証を進めています。',
        ],
        points: [
          '従来のRAG方式（ベクター検索）とは異なる情報取得アプローチとして、LLMがOS標準のファイル操作ツールだけでPCの状態や蓄積したKnowledgeツリーを参照・探索できるかの検討',
          'LLMに複雑なWeb API仕様を学習・プロンプト注入することなく、「ファイルを読む・書く」という最も堅牢な基本操作だけで外部処理を自律実行させるエージェント基盤としての可能性を検証中',
        ],
      },
    ],
    links: [
      { label: 'GitHub: 9p_client', url: 'https://github.com/kt-suji/9p_client' },
      { label: 'GitHub: 9p_server', url: 'https://github.com/kt-suji/9p_server' },
    ],
  },
];

/**
 * 技術一覧。点数や段階は付けず、名前だけを載せる。
 */
export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'インフラ',
    items: ['Linux', 'Docker', 'KVM', 'PXE / iPXE Boot', 'iSCSI', 'ZFS', 'NFS / SMB', 'Nginx'],
  },
  {
    title: '言語',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'C++', 'C#', 'Kotlin', 'Dart', 'Python', 'Go', 'Rust'],
  },
  {
    title: 'フレームワーク・ランタイム',
    items: ['React', 'React Native', 'Vue', 'Laravel', 'Node.js', 'Flutter'],
  },
];
