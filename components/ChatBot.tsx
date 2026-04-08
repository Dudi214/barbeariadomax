"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, X } from "lucide-react"

export default function ChatBot() {

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([
    { role:"bot", text:"Olá! Sou a assistente da Barbearia do Max 💈 Como posso te ajudar?" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const telefone = "5524999996655"

  async function enviar() {

    if(!input || loading) return

    const userMsg = { role:"user", text:input }

    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()

      const resposta = data.reply || "Erro ao responder 😢"

      setMessages(prev => [
        ...prev,
        {
          role:"bot",
          text: resposta,
          showButton: resposta.includes("[WHATSAPP]")
        }
      ])

      // 🔥 scroll automático
      if (input.toLowerCase().includes("agendar")) {
        document.getElementById("servicos")?.scrollIntoView({ behavior:"smooth" })
      }

    } catch {
      setMessages(prev => [
        ...prev,
        { role:"bot", text: "Erro no servidor 😢" }
      ])
    }

    setLoading(false)
  }

  return (

    <>

      {/* BOTÃO FLUTUANTE */}
      <button
        onClick={()=>setOpen(!open)}
        className="fixed bottom-6 right-6 bg-yellow-500 p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        {open ? <X/> : <MessageCircle/>}
      </button>

      {/* CHAT */}
      {open && (

        <div className="fixed bottom-20 right-6 w-80 bg-black rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">

          {/* HEADER */}
          <div className="flex items-center gap-3 p-3 bg-neutral-900">

            <Image
              src="/atendente.webp"
              alt="Atendente"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div>
              <p className="text-yellow-500 font-bold text-sm">
                Assistente Virtual
              </p>
              <p className="text-xs text-green-400">
                Online agora
              </p>
            </div>

          </div>

          {/* MENSAGENS */}
          <div className="p-3 h-64 overflow-y-auto flex flex-col gap-2">

            {messages.map((m,i)=>{

              const cleanText = m.text?.replace("[WHATSAPP]", "")

              return (
                <div
                  key={i}
                  className={`p-2 rounded text-sm max-w-[80%] ${
                    m.role==="user"
                    ? "bg-yellow-500 text-black self-end"
                    : "bg-neutral-800 text-white"
                  }`}
                >

                  {cleanText}

                  {/* 🔥 BOTÃO WHATSAPP */}
                  {m.showButton && (
                    <button
                      onClick={() => window.open(`https://wa.me/${telefone}`, "_blank")}
                      className="mt-2 w-full bg-green-500 text-white p-2 rounded text-xs hover:scale-105 transition"
                    >
                      📲 Falar no WhatsApp
                    </button>
                  )}

                </div>
              )
            })}

            {loading && (
              <div className="text-xs text-gray-400">
                digitando...
              </div>
            )}

          </div>

          {/* INPUT */}
          <div className="p-2 flex gap-2">

            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 rounded bg-neutral-800 text-white"
            />

            <button
              onClick={enviar}
              className="bg-yellow-500 px-3 rounded"
            >
              Enviar
            </button>

          </div>

        </div>

      )}

    </>
  )
}