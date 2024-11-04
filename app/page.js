'use client'
import Image from "next/image";

import ThreeScene from './components/ThreeScene';

export default function Home() {
  return (
    <div>
      <h1>My Three.js Scene</h1>
      <ThreeScene />
    </div>
  );
}