import { useState } from "react";
import { Calendar, Clock, CreditCard, FileText, User, Bell, Plus, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PatientDashboard = () => {
  const [notifications] = useState([
    { id: 1, title: "Consulta amanhã às 14:00", type: "appointment", time: "2h" },
    { id: 2, title: "Resultado de exame disponível", type: "result", time: "1d" }
  ]);

  const nextAppointment = {
    id: 1,
    service: "Consulta Cardiológica",
    professional: "Dr. Ana Silva",
    date: "Amanhã",
    time: "14:00",
    location: "Sala 301",
    status: "confirmed"
  };

  const recentAppointments = [
    {
      id: 1,
      service: "Consulta Inicial",
      professional: "Dr. Ana Silva",
      date: "15/12/2024",
      status: "completed"
    },
    {
      id: 2,
      service: "Retorno",
      professional: "Dr. Carlos Santos",
      date: "10/12/2024",
      status: "completed"
    },
    {
      id: 3,
      service: "Exames",
      professional: "Lab. Central",
      date: "08/12/2024",
      status: "completed"
    }
  ];

  const packageCredits = {
    total: 10,
    used: 3,
    remaining: 7,
    expires: "30/06/2025"
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Olá, João Silva</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo ao seu painel</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
                )}
              </div>
              <Button className="medical-button">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Next Appointment */}
            <Card className="medical-card">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Próximo Agendamento</h2>
                <Badge variant="default" className="status-success">
                  Confirmado
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{nextAppointment.date}</p>
                      <p className="text-sm text-muted-foreground">{nextAppointment.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{nextAppointment.professional}</p>
                      <p className="text-sm text-muted-foreground">{nextAppointment.service}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button variant="outline" className="glass-card">
                    <Calendar className="w-4 h-4 mr-2" />
                    Remarcar
                  </Button>
                  <Button variant="outline" className="glass-card">
                    <Clock className="w-4 h-4 mr-2" />
                    Cancelar
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Appointments */}
            <Card className="medical-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Histórico Recente</h2>
                <Button variant="ghost" className="text-primary hover:text-primary-light">
                  Ver Todos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{appointment.service}</p>
                        <p className="text-sm text-muted-foreground">{appointment.professional}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{appointment.date}</p>
                      <Badge variant="outline" className="text-xs">
                        Concluído
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Credits */}
            <Card className="medical-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 health-gradient rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Meus Créditos</h3>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {packageCredits.remaining}
                  </div>
                  <p className="text-sm text-muted-foreground">sessões restantes</p>
                </div>

                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="health-gradient h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(packageCredits.remaining / packageCredits.total) * 100}%` }}
                  ></div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Válido até {packageCredits.expires}
                </div>

                <Button className="w-full health-button">
                  Comprar Mais Sessões
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="medical-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start glass-card">
                  <FileText className="w-4 h-4 mr-3" />
                  Meu Prontuário
                </Button>
                
                <Button variant="outline" className="w-full justify-start glass-card">
                  <CreditCard className="w-4 h-4 mr-3" />
                  Histórico de Pagamentos
                </Button>
                
                <Button variant="outline" className="w-full justify-start glass-card">
                  <User className="w-4 h-4 mr-3" />
                  Atualizar Perfil
                </Button>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="medical-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notificações</h3>
              
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time} atrás</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;