import type { Metadata } from "next";
import "../globals.css";
import styles from '../layout.module.css'
import { Footer } from "../components";
import { Header } from "../components/Header/Header";
import { inter } from '../ui/fonts'

export const metadata: Metadata = {
  title: "Todo App",
  description: "Create by NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <div className={styles.wrapper}>
        <Header className={styles.header}/>
        <div className={styles.body}>
          {children}
        </div>
        <Footer className={styles.footer}/>
        </div>
      </body>
    </html>
  );
}
