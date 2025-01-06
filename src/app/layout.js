import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired font weights
});

export const metadata = {
  title: "Vo Hieu",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
