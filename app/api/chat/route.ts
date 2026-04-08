import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Barbearia Bot"
      },
      body: JSON.stringify({
        model: "openrouter/auto",

        max_tokens: 80,
        temperature: 0.7,

        messages: [
          {
            role: "system",
            content: `
Você é atendente da Barbearia do Max 💈

REGRAS:
- Responda em no máximo 2 frases
- Seja direta e simples
- Fale como humano (estilo WhatsApp)
- Nunca escreva texto longo
- Sempre leve o cliente para ação

AÇÃO:
- Incentive clicar nos serviços
- OU chamar no WhatsApp

IMPORTANTE:
- Quando mencionar WhatsApp, inclua no FINAL da resposta: [WHATSAPP]

INFORMAÇÕES:
- Corte: R$35
- Barba: R$25
- Combo: R$55
- Horário: 09h às 18h (segunda a sábado)
- Local: Angra dos Reis - RJ
- WhatsApp: https://wa.me/5524999996655

Se não souber:
"Posso te ajudar com agendamento ou WhatsApp 😊 [WHATSAPP]"
`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    })

    const data = await response.json()

    console.log("RESPOSTA COMPLETA:", data)

    let reply =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      ""

    // fallback
    if (!reply) {
      reply = "Posso te ajudar com agendamento ou WhatsApp 😊 [WHATSAPP]"
    }

    reply = reply.trim()

    // 🔥 GARANTE QUE SEMPRE TENHA BOTÃO
    if (!reply.includes("[WHATSAPP]")) {
      reply += "\n[WHATSAPP]"
    }

    return NextResponse.json({ reply })

  } catch (error) {
    console.log("ERRO:", error)

    return NextResponse.json({
      reply: "Tive um erro 😢 me chama no WhatsApp que te ajudo! [WHATSAPP]"
    })
  }
}