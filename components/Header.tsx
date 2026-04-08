"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Menu, X } from "lucide-react";

export default function Header() {

const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (

<header
className={`fixed w-full z-50 transition-all duration-300 ${
scrolled
? "bg-black/80 backdrop-blur-md shadow-lg"
: "bg-transparent"
}`}
>

<div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

{/* LOGO */}
<div className="flex items-center gap-3">

<Image
src="/logo.png"
alt="Logo Barbearia"
width={70}
height={70}
className="transition duration-300 hover:scale-110"
/>

</div>

{/* MENU DESKTOP */}
<nav className="hidden md:flex gap-10 text-white font-medium text-base md:text-lg">

{["Início","Serviços","Sobre","Contato"].map((item, index) => (

<a
key={index}
href={`#${item.toLowerCase()}`}
className="relative group"
>

<span className="group-hover:text-yellow-500 transition">
{item}
</span>

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>

</a>

))}

</nav>

{/* BOTÃO + MENU MOBILE */}
<div className="flex items-center gap-4">

{/* BOTÃO DESKTOP */}
<div className="hidden md:block">
  <ShimmerButton
    onClick={() => {
      document.getElementById("servicos")?.scrollIntoView({
        behavior: "smooth"
      });
    }}
  >
    Agendar
  </ShimmerButton>
</div>

{/* MENU MOBILE */}
<button
className="md:hidden text-white"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

</div>

</div>

{/* MENU MOBILE DROPDOWN */}
<div
className={`md:hidden overflow-hidden transition-all duration-300 ${
menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
}`}
>

<div className="bg-black/95 backdrop-blur-md px-6 py-6 space-y-5 text-white text-lg">

{["Início","Serviços","Sobre","Contato"].map((item, index) => (

<a
key={index}
href={`#${item.toLowerCase()}`}
onClick={()=>setMenuOpen(false)}
className="block hover:text-yellow-500 transition"
>
{item}
</a>

))}

<ShimmerButton className="w-full mt-4">
Agendar
</ShimmerButton>

</div>

</div>

</header>

);
}