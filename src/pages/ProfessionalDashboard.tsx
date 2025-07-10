import { useState } from "react";
import { Calendar, DollarSign, Users, Activity, Clock, Plus, FileText, Settings, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfessionalDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = [
    {
      title: "Faturamento do Mês",
      value: "R$ 15.400",
      change: "+12%",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Novos Pacientes",
      value: "28",
      change: "+8%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Consultas Realizadas",
      value: "142",
      change: "+15%",
      icon: Activity,
      color: "text-accent"
    },
    {
      title: "Taxa de Ocupação",
      value: "89%",
      change: "+5%",
      icon: BarChart3,
      color: "text-secondary"
    }
  ];

  const todayAppointments = [
    {
      id: 1,
      patient: "Maria Santos",
      service: "Consulta Inicial",
      time: "09:00",
      duration: "60min",
      status: "confirmed",
      avatar: "MS"
    },
    {
      id: 2,
      patient: "João Silva",
      service: "Retorno",
      time: "10:30",
      duration: "30min", 
      status: "completed",
      avatar: "JS"
    },
    {
      id: 3,
      patient: "Ana Costa",
      service: "Consulta Especializada",
      time: "14:00",
      duration: "45min",
      status: "confirmed",
      avatar: "AC"
    },
    {
      id: 4,
      patient: "Pedro Lima",
      service: "Consulta de Retorno",
      time: "15:30",
      duration: "30min",
      status: "pending",
      avatar: "PL"
    }
  ];

  const recentActivities = [
    { id: 1, text: "Maria Santos agendou uma consulta", time: "5min atrás", type: "appointment" },
    { id: 2, text: "Pagamento de R$ 150 recebido", time: "10min atrás", type: "payment" },
    { id: 3, text: "João Silva cancelou agendamento", time: "1h atrás", type: "cancellation" },
    { id: 4, text: "Novo prontuário criado para Ana Costa", time: "2h atrás", type: "record" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success";
      case "confirmed": return "bg-primary";
      case "pending": return "bg-warning";
      case "cancelled": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Concluído";
      case "confirmed": return "Confirmado";
      case "pending": return "Pendente";
      case "cancelled": return "Cancelado";
      default: return "Indefinido";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Profissional</h1>
              <p className="text-muted-foreground">Dra. Ana Silva - Cardiologista</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="glass-card">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button className="medical-button">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="medical-card group hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change} vs mês anterior
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.color === 'text-success' ? 'bg-success/10' : stat.color === 'text-primary' ? 'bg-primary/10' : stat.color === 'text-accent' ? 'bg-accent/10' : 'bg-secondary/10'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card className="medical-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Agenda de Hoje</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="glass-card">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Calendário
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {appointment.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium text-foreground">{appointment.time}</p>
                        <p className="text-sm text-muted-foreground">{appointment.duration}</p>
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(appointment.status)} text-white border-none`}>
                        {getStatusText(appointment.status)}
                      </Badge>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Próximo: Maria Santos às 09:00</p>
                    <p className="text-sm text-muted-foreground">Consulta Inicial - Sala 301</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="medical-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Resumo Rápido</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Hoje</span>
                  <span className="font-semibold text-foreground">4 consultas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Esta semana</span>
                  <span className="font-semibold text-foreground">28 consultas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Receita mensal</span>
                  <span className="font-semibold text-success">R$ 15.400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pacientes ativos</span>
                  <span className="font-semibold text-foreground">186</span>
                </div>
              </div>
            </Card>

            {/* Recent Activities */}
            <Card className="medical-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Atividades Recentes</h3>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary-light">
                Ver todas as atividades
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="medical-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start glass-card">
                  <Users className="w-4 h-4 mr-3" />
                  Gerenciar Pacientes
                </Button>
                <Button variant="outline" className="w-full justify-start glass-card">
                  <FileText className="w-4 h-4 mr-3" />
                  Relatórios
                </Button>
                <Button variant="outline" className="w-full justify-start glass-card">
                  <Calendar className="w-4 h-4 mr-3" />
                  Configurar Horários
                </Button>
                <Button variant="outline" className="w-full justify-start glass-card">
                  <DollarSign className="w-4 h-4 mr-3" />
                  Financeiro
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;