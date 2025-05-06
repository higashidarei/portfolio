
import "@/styles/style.scss";
import type { ReactNode } from "react";
import ClientLayoutWrapper from "src/components/layout/ClientLayoutWrapper";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
