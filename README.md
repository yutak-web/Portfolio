# Portfolio

Yuta Kanehara のポートフォリオサイトです。プロフィール、技術スタック、プロジェクト実績、研究活動、資格、趣味を整理して掲載しています。

公開URL: https://yutak-web.github.io/Portfolio/

## Features

- Home: 自己紹介、技術スタック、代表的なプロジェクトを表示
- Projects: データ分析コンペ、ハッカソン、個人開発、研究活動をカテゴリ別に一覧表示
- Project Detail: 各プロジェクトの概要、担当範囲、成果、使用技術、関連リンクを表示
- About Me: 自己紹介、スキル、経歴、資格、趣味を表示
- Contact: Mail / GitHub / LinkedIn / Zenn へのリンクをフッターに表示

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Three.js / React Three Fiber / Drei
- ESLint
- GitHub Pages

## Requirements

- Node.js 22
- npm

GitHub Actions でも Node.js 22 を使用しています。

## Setup

```bash
npm ci
```

## Development

```bash
npm run dev
```

ローカル開発サーバーを起動します。

## Build

```bash
npm run build
```

TypeScript のビルドチェック後、Vite で本番用の `dist` を生成します。

## Preview

```bash
npm run preview
```

生成済みの `dist` をローカルで確認します。

## Lint

```bash
npm run lint
```

ESLint でコードを検査します。

## Deployment

`main` ブランチへ push すると、GitHub Actions の `Deploy to GitHub Pages` ワークフローが実行されます。

ビルド時は GitHub Pages のサブパスに合わせて `VITE_BASE_PATH=/Portfolio/` を指定しています。ローカルでは `vite.config.ts` の設定により、未指定の場合は `./` が使われます。

## Project Structure

```text
src/
  assets/              画像などの静的アセット
  components/          レイアウト、カード、スキル表示、背景などの共通コンポーネント
  data/                プロフィール、スキル、プロジェクト、経歴などの表示データ
  pages/               Home / Projects / Project Detail / About Me の各ページ
  App.tsx              ルーティング定義
  main.tsx             エントリーポイント
public/                favicon などの公開ファイル
.github/workflows/     GitHub Pages デプロイ設定
```

## Data Updates

表示内容は主に `src/data/` 配下で管理しています。

- プロフィール: `src/data/profile.ts`
- スキル: `src/data/skills.ts`
- データ分析コンペ実績: `src/data/achievementsMl.ts`
- ハッカソン実績: `src/data/achievementsFe.ts`
- 個人開発: `src/data/productsPersonal.ts`
- 研究活動と代表プロジェクト: `src/data/projects.ts`
- 経歴: `src/data/timeline.ts`
- 資格: `src/data/certs.ts`
- 趣味: `src/data/hobbies.ts`

プロジェクトを追加する場合は `Project` 型に合わせてデータを追加し、必要に応じて `src/assets/` に画像を配置します。
