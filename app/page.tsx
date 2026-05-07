"use client";

import { lazy, Suspense } from "react";

const AppRouter = lazy(() => import("./AppRouter"));

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F2EC]" />}>
      <AppRouter />
    </Suspense>
  );
}