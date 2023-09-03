import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Tajawal } from "next/font/google";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
// const Switcher = dynamic(() => import("../../componants/Switcher"));
const league_Spartan = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "200", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
});

export const metadata = {
  title: "باجكو || تفصيل مغاسل رخام فخمه",
  description:
    "تفصيل مغاسل رخامية فخمه حسب التصميم , تنفيذ الديكورات الرخامية ولوحات التلفزيون",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="RTL">
      <body className={`${league_Spartan.className} dark:bg-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
