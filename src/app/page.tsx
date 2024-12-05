'use client';

import React from 'react';
import Main from '../components/LandingPage/Main';
import Header from '@/components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer /> {/* Renderiza o Footer aqui */}
    </>
  );
}
