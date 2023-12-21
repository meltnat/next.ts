import Head from "next/head"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="ja">
      <header></header>
      <body>{children}</body>
      <footer>Copyright © 2023 .#@ a.k.a meltnat All Rights Reserved.</footer>
    </html>
  )
}