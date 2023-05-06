import { useState } from "react";

//* components *//
import { AuthOptions, LoginForm, RegisterForm } from "@/components/auth";

//* styles *//
import "@/pages/auth/auth.scss";

//* types *//
type typeForm = "none" | "login" | "register";

export const Auth: React.FC = () => {
  const [typeForm, setTypeForm] = useState<typeForm>("none");

  const goLogin = () => setTypeForm("login");
  const goRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm("none");

  const renderForm = () => {
    if (typeForm === "login")
      return <LoginForm goBack={goBack} goRegister={goRegister} />;
    if (typeForm === "register")
      return <RegisterForm goBack={goBack} goLogin={goLogin} />;

    return <AuthOptions goLogin={goLogin} goRegister={goRegister} />;
  };

  return <div>{renderForm()}</div>;
};
