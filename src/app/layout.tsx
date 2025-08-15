import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./styles/globals.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/blog.scss";
import "./styles/single-blog.scss";
import "./styles/services.scss";
import "./styles/contact.scss";
import "./styles/expertise.scss";
import "./styles/text-marquee.scss";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-Poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Elevate Retail",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} /> 
          <Navbar />
            {children}
          <Footer />
      </body>
    </html>
  );
}
