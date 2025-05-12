
import "@/styles/style.scss";
import type { ReactNode } from "react";
import ClientLayoutWrapper from "src/components/layout/ClientLayoutWrapper";
import StarBackground from "@/components/effects/StarBackground";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        <StarBackground />
      </body>
    </html>
  );
}
