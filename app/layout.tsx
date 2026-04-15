import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مطعم الريان | تجربة مذاق أصيلة",
  description: "مطعم الريان يقدم مشويات وأطباق عربية بطابع حديث.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
