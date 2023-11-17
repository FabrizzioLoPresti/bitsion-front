import React from 'react';

type Props = {};

export default function DashboardPage({}: Props) {
  return (
    <div className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-center text-3xl">Dashboard Page</h1>
      <p>Ruta Protegida</p>
    </div>
  );
}
