  import Image from "next/image";
  import { Leaf, Heart, Users, ChevronRight, Share2, Link2, MessageCircle, Menu } from "lucide-react";

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
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>

            <div className="hidden md:flex items-center gap-8 text-white/80 text-sm">
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
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-6">
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

              <div className="relative w-full h-[280px] md:h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src="/fundo.png"
                  alt="Pessoa segurando tigela de salada saudável"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 -mt-8 md:-mt-16 mb-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Sustentabilidade
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Reduzimos desperdícios e promovemos o consumo conscientes dos
                recursos.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Saudável</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Incentivamos hábitos alimentares melhores para uma vida mais
                saudável.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Social</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Levamos alimentação de qualidade para comunidades que precisam.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20 w-full">
          <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/20 items-center justify-center shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f12] leading-snug max-w-md">
                Juntos, transformamos alimentos em oportunidade de vida.
              </h2>
            </div>

            <button className="flex items-center gap-2 bg-[#0d1f12] hover:bg-[#1a3322] transition-colors text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap">
              Faça parte
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#08130a] mt-auto">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo_3s.png"
                    alt="Logo 3S"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Conectamos tecnologia, sustentabilidade e solidariedade para
                  levar alimentação saudável a quem precisa.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-green-400 font-semibold text-sm">
                  Plataforma
                </h4>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Como funciona
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Parceiros
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-green-400 font-semibold text-sm">
                  Sobre nós
                </h4>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Quem somos
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Trabalhe conosco
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-green-400 font-semibold text-sm">Ajuda</h4>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  FAQ
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Central de ajuda
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-green-400 font-semibold text-sm">Contato</h4>
                <span className="text-white/50 text-sm">contato.3s@email.com</span>
                <span className="text-white/50 text-sm">(88) 98400-3908</span>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Link2 className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-white/40 text-sm">
                Cada atitude gera impacto.
                <br className="md:hidden" /> Cada alimento transforma.
              </p>
              <p className="text-white/40 text-sm">
                © 2026 3S Conecta. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }