"use client"

import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function Produtos() {

const telefone = "5524999996655"

const produtos = [
{ nome: "Pomada Modeladora", preco: "R$ 30", img: "/polmadamodeladora2.webp" },
{ nome: "Gel Fixador", preco: "R$ 20", img: "/gelcola.png" },
{ nome: "Spray Capilar", preco: "R$ 25", img: "/oledebarbanovo.png" }
]

// função comprar
function comprarProduto(nome:string, preco:string){

const mensagem =
`Olá, gostaria de comprar:

Produto: ${nome}
Preço: ${preco}

Pode me informar como pagar e retirar?`

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

}

return (

<section className="py-20 bg-black text-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-12 text-yellow-500">
Produtos
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{produtos.map((item, index) => (

<div
key={index}
className="bg-neutral-900 rounded-xl border border-gray-800 hover:border-yellow-500 transition overflow-hidden hover:scale-105 duration-300"
>

<Image
src={item.img}
alt={item.nome}
width={400}
height={300}
className="w-full h-48 object-contain bg-white"
/>

<div className="p-6">

<h3 className="text-xl font-semibold mb-3">
{item.nome}
</h3>

<p className="text-yellow-500 font-bold text-lg mb-4">
{item.preco}
</p>

<ShimmerButton
className="w-full"
onClick={()=>comprarProduto(item.nome,item.preco)}
>
Comprar Agora
</ShimmerButton>

</div>

</div>

))}

</div>

</div>

</section>

)
}