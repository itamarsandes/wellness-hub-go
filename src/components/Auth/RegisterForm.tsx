import { useState } from "react";
import { User, Mail, Lock, Phone, ArrowRight, UserCheck, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RegisterFormProps {
  onRegister: (userData: any) => void;
  onLogin: () => void;
}

const RegisterForm = ({ onRegister, onLogin }: RegisterFormProps) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<"patient" | "professional">("patient");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      onRegister({ ...formData, userType });
      setIsLoading(false);
    }, 1500);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <div className="w-full max-w-md">
        <Card className="medical-card p-8">
          {step === 1 ? (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 health-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Criar Conta</h1>
                <p className="text-muted-foreground">Preencha seus dados para começar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">Nome Completo</Label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="pl-10 h-12"
                      required
                    />
                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-10 h-12"
                      required
                    />
                    <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Celular</Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: formatPhone(e.target.value)})}
                      className="pl-10 h-12"
                      required
                    />
                    <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-10 h-12"
                      required
                      minLength={6}
                    />
                    <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground font-medium">Confirmar Senha</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Digite novamente sua senha"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="pl-10 h-12"
                      required
                    />
                    <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-4" />
                  </div>
                </div>

                <Button type="submit" className="w-full medical-button h-12 group">
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Qual seu objetivo?</h1>
                <p className="text-muted-foreground">Escolha como você vai usar a plataforma</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <RadioGroup value={userType} onValueChange={(value: "patient" | "professional") => setUserType(value)}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                      <RadioGroupItem value="patient" id="patient" />
                      <Label htmlFor="patient" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Sou Paciente</p>
                            <p className="text-sm text-muted-foreground">Quero agendar consultas e acompanhar meus atendimentos</p>
                          </div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Building className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Sou Profissional/Clínica</p>
                            <p className="text-sm text-muted-foreground">Quero gerenciar minha clínica e atender pacientes</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 glass-card h-12"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 medical-button h-12 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Criar Conta
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Já tem uma conta?{" "}
              <button
                onClick={onLogin}
                className="text-primary hover:text-primary-light font-medium transition-colors"
              >
                Fazer login
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;