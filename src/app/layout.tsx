import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Protest_Revolution } from 'next/font/google'

const logoFont = Protest_Revolution({
    weight: ['400'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Jiki",
    description: "System ERP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
