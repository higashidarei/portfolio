FROM node:18-alpine

# 作業ディレクトリ作成
WORKDIR /app

# package.json をコピーして依存関係をインストール
COPY package.json package-lock.json* ./
RUN npm install

# アプリケーションの全コードをコピー
COPY . .

# 開発サーバをデフォルトで起動
CMD ["npm", "run", "dev"]
