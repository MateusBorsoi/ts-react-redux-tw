"use client";

import Image from "next/image";
import Logo from '../../../public/assets/img_logo.png'
import { useState } from "react";
import { Userschema } from "@/validation/schemas/userSchema";
import { toast } from "react-toastify";
import ToastMsg from "@/components/Toast/Toast";
import API from "@/axios/config";
import { useRouter } from "next/navigation"

const Register = () => {
  const router = useRouter();

  const authRedirect = () => {
    router.push("/");
  };

  const redirectToLogin = () => {
    router.push('/login')
  }

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [formErro, setFormErros] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      nome,
      email,
      senha,
      confirmaSenha,
    };

    async function requestRegister() {
      try {
        const response = await API.post("/users", formData);
        if (response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {
            authRedirect();
          }, 2000);
        } else {
          toast.error(response.data.message);
        }
      } catch (error: any) {
        if (error.response) {
          const errorMsg = error.response.data.message;
          toast.error(errorMsg);
        }
      }
    }

    try {
      await Userschema.validate(formData, { abortEarly: false });
      requestRegister();
    } catch (validationErrors: any) {
      const errors: any = {};

      if (validationErrors.inner && validationErrors.inner.length > 0) {
        validationErrors.inner.forEach((error: any) => {
          errors[error.path] = error.message;
        });
        setFormErros(errors);
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ToastMsg theme="colored" bar="false" closetime="5000"/>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-auto"
            src={Logo}
            alt="logo"
            width={150}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua Conta </h2>
        </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="nome"
                  value={nome}
                  autoComplete="nome"
                  onChange={(e) => setNome(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {formErro?.nome && (
                  <p className="text-red-600">{formErro.nome}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {formErro?.email && (
                  <p className="text-red-600">{formErro.email}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={senha}
                  autoComplete="current-password"
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {formErro?.senha && (
                  <p className="text-red-600">{formErro.senha}</p>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirma Senha
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="confirmaSenha"
                  name="confirmaSenha"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {formErro?.confirmaSenha && (
                  <p className="text-red-600">
                    {formErro.confirmaSenha}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
               
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Já possui uma conta ?
            <a 
              onClick={redirectToLogin}
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              {" "}
              Entrar
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
