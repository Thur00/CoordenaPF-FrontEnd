import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Sistema GO",
  description: "Sistema de gerenciamento de Ocorrências",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/416aa0022c.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
