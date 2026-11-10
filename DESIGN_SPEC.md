# job-portfolio2 設計メモ（現行版）

就活用ポートフォリオ（辻 昂志朗 / ネットワーク・インフラエンジニア志望）。Next.js 静的書き出し → GitHub Pages。

## 方針
- 既存の `job-portfolio` は**情報だけ**を参照する。デザイン・CSSは見ない。
- 本人の事実だけを書く。推測で経緯や理由を補わない（`src/data/portfolio.ts` が唯一のデータ源）。
- 「AIっぽさ」を避ける: グラデーション・影・絵文字・丸いカード・%バー・飾りの英語ラベル（SHEET/FIG/STACK等）を使わない。説明は「何に困り、どう決め、どこを担当したか」を平易な日本語で書く。

## レイアウト
- 左: 固定サイドバー（氏名・卒業予定・所属・メニュー・メール/GitHub）。幅 316px。960px 以下は上部に移動。
- 右: ページ本体。
- ページ: `/` 制作物一覧 / `/works/[slug]/` 制作物詳細 / `/research/` 研究 / `/skills/` 技術 / `/profile/` 自己紹介・学歴

## 増やし方（すべて `src/data/portfolio.ts` を編集）
- 制作物: `WORKS_DATA` に1件追加。`diagramKind` と `layers` は省略可（省略すると構成図なしで表示）。一覧と詳細ページは自動生成。
- 研究: `RESEARCH_DATA` に1件追加（現在は空で「準備中」表示）。
- 技術: `SKILLS_DATA` に追加。`level` は旧サイトの自己評価の数値。
- 構成図を新しく付ける場合のみ `ArchitectureDiagram.tsx` に図を追加する。

## デザイントークン（`globals.css`）
- 左: `#181917`（墨）/ 右: 紙色 `#F5F3EE`、面 `#FCFBF8`、文字 `#171716`
- アクセント: `#1B4965` のみ
- 角丸 2px まで、影なし、罫線は 1px

## 確認済みの事実（変更時の注意）
- PCトラブル診断ツールは PHP を使っていない（HTML/CSS/JavaScript）。1年次の個人制作。
- Cisco は学校の授業で使用したのみ。
- ファイル共有システムはv1（素のPHP+Apache）でRAT感染 → 作り直し、Nginx 等を使い始めた。
- L.O.C. のバックエンド担当理由: メンバーで Node.js 経験者が自分だけだった。

## 公開
- `.github/workflows/deploy.yml` で GitHub Pages へ自動デプロイ（Settings → Pages → Source を GitHub Actions に）。
- **現時点では GitHub へは未公開。**
- `npm run dev` で確認、`npm run build` で `out/` を生成。
