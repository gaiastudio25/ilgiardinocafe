"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./home/page"));
const MenuPage = lazy(() => import("./menu/page"));
const NosotrosPage = lazy(() => import("./nosotros/page"));
const ContactoPage = lazy(() => import("./contacto/page"));

function ScrollHandler() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRouter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F7F2EC]" />
    );
  }

  return (
    <BrowserRouter>
      <ScrollHandler />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-[#F7F2EC]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}