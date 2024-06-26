import "@/assets/css/style.css";
import "@/assets/css/dropdownmenu.css";
import "@/assets/css/sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NextTopLoader from "nextjs-toploader";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Ostad Blog Website Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#f00" height={2} speed={200} />
        {children}
      </body>
    </html>
  );
}
