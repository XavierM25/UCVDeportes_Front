import { useEffect, useState } from "react";
import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"

export default function Loguearse() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/ping")
      .then((res) => res.json())
      .then((data) => console.log("✅ Backend responde:", data))
      .catch((err) =>
        console.error("❌ Error al conectar con el backend:", err)
      );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}