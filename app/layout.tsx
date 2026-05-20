import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const pagesAssetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "NEOVOLT",
  description: "Профессиональный электромонтаж",
  ...(pagesAssetBase
    ? {
        icons: {
          icon: [{ url: `${pagesAssetBase}/images/NeoVolt.png`, type: "image/png" }],
        },
      }
    : {}),
};

const githubPagesImageFix = `
(function () {
  function fixRootRelativeImages() {
    if (!location.hostname.endsWith(".github.io")) return;
    var seg = location.pathname.split("/").filter(Boolean)[0];
    if (!seg) return;
    var prefix = "/" + seg;
    document.querySelectorAll('img[src^="/"]').forEach(function (img) {
      var s = img.getAttribute("src");
      if (!s || /^https?:/i.test(s)) return;
      if (s.startsWith(prefix + "/")) return;
      img.setAttribute("src", prefix + s);
    });
  }
  fixRootRelativeImages();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixRootRelativeImages);
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300`}>
        <Script id="github-pages-img-src-fix" strategy="beforeInteractive">
          {githubPagesImageFix}
        </Script>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 