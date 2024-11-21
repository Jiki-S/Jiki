import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Jiki",
    description: "System ERP",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <ToastContainer/>
            </body>
        </html>
    );
}
