import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Header from "@/components/Header";
import Layout from "@/layout/Layout";
import "./index.css";


type RootLayoutProps = {
   children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "news homepage",
   description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Layout>
               <main role="main">
                  {children}
               </main>
            </Layout>
         </body>
      </html>
   );
}
