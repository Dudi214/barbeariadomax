"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/bannerimov.jpeg"
          alt="Barbearia do Max"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="relative text-center space-y-6 z-10">

        <h1 className="text-5xl md:text-6xl font-bold !text-yellow-400">
          Barbearia do Max
        </h1>

        <p className="text-lg !text-amber-500">
          Estilo, precisão e tradição
        </p>

        <ShimmerButton
          className="mx-auto"
          onClick={() => {
            document.getElementById("servicos")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Agendar Horário
        </ShimmerButton>

      </div>
    </section>
  );
}