// import localFont from "next/font/local";
import "./globals.css";
import Nabar from "@/Components/Nabar";

import Footer from "@/Components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nabar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
