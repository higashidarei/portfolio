/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // これがポイント
  images: {
    unoptimized: true, // 画像最適化OFF（静的出力向け）
  },
};

module.exports = nextConfig;
