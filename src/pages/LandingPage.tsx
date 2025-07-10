import { useState } from "react";
import { ArrowRight, Calendar, Shield, Stethoscope, Users, Clock, CheckCircle, Star, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-healthflow.jpg";

const LandingPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento online 24/7 com confirmação automática e lembretes por WhatsApp"
    },
    {
      icon: Stethoscope,
      title: "Prontuário Eletrônico",
      description: "Prontuários digitais seguros, organizados e acessíveis de qualquer lugar"
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Controle completo do relacionamento com pacientes e histórico de atendimentos"
    },
    {
      icon: Shield,
      title: "Segurança Médica",
      description: "Conformidade com LGPD e segurança de dados de nível hospitalar"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      role: "Cardiologista",
      content: "O ClinicSync revolucionou minha clínica. A produtividade aumentou 40% e os pacientes adoram a praticidade.",
      rating: 5
    },
    {
      name: "Clínica Vida & Saúde",
      role: "Fisioterapia",
      content: "Finalmente encontramos uma solução completa. O sistema é intuitivo e o suporte é excepcional.",
      rating: 5
    },
    {
      name: "Dr. Ricardo Santos",
      role: "Psicólogo",
      content: "Impressionante como o ClinicSync simplificou nossa rotina. Recomendo para todos os colegas.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10k+", label: "Profissionais Ativos" },
    { value: "500k+", label: "Pacientes Atendidos" },
    { value: "98%", label: "Satisfação" },
    { value: "24/7", label: "Suporte" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">ClinicSync</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Preços</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
            <Button className="medical-button">Começar Agora</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-responsive-lg font-bold text-foreground mb-6 leading-tight">
                Transforme sua <span className="text-gradient">Clínica</span> com o Futuro da Saúde Digital
              </h1>
              <p className="text-responsive-md text-muted-foreground mb-8 leading-relaxed">
                Plataforma completa de gestão para profissionais de saúde. Agendamentos, prontuários, pagamentos e muito mais em um só lugar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="medical-button group">
                  Teste Gratuito por 14 Dias
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="glass-card">
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">Suporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="ClinicSync Platform" 
                  className="w-full rounded-2xl shadow-large float-animation"
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-4 w-48">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">+40% Produtividade</p>
                      <p className="text-sm text-muted-foreground">Em média</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa para <span className="text-gradient">gerenciar sua clínica</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos desenvolvidos especialmente para profissionais de saúde, com foco na experiência do paciente e eficiência operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`medical-card group cursor-pointer transition-all duration-300 ${
                  hoveredFeature === index ? 'shadow-glow scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que nossos <span className="text-gradient">clientes dizem</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="medical-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Pronto para <span className="text-gradient">revolucionar</span> sua clínica?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a milhares de profissionais que já transformaram sua prática com o ClinicSync.
            </p>
            <Button size="lg" className="medical-button group">
              Começar Teste Gratuito
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">ClinicSync</span>
              </div>
              <p className="text-muted-foreground">
                Transformando o futuro da saúde digital com tecnologia e cuidado humano.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ClinicSync. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;