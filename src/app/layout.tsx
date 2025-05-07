
import "@/styles/style.scss";
import type { ReactNode } from "react";
import ClientLayoutWrapper from "src/components/layout/ClientLayoutWrapper";
import StarBackground from "@/components/effects/StarBackground";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="stars-bg">
        </div>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          <StarBackground />
      </body>
    </html>
  );
}
