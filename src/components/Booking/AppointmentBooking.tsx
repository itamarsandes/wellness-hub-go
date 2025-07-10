import { useState } from "react";
import { Calendar, Clock, User, MapPin, CreditCard, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppointmentBookingProps {
  onClose: () => void;
  onConfirm: (appointment: any) => void;
}

const AppointmentBooking = ({ onClose, onConfirm }: AppointmentBookingProps) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const services = [
    {
      id: 1,
      name: "Consulta Inicial",
      description: "Primeira consulta completa com anamnese e exame físico",
      duration: "60 min",
      price: "R$ 200,00",
      category: "Consulta"
    },
    {
      id: 2,
      name: "Consulta de Retorno",
      description: "Consulta de acompanhamento e reavaliação",
      duration: "30 min",
      price: "R$ 150,00",
      category: "Consulta"
    },
    {
      id: 3,
      name: "Teleconsulta",
      description: "Consulta online via videoconferência",
      duration: "30 min",
      price: "R$ 120,00",
      category: "Online"
    },
    {
      id: 4,
      name: "Exame Cardiológico Completo",
      description: "Eletrocardiograma + ecocardiograma + consulta",
      duration: "90 min",
      price: "R$ 350,00",
      category: "Exame"
    }
  ];

  const professionals = [
    {
      id: 1,
      name: "Dra. Ana Silva",
      specialty: "Cardiologista",
      rating: 4.9,
      experience: "15 anos",
      avatar: "AS"
    },
    {
      id: 2,
      name: "Dr. Carlos Santos",
      specialty: "Cardiologista",
      rating: 4.8,
      experience: "12 anos",
      avatar: "CS"
    }
  ];

  const availableDates = [
    { date: "2024-12-20", label: "Hoje", available: false },
    { date: "2024-12-21", label: "Amanhã", available: true },
    { date: "2024-12-22", label: "Sáb, 22", available: true },
    { date: "2024-12-23", label: "Dom, 23", available: false },
    { date: "2024-12-24", label: "Seg, 24", available: true }
  ];

  const availableTimes = [
    { time: "08:00", available: true },
    { time: "08:30", available: false },
    { time: "09:00", available: true },
    { time: "09:30", available: true },
    { time: "10:00", available: false },
    { time: "10:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: false },
    { time: "15:30", available: true }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirm = () => {
    const appointment = {
      service: selectedService,
      professional: selectedProfessional,
      date: selectedDate,
      time: selectedTime
    };
    onConfirm(appointment);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== null;
      case 2: return selectedProfessional !== null;
      case 3: return selectedDate !== "" && selectedTime !== "";
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl medical-card max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Novo Agendamento</h2>
            <Button variant="ghost" onClick={onClose}>✕</Button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 mt-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= num 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step > num ? <Check className="w-4 h-4" /> : num}
                </div>
                {num < 4 && <div className={`w-8 h-px ${step > num ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Escolha o serviço</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedService?.id === service.id
                        ? 'border-primary bg-primary/5 shadow-glow'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-foreground">{service.name}</h4>
                          <Badge variant="outline">{service.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{service.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Professional Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Escolha o profissional</h3>
              <div className="space-y-4">
                {professionals.map((professional) => (
                  <div
                    key={professional.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedProfessional?.id === professional.id
                        ? 'border-primary bg-primary/5 shadow-glow'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedProfessional(professional)}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {professional.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{professional.name}</h4>
                        <p className="text-sm text-muted-foreground">{professional.specialty}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground">
                            ⭐ {professional.rating}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {professional.experience} de experiência
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Escolha data e horário</h3>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Data</h4>
                <div className="grid grid-cols-5 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date.date}
                      disabled={!date.available}
                      className={`p-3 text-center rounded-lg border transition-all ${
                        selectedDate === date.date
                          ? 'border-primary bg-primary/5 text-primary'
                          : date.available
                          ? 'border-border hover:border-primary/50 text-foreground'
                          : 'border-muted bg-muted/30 text-muted-foreground cursor-not-allowed'
                      }`}
                      onClick={() => setSelectedDate(date.date)}
                    >
                      <div className="text-sm font-medium">{date.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h4 className="font-medium text-foreground mb-3">Horário</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {availableTimes.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        className={`p-2 text-center rounded-lg border transition-all ${
                          selectedTime === slot.time
                            ? 'border-primary bg-primary/5 text-primary'
                            : slot.available
                            ? 'border-border hover:border-primary/50 text-foreground'
                            : 'border-muted bg-muted/30 text-muted-foreground cursor-not-allowed'
                        }`}
                        onClick={() => setSelectedTime(slot.time)}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Confirmar agendamento</h3>
              
              <Card className="p-4 bg-muted/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{selectedProfessional?.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedService?.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{selectedDate}</p>
                      <p className="text-sm text-muted-foreground">{selectedTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Sala 301</p>
                      <p className="text-sm text-muted-foreground">Clínica ClinicSync</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{selectedService?.price}</p>
                      <p className="text-sm text-muted-foreground">Pagamento na recepção</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-border flex justify-between">
          <Button
            variant="outline"
            onClick={step === 1 ? onClose : handleBack}
            className="glass-card"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 1 ? 'Cancelar' : 'Voltar'}
          </Button>
          
          <Button
            onClick={step === 4 ? handleConfirm : handleNext}
            disabled={!canProceed()}
            className="medical-button"
          >
            {step === 4 ? 'Confirmar Agendamento' : 'Continuar'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AppointmentBooking;