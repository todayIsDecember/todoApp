import type { Metadata } from "next";
import "../globals.css";
import styles from '../layout.module.css'
import { inter } from '../ui/fonts'
import { Header } from "../components/Header/Header";
import { Footer } from "../components";

export const metadata: Metadata = {
  title: "Список справ",
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
