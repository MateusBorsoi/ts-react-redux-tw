"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Image from "next/image";
import imgLogo from "../../public/assets/img_logo.png";
import { useState } from "react";
import { Userschema } from "@/validation/schemas/userSchema";
import { toast } from "react-toastify";
import ToastMsg from "./Toast/Toast";
import API from "@/axios/config";
import { useDispatch } from "react-redux";
var Register = function () {
    var dispatch = useDispatch();
    var _a = useState(""), nome = _a[0], setNome = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), senha = _c[0], setSenha = _c[1];
    var _d = useState(""), confirmaSenha = _d[0], setConfirmaSenha = _d[1];
    var _e = useState({
        nome: "",
        email: "",
        senha: "",
        confirmaSenha: "",
    }), formErro = _e[0], setFormErros = _e[1];
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        function requestRegister() {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_1, errorMsg;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, API.post('/users', formData)];
                        case 1:
                            response = _a.sent();
                            if (response.status === 200) {
                                toast.success(response.data.message);
                            }
                            else {
                                toast.error(response.data.message);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            if (error_1.response) {
                                errorMsg = error_1.response.data.message;
                                toast.error(errorMsg);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        var formData, validationErrors_1, errors_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    formData = {
                        nome: nome,
                        email: email,
                        senha: senha,
                        confirmaSenha: confirmaSenha,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Userschema.validate(formData, { abortEarly: false })];
                case 2:
                    _a.sent();
                    requestRegister();
                    return [3 /*break*/, 4];
                case 3:
                    validationErrors_1 = _a.sent();
                    errors_1 = {};
                    if (validationErrors_1.inner && validationErrors_1.inner.length > 0) {
                        validationErrors_1.inner.forEach(function (error) {
                            errors_1[error.path] = error.message;
                        });
                        setFormErros(errors_1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ToastMsg theme="colored" bar="false"/>
          <Image className="mx-auto h-10 w-auto" src={imgLogo} alt="logo"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input id="nome" name="nome" type="nome" value={nome} autoComplete="nome" onChange={function (e) { return setNome(e.target.value); }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
                {(formErro === null || formErro === void 0 ? void 0 : formErro.nome) && (<p className="text-red-600 text-center">{formErro.nome}</p>)}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input id="email" name="email" type="email" value={email} autoComplete="email" onChange={function (e) { return setEmail(e.target.value); }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
                {(formErro === null || formErro === void 0 ? void 0 : formErro.email) && (<p className="text-red-600 text-center">{formErro.email}</p>)}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" value={senha} autoComplete="current-password" onChange={function (e) { return setSenha(e.target.value); }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
                {(formErro === null || formErro === void 0 ? void 0 : formErro.senha) && (<p className="text-red-600 text-center">{formErro.senha}</p>)}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirma Senha
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input id="confirmaSenha" name="confirmaSenha" type="password" autoComplete="current-password" onChange={function (e) { return setConfirmaSenha(e.target.value); }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
                {(formErro === null || formErro === void 0 ? void 0 : formErro.confirmaSenha) && (<p className="text-red-600 text-center">
                    {formErro.confirmaSenha}
                  </p>)}
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Enviar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Já possui uma conta ?
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              {" "}
              Entrar
            </a>
          </p>
        </div>
      </div>
    </>);
};
export default Register;
