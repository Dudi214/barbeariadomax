import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Servicos from "@/components/Servicos"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Produtos from '../components/Produtos';
import ChatBot from "@/components/ChatBot"
import Depoimentos from "@/components/Depoimentos"


export default function Home() {

  return (
    <main>

      <Hero />

      <Sobre />

      <Servicos />

      <Produtos/>

      <Depoimentos />

      <FAQ />

      <Footer />

      <ChatBot />

    </main>
  )

}