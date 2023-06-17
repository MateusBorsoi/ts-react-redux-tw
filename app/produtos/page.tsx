
'use client'

import API from "@/axios/config";
import ToastMsg from "@/components/Toast/Toast";
import { ProductSchema } from "@/validation/schemas/productSchema";
import { useState } from "react";
import { toast } from "react-toastify";


const Produtos = () => {
  const [descricao, setDescricao] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [imagens, setImagens] = useState<string | null>(null);
  const [categoria, setCategoria] = useState<string>("");
  const [preco, setPreco] = useState<number>();
  const [quantidade, setQuantidade] = useState<number>();
  const [promocional, setPromocional] = useState<number>();
  const [formErro, setFormErros] = useState({
    descricao: "",
    preco: "",
    categoria: "",
    imagens: [],
    complemento: "",
    quantidade: "",
  });

  const onChangeDescricao = (event: any) => {
    setDescricao(event.target.value);
  };

  const onChangeComplemento = (event: any) => {
    setComplemento(event.target.value);
  };

  const onChangeImagens = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      try {
        const base64Image = await convertToBase64(file);
        setImagens(base64Image);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onChangeCategoria = (event: any) => {
    setCategoria(event.target.value);
  };

  const onChangePreco = (event: any) => {
    setPreco(event.target.value);
  };

  const onChangePromocional = (event: any) => {
    setPromocional(event.target.value);
  };

  const onChangeQuantidade = (event: any) => {
    setQuantidade(event.target.value);
  };


  const convertToBase64 = async (file:File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        const base64Img = reader.result
        if (typeof base64Img === 'string') {
        resolve(base64Img) 
      } else {
        reject(new Error('Erro ao converter imagem'))
      }
    }
      reader.onerror = (error) => {
        reject(error)
      }
      reader.readAsDataURL(file)
    })
  }



  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = {
      descricao,
      preco,
      categoria,
      imagens,
      complemento,
      promocional,
      quantidade,
    };

    async function requestCadastro() {

      try {
        const response = await API.post("/produtos", formData);
        if (response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {}, 2000);
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
      await ProductSchema.validate(formData, { abortEarly: false });
      requestCadastro();
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
    <form onSubmit={onSubmit}>
      <div className="space-y-12 px-12 pt-6">
        <ToastMsg theme="colored" bar="false" closetime="5000" />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Cadastrar Produto
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  required
                  autoComplete="descricao"
                  placeholder="Informe a descrição"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={onChangeDescricao}
                />
                {formErro?.descricao && (
                  <p className="text-red-600">{formErro.descricao}</p>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Complemento
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  required
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Complemento"
                  onChange={onChangeComplemento}
                />
                {formErro?.complemento && (
                  <p className="text-red-600">{formErro.complemento}</p>
                )}
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Infome detalhes e especifações sobre o produto.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Imagem
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <span
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Importar arquivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        required
                        onChange={onChangeImagens}
                      />
                    </label>

                    <p className="pl-1">ou arrastar</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF até 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          {formErro?.imagens && (
            <span className="text-red-600">{formErro.imagens}</span>
          )}
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="categoria"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoria
              </label>
              <div className="mt-2">
                <select
                  id="categoria"
                  name="categoria"
                  required
                  autoComplete="categoria"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={onChangeCategoria}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                {formErro?.categoria && (
                  <p className="text-red-600">{formErro.categoria}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Preço
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="preco"
                  id="preco"
                  required
                  autoComplete="preco"
                  placeholder="Preço"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={onChangePreco}
                />
                {formErro?.preco && (
                  <p className="text-red-600">{formErro.preco}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quantidade
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="quantidade"
                  id="quantidade"
                  required
                  placeholder="Quantidade"
                  autoComplete="Quantidade"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={onChangeQuantidade}
                />
                {formErro?.quantidade && (
                  <p className="text-red-600">{formErro.quantidade}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Promocional
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="promocional"
                  id="promocional"
                  autoComplete="promocional"
                  placeholder="Promocional"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={onChangePromocional}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6  flex items-center justify-end gap-x-6 px-12 pb-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};
export default Produtos;
