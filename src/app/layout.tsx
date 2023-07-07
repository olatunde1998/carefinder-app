
// import Footer from "./components/footerComponents/footer";
// import NavBar from "./components/navBar/navBar";
import "./globals.css";
import { Benne } from "next/font/google";

const benne = Benne({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Carefinder",
  description: "An app to help you find the best nearby hospital with hospital details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={benne.className}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
