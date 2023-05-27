import * as Yup from 'yup'

export const Userschema = Yup.object().shape({
  nome: Yup.string().required('É necessário informar o Nome'),
  email: Yup.string().email('E-mail Inválido').required('É necessário Informar o E-mail'),
  senha: Yup.string().min(6, 'A senha deve conter no mínimo 6 caractéres').required('É necessário informar a senha'),
  confirmaSenha: Yup.string().oneOf([Yup.ref('senha'), ''], 'A senha não confere').required('É necessário confirmar a senha')
})
