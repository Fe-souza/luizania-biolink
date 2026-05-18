import FloatingParticles from "./FloatingParticles";
import FluidBlobs from "./FluidBlobs";
import OrganicProfileAvatar from "./OrganicProfileAvatar";
import OrganicProfileBio from "./OrganicProfileBio";
import OrganicLinkCard from "./OrganicLinkCard";
import OrganicSocialIcons from "./OrganicSocialIcons";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";

const OrganicBiolinkPage = () => {
  const links = [
    {
      href: "https://www.jdlashes.com.br/mais?am=julianaklagenberg&parceiro=10344&cupom=julianaklagenberg5",
      image: img1,
      title: "Compre JD Lashes/Juliana",
      subtitle: "Produtos profissionais para cílios",
      variant: "featured" as const,
    },
    {
      href: "https://go.hotmart.com/K102635932P",
      image: img2,
      title: "Aula Lash Lifting online",
      subtitle: "Aprenda a técnica de Lash Lifting",
      variant: "default" as const,
    },
    {
      href: "https://wa.me/c/554999499028",
      image: img3,
      title: "Loja JK Beauty",
      subtitle: "Conheça nossos produtos",
      variant: "default" as const,
    },
    {
      href: "https://chk.eduzz.com/VWGZBG4V07",
      image: img4,
      title: "E-book Educadoras",
      subtitle: "Material exclusivo para educadoras",
      variant: "default" as const,
    },
    {
      href: "/midiakit.pdf",
      image: img6,
      title: "Contrate minha palestra",
      subtitle: "Acesse o mídia kit",
      variant: "default" as const,
    },
    {
      href: "https://wa.me/message/ID7UBKSHQG5TN1",
      image: img5,
      title: "WhatsApp Informações",
      subtitle: "Fale comigo pelo WhatsApp",
      variant: "whatsapp" as const,
    },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fefefe 0%, #faf8f4 25%, #fff9ef 50%, #fdf6ec 75%, #fefefe 100%)",
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
                image={link.image}
                title={link.title}
                subtitle={link.subtitle}
                variant={link.variant}
                delay={0.4 + index * 0.12}
              />
            ))}
          </div>

          {/* Social icons */}
          <OrganicSocialIcons />

          {/* Footer */}
          <footer className="text-center pt-6 animate-fade-up space-y-2" style={{ animationDelay: '1s' }}>
            <p className="text-amber-800/40 text-xs tracking-[0.2em] uppercase">
              © 2024 Juliana Klagenberg • Todos os direitos reservados
            </p>
            <p className="text-amber-800/40 text-xs tracking-[0.2em] uppercase">
              Created by{" "}
              <a
                href="https://www.instagram.com/fe.code/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-800/70 transition-colors underline-offset-2 hover:underline"
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
