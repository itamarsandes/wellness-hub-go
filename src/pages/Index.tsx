import { useState } from "react";
import LandingPage from "./LandingPage";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import PatientDashboard from "./PatientDashboard";
import ProfessionalDashboard from "./ProfessionalDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "login" | "register" | "patient" | "professional">("landing");
  const [user, setUser] = useState<any>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock login logic
    const mockUser = { email, type: email.includes("doctor") ? "professional" : "patient" };
    setUser(mockUser);
    setCurrentView(mockUser.type === "professional" ? "professional" : "patient");
  };

  const handleRegister = (userData: any) => {
    // Mock registration logic
    const newUser = { ...userData, email: userData.email };
    setUser(newUser);
    setCurrentView(userData.userType === "professional" ? "professional" : "patient");
  };

  if (currentView === "login") {
    return (
      <LoginForm
        onLogin={handleLogin}
        onRegister={() => setCurrentView("register")}
        onForgotPassword={() => {}}
      />
    );
  }

  if (currentView === "register") {
    return (
      <RegisterForm
        onRegister={handleRegister}
        onLogin={() => setCurrentView("login")}
      />
    );
  }

  if (currentView === "patient" && user) {
    return <PatientDashboard />;
  }

  if (currentView === "professional" && user) {
    return <ProfessionalDashboard />;
  }

  return <LandingPage />;
};

export default Index;
