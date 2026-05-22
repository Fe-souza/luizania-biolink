import { Calendar, MapPin, Gem, Leaf, Instagram } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import FluidBlobs from "./FluidBlobs";
import OrganicProfileAvatar from "./OrganicProfileAvatar";
import OrganicProfileBio from "./OrganicProfileBio";
import OrganicLinkCard from "./OrganicLinkCard";

const WHATSAPP_BASE = "https://wa.me/55046988250313";

const OrganicBiolinkPage = () => {
  const links = [
    {
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá Luizania! Quero agendar um horário.")}`,
      icon: <Calendar className="w-7 h-7" strokeWidth={2} />,
      title: "Agendar horário",
      subtitle: "Unhas & sobrancelhas no WhatsApp",
      variant: "featured" as const,
    },
    // {
    //   href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá Luizania! Quero saber mais sobre o curso.")}`,
    //   icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />,
    //   title: "Curso Nails & Sobrancelhas",
    //   subtitle: "Aprenda comigo — saiba mais",
    //   variant: "whatsapp" as const,
    // },
    {
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá Luizania! Quero conhecer suas semijoias.")}`,
      icon: <Gem className="w-7 h-7" strokeWidth={2} />,
      title: "Semijoias",
      subtitle: "Peças exclusivas — fale comigo no WhatsApp",
      variant: "whatsapp" as const,
    },
    {
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá Luizania! Quero saber mais sobre os produtos Marga Linda.")}`,
      icon: <Leaf className="w-7 h-7" strokeWidth={2} />,
      title: "Marga Linda",
      subtitle: "Produtos naturais para sua saúde — peça pelo WhatsApp",
      variant: "whatsapp" as const,
    },
    {
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Oti, 213 - Pardais, Quedas do Iguaçu - PR")}`,
      icon: <MapPin className="w-7 h-7" strokeWidth={2} />,
      title: "Atendimento presencial",
      subtitle: "Rua Oti, 213 — Pardais, Quedas do Iguaçu - PR",
      variant: "info" as const,
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050505 0%, #0d0d0d 25%, #141414 50%, #0d0d0d 75%, #050505 100%)",
      }}
    >
      {/* Fluid animated background */}
      <FluidBlobs />
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-16">
        <div className="w-full max-w-md space-y-10">
          {/* Profile section */}
          <div className="flex flex-col items-center space-y-8">
            <OrganicProfileAvatar />
            <OrganicProfileBio />
          </div>

          {/* Links section */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <OrganicLinkCard
                key={link.title}
                href={link.href}
                icon={link.icon}
                title={link.title}
                subtitle={link.subtitle}
                variant={link.variant}
                delay={0.4 + index * 0.12}
              />
            ))}
          </div>

          {/* Footer */}
          <footer
            className="text-center pt-6 animate-fade-up space-y-4"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/luizaniakanigoski.beauty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Luizania"
                className="group relative inline-flex items-center justify-center w-11 h-11 rounded-full ring-1 ring-amber-300/40 hover:ring-amber-400/70 transition-all duration-300 hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,243,176,0.25), 0 4px 14px -4px rgba(212,175,55,0.4)",
                }}
              >
                <Instagram
                  className="w-5 h-5 text-amber-300/80 group-hover:text-amber-200 transition-colors"
                  strokeWidth={2}
                />
              </a>
            </div>
            <p className="text-amber-200/40 text-xs tracking-[0.2em] uppercase">
              © 2026 Luizania • Todos os direitos reservados
            </p>
            <p className="text-amber-200/40 text-xs tracking-[0.2em] uppercase">
              Created by{" "}
              <a
                href="https://www.instagram.com/fe.code/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300/80 transition-colors underline-offset-2 hover:underline"
              >
                Fecode
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrganicBiolinkPage;
