"use client"

import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {

const telefone = "5524999996655"

const whatsappLink = `https://wa.me/${telefone}`

return (

<footer id="contato" className="bg-neutral-900 text-white py-16">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

{/* CONTATO */}
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-500">
Contato
</h3>


<p>Email: contato@barbeariadomax.com</p>

<a
href={whatsappLink}
target="_blank"
className="mt-4 inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-400 transition"
>
<FaWhatsapp />
Falar no WhatsApp
</a>

</div>


{/* LOCALIZAÇÃO + MAPA */}
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-500 flex items-center gap-2">
<FaMapMarkerAlt />
Localização
</h3>

<p>Rua Exemplo 123</p>
<p>Angra dos Reis - RJ</p>

<div className="mt-4 rounded-lg overflow-hidden">

<iframe
src="https://www.google.com/maps?q=Angra%20dos%20Reis%20RJ&output=embed"
width="100%"
height="200"
style={{ border: 0 }}
loading="lazy"
/>

</div>

</div>


{/* REDES SOCIAIS */}
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-500">
Redes Sociais
</h3>

<div className="flex gap-4 text-2xl">

<a
href="https://www.instagram.com/eduardo_dias214/"
className="bg-neutral-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
>
<FaInstagram />
</a>

<a
href="#"
className="bg-neutral-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
>
<FaFacebookF />
</a>

<a
href={whatsappLink}
target="_blank"
className="bg-neutral-800 p-3 rounded-full hover:bg-green-500 hover:text-black transition"
>
<FaWhatsapp />
</a>

</div>

</div>

</div>


{/* RODAPÉ FINAL */}
<div className="text-center mt-10 text-gray-400 text-sm">
© 2026 Barbearia do Max — Todos os direitos reservados
</div>

</footer>

)
}