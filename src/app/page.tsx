import Image from "next/image";
import { Leaf, Heart, Users, ArrowRight, Menu } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1f12] font-sans">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden min-h-[520px] md:min-h-[620px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f12] via-[#143820] to-[#1f5c33]" />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/logo_3s.png"
              alt="Logo 3S"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>

          <div className="hidden md:flex items-center gap-28 text-white/80 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Parcerias
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sobre nós
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-400 transition-colors text-[#0d1f12] font-semibold text-sm px-5 py-2.5 rounded-full">
              Acessar Plataforma
            </button>
          </div>

          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 md:pb-32">
          {/* TEXTO */}
          <div className="max-w-xl flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Alimentação saudável,
              <br />
              sustentabilidade real,
              <br />
              <span className="text-green-400">impacto social.</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-md">
              A 3S é uma plataforma digital que conecta tecnologia,
              sustentabilidade e solidariedade para levar alimentação
              saudável para quem mais precisa.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <button className="bg-green-500 hover:bg-green-400 transition-colors text-[#0d1f12] font-semibold px-6 py-3 rounded-full">
                Comece o seu projeto
              </button>

              <button className="border border-white/30 hover:border-white/60 transition-colors text-white font-semibold px-6 py-3 rounded-full">
                Acessar Plataforma
              </button>
            </div>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="hidden lg:block absolute top-0 right-0 w-[70vw] h-full">
          <Image
            src="/fundo.png"
            alt="Pessoa segurando tigela de salada saudável"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>
      </div>

        {/* SEÇÃO BRANCA */}
      <section className="relative -mt-6 z-10">
        <div className="relative rounded-t-[40px] px-8 md:px-16 py-32 shadow-2xl overflow-hidden bg-gradient-to-b from-white via-[#f2f8f3] to-[#08130a]">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Sustentabilidade */}
            <div className="flex gap-4">
              <Leaf className="w-10 h-10 text-green-600 flex-shrink-0" />

              <div>
                <h3 className="font-bold text-green-600 text-2xl">
                  Sustentabilidade
                </h3>

                <p className="text-gray-700 mt-2">
                  Reduzimos desperdícios e promovemos o consumo
                  consciente dos recursos.
                </p>
              </div>
            </div>

            {/* Saudável */}
            <div className="flex gap-4 border-y md:border-y-0 md:border-x border-gray-300 px-6">
              <Heart className="w-10 h-10 text-green-600 flex-shrink-0" />

              <div>
                <h3 className="font-bold text-green-600 text-2xl">
                  Saudável
                </h3>

                <p className="text-gray-700 mt-2">
                  Incentivamos hábitos alimentares melhores para uma
                  vida mais saudável.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <Users className="w-10 h-10 text-green-600 flex-shrink-0" />

              <div>
                <h3 className="font-bold text-green-600 text-2xl">
                  Social
                </h3>

                <p className="text-gray-700 mt-2">
                  Levamos alimentação de qualidade para comunidades
                  que precisam.
                </p>
              </div>
            </div>
          </div>

          {/* CARD VERDE */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-[#063b12] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-white text-3xl font-bold max-w-md">
                Juntos, transformamos alimentos em oportunidade de vida.
              </h2>
            </div>

            <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition">
              Faça parte
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}