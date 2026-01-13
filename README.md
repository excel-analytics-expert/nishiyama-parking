# 西山興業赤坂ビル有料駐車場サイト

Next.js (App Router) + Tailwind CSS で構築された駐車場料金サイトです。

## 技術スタック

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (アニメーション)
- **Lucide React** (アイコン)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. 本番ビルド

```bash
npm run build
npm start
```

## 環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## デプロイ

### Vercel

[Vercel](https://vercel.com) にデプロイする場合：

1. GitHubリポジトリにプッシュ
2. Vercelでプロジェクトをインポート
3. 環境変数を設定
4. デプロイ

### その他のプラットフォーム

Next.jsの標準的なビルドコマンド (`npm run build`) を使用してデプロイできます。

## 注意事項

- 現在、`robots: { index: false, follow: false }` が設定されており、検索エンジンにインデックスされません（仮公開用設定）
- 本番公開前に環境変数 `NEXT_PUBLIC_SITE_URL` を適切に設定してください
- OGP画像 (`/og-image.jpg`) を追加することを推奨します

## ライセンス

© 2024 西山興業赤坂ビル有料駐車場. All rights reserved.
