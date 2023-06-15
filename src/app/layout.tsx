import "./globals.scss";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  
  title: "Spider-Verse",
  description:
  "Criando um carrossel parallax do Aranhaverso com React, Next.js 13 e Framer Motion",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

        {/* <head>
          <link rel="shortcut icon" href="/public/assets/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/favicon-16x16.png" />
          <link rel="mask-icon" href="/public/assets/safari-pinned-tab.svg" color="#5bbad5" />
        </head> */}
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu options"
            width={36}
            height={25}
            priority
          />
          <Link href="/">
            <Image
              src="/spider-logo.svg"
              alt="Spiderman"
              width={260}
              height={70}
              priority
            />
          </Link>
          <Image
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36}
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}