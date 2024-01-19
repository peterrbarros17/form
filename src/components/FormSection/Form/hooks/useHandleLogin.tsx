"use client";
import { FormErrors, FormProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export function useHandleLogin() {
  const router = useRouter();

  const [handleLogin, setHandleLogin] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setHandleLogin({ ...handleLogin, [key]: event.target.value });
  };

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      firstName: handleLogin.firstName ? "" : "First Name cannot be empty",
      lastName: handleLogin.lastName ? "" : "Last Name cannot be empty",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(handleLogin.email)
        ? ""
        : "Looks like this is not an email",
      password:
        handleLogin.password.length >= 8
          ? ""
          : "Password must be at least 8 characters long",
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
      router.push("/formsucess");
    }
  };

  return {
    handleLogin,
    setHandleLogin,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  };
}
