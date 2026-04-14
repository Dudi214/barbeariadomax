import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Servicos from "@/components/Servicos"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Produtos from '../components/Produtos'
import ChatBot from "@/components/ChatBot"
import Depoimentos from "@/components/Depoimentos"

export default function Home() {

  return (
    <main>

      {/* INÍCIO */}
      <section id="inicio">
        <Hero />
      </section>

      {/* SOBRE */}
      <section id="sobre">
        <Sobre />
      </section>

      {/* SERVIÇOS */}
      <section id="servicos">
        <Servicos />
      </section>

      {/* PRODUTOS */}
      <Produtos />

      {/* DEPOIMENTOS */}
      <Depoimentos />

      {/* FAQ */}
      <FAQ />

      {/* CONTATO */}
      <section id="contato">
        <Footer />
      </section>

      <ChatBot />

    </main>
  )
}