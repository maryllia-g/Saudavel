import Image from "next/image";
import { Share2, Link2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
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
            <h4 className="text-green-400 font-semibold text-sm">Plataforma</h4>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Como funciona
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Parceiros
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-green-400 font-semibold text-sm">Sobre nós</h4>
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
            <span className="text-white/50 text-sm">contato.3S@email.com</span>
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
  );
}