# job-portfolio2 — 辻 昂志朗 ポートフォリオ

ネットワーク・インフラエンジニア志望（ECCコンピュータ専門学校 高度情報処理研究学科 ネットワーク・セキュリティ専攻 / 2028年3月卒業予定）の就職活動用ポートフォリオサイトです。

設計方針・デザイントークン・確定ファクトデータ・コンポーネント仕様の詳細は [`DESIGN_SPEC.md`](./DESIGN_SPEC.md) に記載しています。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。

## 静的ビルド確認（GitHub Pages 用出力）

```bash
npm run build
```

`out/` ディレクトリに完全な静的HTML/CSS/JSが生成されます。

## GitHub Pages への公開手順

1. 本ディレクトリ（`job-portfolio2`）を GitHub リポジトリへ push します（ブランチ名 `main` または `master`）。
2. GitHub リポジトリの **Settings → Pages → Build and deployment** にて、**Source** を **`GitHub Actions`** に設定します。
3. push 時に `.github/workflows/deploy.yml` が自動実行され、`actions/configure-pages` によりルート公開（`https://<user>.github.io/`）・サブパス公開（`https://<user>.github.io/<repo>/`）を自動判別してデプロイされます。
