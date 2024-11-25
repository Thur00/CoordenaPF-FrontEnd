import "../globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

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
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
