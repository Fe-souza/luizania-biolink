import { Calendar, MapPin, Gem, Leaf, Instagram } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import FluidBlobs from "./FluidBlobs";
import OrganicProfileAvatarV3 from "./OrganicProfileAvatarV3";
import OrganicProfileBioV3 from "./OrganicProfileBioV3";
import OrganicLinkCardV3 from "./OrganicLinkCardV3";

const WHATSAPP_BASE = "https://wa.me/55046988250313";

const OrganicBiolinkPageV3 = () => {
  const links = [
    {
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá Luizania! Quero agendar um horário.")}`,
      icon: <Calendar className="w-7 h-7" strokeWidth={2} />,
      title: "Agendar horário",
      subtitle: "Unhas & sobrancelhas no WhatsApp",
      variant: "featured" as const,
    },
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
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Fluid animated background */}
      <FluidBlobs />
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-16">
        <div className="w-full max-w-md space-y-10">
          {/* Profile section */}
          <div className="flex flex-col items-center space-y-8">
            <OrganicProfileAvatarV3 />
            <OrganicProfileBioV3 />
          </div>

          {/* Links section */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <OrganicLinkCardV3
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
                className="group relative inline-flex items-center justify-center w-11 h-11 rounded-full ring-1 ring-amber-500/40 hover:ring-amber-600/70 transition-all duration-300 hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #fff8e1 0%, #fbeac1 50%, #fff8e1 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 14px -4px rgba(184,134,11,0.35)",
                }}
              >
                <Instagram
                  className="w-5 h-5 text-amber-700 group-hover:text-amber-800 transition-colors"
                  strokeWidth={2}
                />
              </a>
            </div>
            <p className="text-amber-800/60 text-xs tracking-[0.2em] uppercase">
              © 2026 Luizania • Todos os direitos reservados
            </p>
            <p className="text-amber-800/60 text-xs tracking-[0.2em] uppercase">
              Created by{" "}
              <a
                href="https://www.instagram.com/fe.code/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-900 transition-colors underline-offset-2 hover:underline"
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

export default OrganicBiolinkPageV3;
