"use client"
import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <Image
          src="/banner2.png"
          alt="Barbearia"
           width={600}
           height={400}
          className="object-cover rounded-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6 text-yellow-500">
            Sobre a Barbearia
          </h2>

          <p className="text-gray-300 leading-relaxed">
            A Barbearia do Max oferece cortes modernos, barba e cuidados
            masculinos com qualidade e tradição. Nosso objetivo é entregar
            estilo, conforto e um atendimento diferenciado para todos os
            clientes.
          </p>
        </div>

        
              <ShimmerButton
                        className="mx-auto"
                        onClick={() => {
                          document.getElementById("servicos")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Marque Agora
              </ShimmerButton>
              

      </div>
    </section>
  )
}