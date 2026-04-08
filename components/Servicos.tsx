"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function Servicos() {

// 🛒 PRODUTOS COM PREÇO
const produtosLista = [
{ nome: "Pomada Modeladora", preco: 30 },
{ nome: "Gel Fixador", preco: 20 },
{ nome: "Spray Capilar", preco: 25 }
]

// 🛒 CARRINHO
const [produtosSelecionados, setProdutosSelecionados] = useState<{nome:string, preco:number}[]>([])

const servicos = [
{ nome: "Corte Masculino", preco: "R$ 35", img: "/corte1verzaoatualizado3.jpeg" },
{ nome: "Barba", preco: "R$ 25", img: "/barbas.jpg" },
{ nome: "Corte + Barba", preco: "R$ 55", img: "/barbasnova.jpg" },
{ nome: "Pigmentação", preco: "R$ 40", img: "/pintura.jpeg" }
]

const telefone = "5524999996655"

const [servicoSelecionado, setServicoSelecionado] = useState("")
const [precoSelecionado, setPrecoSelecionado] = useState("")
const [data, setData] = useState("")
const [hora, setHora] = useState("")

const formRef = useRef<HTMLDivElement>(null)

const horarios = [
"09:00","09:30","10:00","10:30",
"11:00","11:30","13:00","13:30",
"14:00","14:30","15:00","15:30",
"16:00","16:30","17:00","17:30"
]

// selecionar serviço
function selecionarServico(nome:string,preco:string){

setServicoSelecionado(nome)
setPrecoSelecionado(preco)

setTimeout(()=>{
formRef.current?.scrollIntoView({behavior:"smooth"})
},200)

}

// 🛒 adicionar/remover produto
function toggleProduto(produto:{nome:string, preco:number}){

const existe = produtosSelecionados.find(p => p.nome === produto.nome)

if(existe){
setProdutosSelecionados(produtosSelecionados.filter(p=>p.nome !== produto.nome))
}else{
setProdutosSelecionados([...produtosSelecionados, produto])
}

}

// 💰 CALCULAR TOTAL
const totalProdutos = produtosSelecionados.reduce((acc, p) => acc + p.preco, 0)

const precoServicoNumero = Number(precoSelecionado.replace("R$","").trim()) || 0

const totalGeral = precoServicoNumero + totalProdutos

// 📩 enviar
function enviarAgendamento(){

if(!servicoSelecionado || !data || !hora){
alert("Escolha serviço, data e horário")
return
}

const mensagem =
`Olá, gostaria de agendar:

Serviço: ${servicoSelecionado}
Preço: R$ ${precoServicoNumero}

Data: ${data}
Horário: ${hora}

Produtos: ${produtosSelecionados.length > 0 ? produtosSelecionados.map(p=>p.nome).join(", ") : "Nenhum"}

Total: R$ ${totalGeral}

Meu nome é:`

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

}

return (

<section id="servicos" className="py-20 bg-neutral-900 text-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-12 text-yellow-500">
Nossos Serviços
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{servicos.map((item,index)=>(

<div
key={index}
className="bg-black rounded-xl border border-gray-800 hover:border-yellow-500 transition overflow-hidden hover:scale-105 duration-300"
>

<Image
src={item.img}
alt={item.nome}
width={400}
height={300}
className="w-full h-48 object-cover bg-white"
/>

<div className="p-6">

<h3 className="text-xl font-semibold mb-2">
{item.nome}
</h3>

<p className="text-yellow-500 font-bold text-lg mb-4">
{item.preco}
</p>

<ShimmerButton
className="w-full"
onClick={()=>selecionarServico(item.nome,item.preco)}
>
Escolher Serviço
</ShimmerButton>

</div>

</div>

))}

</div>


{/* FORMULÁRIO */}

{servicoSelecionado && (

<div
ref={formRef}
className="mt-20 max-w-xl mx-auto bg-black border border-gray-800 rounded-xl p-8"
>

<h3 className="text-2xl font-bold text-yellow-500 mb-6">
Agendar Horário
</h3>

<p className="mb-6">
Serviço:
<span className="text-yellow-500 ml-2 font-semibold">
{servicoSelecionado}
</span>
</p>

<input
type="date"
className="w-full p-3 mb-6 bg-neutral-800 rounded"
onChange={(e)=>setData(e.target.value)}
/>

<p className="mb-3 text-sm text-gray-400">
Escolha um horário
</p>

<div className="grid grid-cols-4 gap-2 mb-6">

{horarios.map((h,index)=>(

<button
key={index}
onClick={()=>setHora(h)}
className={`p-2 rounded border text-sm
${hora===h
? "bg-yellow-500 text-black border-yellow-500"
: "border-gray-700 hover:border-yellow-500"}
`}
>
{h}
</button>

))}

</div>


{/* 🛒 PRODUTOS */}

<h4 className="text-lg font-semibold mb-3">
Adicionar Produtos (opcional)
</h4>

<div className="grid grid-cols-2 gap-2 mb-6">

{produtosLista.map((produto,index)=>(

<button
key={index}
onClick={()=>toggleProduto(produto)}
className={`p-2 rounded border text-sm transition
${produtosSelecionados.some(p=>p.nome === produto.nome)
? "bg-yellow-500 text-black border-yellow-500"
: "border-gray-700 hover:border-yellow-500"}
`}
>
{produto.nome}
</button>

))}

</div>


{/* 💰 TOTAL */}

<div className="mb-6 text-center">

<p className="text-lg">
Serviço: <span className="text-yellow-500">R$ {precoServicoNumero}</span>
</p>

<p className="text-lg">
Produtos: <span className="text-yellow-500">R$ {totalProdutos}</span>
</p>

<p className="text-2xl font-bold mt-2">
Total: <span className="text-green-500">R$ {totalGeral}</span>
</p>

</div>


<ShimmerButton
className="w-full"
onClick={enviarAgendamento}
>
Confirmar Agendamento
</ShimmerButton>

<ShimmerButton
className="w-full mt-4"
onClick={()=>setServicoSelecionado("")}
>
Escolher outro serviço
</ShimmerButton>

</div>

)}

</div>

</section>

)
}