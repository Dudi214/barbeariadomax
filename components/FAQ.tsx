"use client"

import { useState } from "react"

export default function FAQ() {

  const perguntas = [
    {
      pergunta: "Precisa agendar horário?",
      resposta: "Sim, recomendamos agendar para garantir seu atendimento."
    },
    {
      pergunta: "Quais formas de pagamento?",
      resposta: "Aceitamos dinheiro, Pix e cartão."
    },
    {
      pergunta: "Qual horário de funcionamento?",
      resposta: "Segunda a sábado das 9h às 20h."
    }
  ]

  const [aberto,setAberto] = useState<number | null>(null)

  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
          Perguntas Frequentes
        </h2>

        {perguntas.map((item,index)=>(
          
          <div key={index} className="border-b border-gray-700 py-4">

            <button
              onClick={()=>setAberto(aberto === index ? null : index)}
              className="w-full text-left font-semibold text-lg"
            >
              {item.pergunta}
            </button>

            {aberto === index && (
              <p className="text-gray-400 mt-2">
                {item.resposta}
              </p>
            )}

          </div>

        ))}

      </div>

    </section>
  )
}