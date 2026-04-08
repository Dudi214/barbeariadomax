export default function Depoimentos() {

  const depoimentos = [
    {
      nome: "Lucas Silva",
      foto: "/pic-1.png",
      mensagens: [
        { tipo: "cliente", texto: "Mano, corte ficou perfeito 🔥", hora: "14:32" },
        { tipo: "barbearia", texto: "Valeu irmão! Tamo junto 💈", hora: "14:33" },
        { tipo: "cliente", texto: "Já virei cliente fixo 😂", hora: "14:34" },
      ]
    },
    {
      nome: "Rafaela Souza",
      foto: "/pic-2.png",
      mensagens: [
        { tipo: "cliente", texto: "Atendimento diferenciado 👏", hora: "10:12" },
        { tipo: "barbearia", texto: "Aqui é padrão 💈🔥", hora: "10:13" },
        { tipo: "cliente", texto: "Melhor de Angra sem dúvida", hora: "10:14" },
      ]
    },
    {
      nome: "Bruno Costa",
      foto: "/pic-3.png",
      mensagens: [
        { tipo: "cliente", texto: "Corte rápido e bem feito 💯", hora: "18:02" },
        { tipo: "barbearia", texto: "Valeu demais! Volta sempre", hora: "18:03" },
        { tipo: "cliente", texto: "Já indiquei pra geral 🔥", hora: "18:04" },
      ]
    }
  ]

  return (
    <section className="py-20 bg-neutral-950 text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        💬 Clientes satisfeitos
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

        {depoimentos.map((d, i) => (

          <div key={i} className="bg-[#111] rounded-2xl p-4 shadow-lg hover:scale-105 transition">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <img src={d.foto} className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <p className="text-sm font-bold">{d.nome}</p>
                <p className="text-xs text-green-400">online agora</p>
              </div>
            </div>

            {/* CHAT */}
            <div className="flex flex-col gap-2 text-sm">

              {d.mensagens.map((m, index) => (

                <div
                  key={index}
                  className={`p-2 rounded-lg w-fit ${
                    m.tipo === "cliente"
                    ? "bg-green-500 text-black ml-auto"
                    : "bg-neutral-800"
                  }`}
                >
                  {m.texto}
                  <span className="block text-[10px] text-right mt-1">
                    {m.hora}
                  </span>
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}