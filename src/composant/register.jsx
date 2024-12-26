import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import logo from '../images/logo.png';

// Traductions
const translations = {
  en: {
    register: "Register",
    emailOrPhone: "Email Address",
    switchToPhone: "Switch to Phone",
    switchToEmail: "Switch to Email",
    firstName: "First Name",
    lastName: "Last Name",
    password: "Password",
    confirmPassword: "Confirm Password",
    selectLanguage: "Select Language",
    registerButton: "Register",
    loginLink: "Already have an account? Login",
  },
  fr: {
    register: "Inscription",
    emailOrPhone: "Adresse e-mail",
    switchToPhone: "Passer au téléphone",
    switchToEmail: "Passer à l'e-mail",
    firstName: "Prénom",
    lastName: "Nom de famille",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    selectLanguage: "Sélectionner la langue",
    registerButton: "S'inscrire",
    loginLink: "Vous avez déjà un compte ? Connectez-vous",
  },
  es: {
    register: "Registrarse",
    emailOrPhone: "Correo electrónico",
    switchToPhone: "Cambiar al teléfono",
    switchToEmail: "Cambiar al correo electrónico",
    firstName: "Nombre",
    lastName: "Apellido",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    selectLanguage: "Seleccionar idioma",
    registerButton: "Registrarse",
    loginLink: "¿Ya tienes una cuenta? Iniciar sesión",
  },
  ar: {
    register: "تسجيل",
    emailOrPhone: "عنوان البريد الإلكتروني",
    switchToPhone: "التبديل إلى الهاتف",
    switchToEmail: "التبديل إلى البريد الإلكتروني",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    selectLanguage: "اختر اللغة",
    registerButton: "سجل",
    loginLink: "هل لديك حساب بالفعل؟ تسجيل الدخول",
  },
  de: {
    register: "Registrieren",
    emailOrPhone: "E-Mail-Adresse",
    switchToPhone: "Zu Telefon wechseln",
    switchToEmail: "Zu E-Mail wechseln",
    firstName: "Vorname",
    lastName: "Nachname",
    password: "Passwort",
    confirmPassword: "Passwort bestätigen",
    selectLanguage: "Sprache auswählen",
    registerButton: "Registrieren",
    loginLink: "Haben Sie bereits ein Konto? Anmelden",
  },
  it: {
    register: "Registrati",
    emailOrPhone: "Indirizzo email",
    switchToPhone: "Passa al telefono",
    switchToEmail: "Passa all'email",
    firstName: "Nome",
    lastName: "Cognome",
    password: "Password",
    confirmPassword: "Conferma password",
    selectLanguage: "Seleziona lingua",
    registerButton: "Registrati",
    loginLink: "Hai già un account? Accedi",
  },
  pt: {
    register: "Registrar",
    emailOrPhone: "Endereço de e-mail",
    switchToPhone: "Mudar para telefone",
    switchToEmail: "Mudar para e-mail",
    firstName: "Primeiro Nome",
    lastName: "Último Nome",
    password: "Senha",
    confirmPassword: "Confirmar Senha",
    selectLanguage: "Selecionar Idioma",
    registerButton: "Registrar",
    loginLink: "Já tem uma conta? Entrar",
  },
  zh: {
    register: "注册",
    emailOrPhone: "电子邮件地址",
    switchToPhone: "切换到电话",
    switchToEmail: "切换到电子邮件",
    firstName: "名字",
    lastName: "姓氏",
    password: "密码",
    confirmPassword: "确认密码",
    selectLanguage: "选择语言",
    registerButton: "注册",
    loginLink: "已经有账户？ 登录",
  },
};

const Register = () => {
  const [usePhone, setUsePhone] = useState(false); // Basculer entre e-mail et téléphone
  const [language, setLanguage] = useState("en"); // Langue par défaut
  const navigate = useNavigate();

  const handleToggle = () => {
    setUsePhone(!usePhone);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const t = translations[language]; // Sélection de la traduction basée sur la langue

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={logo} alt="Logo" className="register-logo" />
        <h1 className="register-title">{t.register}</h1>
        <form>
          <div className="input-group">
            <input
              type={usePhone ? "tel" : "email"}
              placeholder={usePhone ? "+219 Phone Number" : t.emailOrPhone}
            />
            <span className="icon">📧</span>
          </div>
          <button
            type="button"
            className="toggle-button"
            onClick={handleToggle}
          >
            {usePhone ? t.switchToEmail : t.switchToPhone}
          </button>

          <div className="input-group">
            <input type="text" placeholder={t.firstName} />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input type="text" placeholder={t.lastName} />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input type="password" placeholder={t.password} />
            <span className="icon">🔒</span>
          </div>
          <div className="input-group">
            <input type="password" placeholder={t.confirmPassword} />
            <span className="icon">🔒</span>
          </div>
          <div className="input-group">
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="ar">العربية</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="pt">Português</option>
              <option value="zh">中文</option>
            </select>
            <span className="icon">🌐</span>
          </div>
          <button type="submit" className="register-button">
            {t.registerButton}
          </button>
        </form>
        <p className="login-link">
          {t.loginLink.split("?")[0]}{" "}
          <span onClick={handleLoginClick}>
            {t.loginLink.split("?")[1]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
