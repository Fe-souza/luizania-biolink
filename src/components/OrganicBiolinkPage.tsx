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

const OrganicBiolinkPage = () => {
  const links = [
    {
      href: "https://jessica-is13.hotmart.host/o-codigo-da-abundancia-21e37291-fef6-4293-8860-8650eab2d89f?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnqVH_lYNXd2qHrkoTdubPL4GS-_zzoSfzaW5D3kuniWHU00OQ8AOFH504wT8_aem_FunqDVGO3VjjVYRu57ozow",
      image: img1,
      title: "E-book O Código da Abundância",
      subtitle: "Transforme sua mentalidade e carreira",
      variant: "featured" as const,
    },
    {
      href: "https://www.instagram.com/jessicasantos_beautynx/",
      image: img2,
      title: "@jessicasantos_beautynx",
      subtitle: "Siga nossa equipe no Instagram",
      variant: "default" as const,
    },
    {
      href: "https://jhees.fecode.com.br/",
      image: img3,
      title: "Site Oficial",
      subtitle: "Conheça meu trabalho completo",
      variant: "default" as const,
    },
    {
      href: "https://api.whatsapp.com/send/?phone=5566996042501&text=Olá%2C%20gostaria%20de%20marcar%20um%20horário",
      image: img4,
      title: "Agendar Horário",
      subtitle: "Fale comigo pelo WhatsApp",
      variant: "whatsapp" as const,
    },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111113 0%, #18181b 25%, #141416 50%, #1a1a1e 75%, #111113 100%)",
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
          <footer className="text-center pt-6 animate-fade-up" style={{ animationDelay: '1s' }}>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase">
              © 2024 Jéssica Santos • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrganicBiolinkPage;
