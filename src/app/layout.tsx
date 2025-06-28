import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./styles/globals.scss";
import { Toaster } from "react-hot-toast";

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
  title: "Lisa Folawiyo | Luxury African Fashion with Hand Embellishment",
  description: "Discover Lisa Folawiyo's luxury African fashion, where hand embellishment meets contemporary elegance. Shop our latest collections today.",
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
            {children}
      </body>
    </html>
  );
}
