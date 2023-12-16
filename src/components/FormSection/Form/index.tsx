"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import InputComponent from "./InputComponent";
import ButtonSubmit from "./ButtonSubmit";

type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Form() {
  const [handleLogin, setHandleLogin] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setHandleLogin({ ...handleLogin, [key]: event.target.value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      firstName: handleLogin.firstName ? "" : "Campo obrigatório",
      lastName: handleLogin.lastName ? "" : "Campo obrigatório",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(handleLogin.email)
        ? ""
        : "Email inválido",
      password:
        handleLogin.password.length >= 8
          ? ""
          : "Senha deve ter pelo menos 8 caracteres",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    } else {
      setHandleLogin({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      console.log(handleLogin);
    }
  };
  return (
    <form
      action=""
      className="flex flex-col text-[var(--dark-blue)] font-semibold"
      onSubmit={handleSubmit}
    >
      <InputComponent
        className="input-style"
        id="first-name"
        type="text"
        name="first-name"
        placeholder="First name"
        onChange={(event) => handleChange(event, "firstName")}
        value={handleLogin.firstName}
        minLength={2}
        maxLength={100}
      />
      {errors.firstName && (
        <span className="text-red-500">{errors.firstName}</span>
      )}
      <InputComponent
        className="input-style"
        id="last-name"
        type="text"
        name="last-name"
        placeholder="Last name"
        onChange={(event) => handleChange(event, "lastName")}
        value={handleLogin.lastName}
        minLength={2}
        maxLength={100}
      />
      {errors.lastName && (
        <span className="text-red-500">{errors.lastName}</span>
      )}
      <InputComponent
        className="input-style"
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={(event) => handleChange(event, "email")}
        value={handleLogin.email}
        minLength={2}
        maxLength={100}
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}
      <InputComponent
        className="input-style"
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={(event) => handleChange(event, "password")}
        value={handleLogin.password}
        minLength={8}
        maxLength={100}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password}</span>
      )}
      <ButtonSubmit type="submit">claim your free trial</ButtonSubmit>
    </form>
  );
}
