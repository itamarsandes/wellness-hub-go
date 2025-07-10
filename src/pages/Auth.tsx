import { useState } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

const Auth = () => {
  const [view, setView] = useState<"login" | "register">("login");

  if (view === "register") {
    return (
      <RegisterForm
        onLogin={() => setView("login")}
      />
    );
  }

  return (
    <LoginForm
      onRegister={() => setView("register")}
      onForgotPassword={() => {}}
    />
  );
};

export default Auth;