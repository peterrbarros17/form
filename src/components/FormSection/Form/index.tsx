"use client";
import InputComponent from "./InputComponent";
import ButtonSubmit from "./ButtonSubmit";
import { useHandleLogin } from "./hooks/useHandleLogin";
import { ChangeEvent } from "react";

import { Poppins } from "next/font/google";
import { IconError } from "./InputComponent/icon-error";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export default function Form() {
  const { handleLogin, errors, handleChange, handleSubmit } = useHandleLogin();

  const formFields = [
    {
      id: "first-name",
      type: "text",
      name: "firstName",
      placeholder: "First name",
      value: handleLogin.firstName,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        handleChange(event, "firstName"),
      minLength: 2,
      maxLength: 100,
    },
    {
      id: "last-name",
      type: "text",
      name: "lastName",
      placeholder: "Last name",
      value: handleLogin.lastName,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        handleChange(event, "lastName"),
      minLength: 2,
      maxLength: 100,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email Address",
      value: handleLogin.email,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        handleChange(event, "email"),
      minLength: 2,
      maxLength: 100,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      placeholder: "Password",
      value: handleLogin.password,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        handleChange(event, "password"),
      minLength: 8,
      maxLength: 100,
    },
  ];
  return (
    <form
      action=""
      className={`flex flex-col text-[var(--dark-blue)] ${poppins.className}`}
      onSubmit={handleSubmit}
    >
      {formFields.map((field, index) => (
        <div key={index} className="flex flex-col text-right">
          <InputComponent
            className="input-style"
            id={field.id}
            type={field.type}
            name={field.name}
            placeholder={errors[field.placeholder] ? "Erro" : field.placeholder}
            onChange={field.onChange}
            value={field.value}
            minLength={field.minLength}
            maxLength={field.maxLength}
          />
          {errors[field.name] && (
            <span className="text-[var(--red)] text-sm mb-1 italic">
              {errors[field.name]}
            </span>
          )}
        </div>
      ))}
      <ButtonSubmit type="submit">claim your free trial</ButtonSubmit>
    </form>
  );
}
