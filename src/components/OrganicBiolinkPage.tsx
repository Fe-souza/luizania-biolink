import FloatingParticles from "./FloatingParticles";
import FluidBlobs from "./FluidBlobs";
import OrganicProfileAvatar from "./OrganicProfileAvatar";
import OrganicProfileBio from "./OrganicProfileBio";
import OrganicLinkCard from "./OrganicLinkCard";
import OrganicSocialIcons from "./OrganicSocialIcons";

const OrganicBiolinkPage = () => {
  const links = [
    {
      href: "https://go.hotmart.com/K102635932P",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop",
      title: "Aula Lash Lifting Online",
      subtitle: "Aprenda a técnica do zero ao profissional",
      variant: "featured" as const,
    },
    {
      href: "https://wa.me/c/554999499028",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop",
      title: "Loja JK Beauty",
      subtitle: "Produtos premium para cílios e sobrancelhas",
      variant: "default" as const,
    },
    {
      href: "https://chk.eduzz.com/VWGZBG4V07",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=100&h=100&fit=crop",
      title: "E-book EDUCADORAS",
      subtitle: "Guia completo para se tornar uma expert",
      variant: "default" as const,
    },
    {
      href: "https://wa.me/message/ID7UBKSHQG5TN1",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop",
      title: "WhatsApp Informações",
      subtitle: "Fale diretamente comigo",
      variant: "whatsapp" as const,
    },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1025 25%, #15152a 50%, #1a1530 75%, #0f0f1a 100%)",
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
              © 2024 JK Beauty • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrganicBiolinkPage;
