import ProfileAvatar from "./ProfileAvatar";
import ProfileBio from "./ProfileBio";
import LinkButton from "./LinkButton";
import SocialIcons from "./SocialIcons";

const BiolinkPage = () => {
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 sparkle-bg opacity-50" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Profile section */}
          <div className="flex flex-col items-center space-y-6">
            <ProfileAvatar />
            <ProfileBio />
          </div>

          {/* Links section */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <LinkButton
                key={link.title}
                href={link.href}
                image={link.image}
                title={link.title}
                subtitle={link.subtitle}
                variant={link.variant}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>

          {/* Social icons */}
          <SocialIcons />

          {/* Footer */}
          <footer className="text-center pt-8 animate-fade-up" style={{ animationDelay: '1s' }}>
            <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
              © 2024 JK Beauty • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BiolinkPage;
