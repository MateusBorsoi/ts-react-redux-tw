import * as Yup from 'yup'

export const ProductSchema = Yup.object().shape({
  descricao: Yup.string().min(3, 'A descrição deve conter ao menos 3 caractéres').required('É necessário informar a descrição'),
  preco: Yup.number().typeError('É necessário ser um número').positive('Valor deve ser maior que 0').required('É necessário Informar o preço'),
  categoria: Yup.string().required('É necessário informar a categoria'),
  imagens: Yup.mixed().required('É necessário importar uma imagem'),
  complemento: Yup.string().min(40,'Complemento deve conter ao menos 40 caractéres').required('É necessário informar o complemento'),
  quantidade: Yup.number().typeError('É necessário ser um número').positive('Valor deve ser maior que 0').required('É necessário Informar a quantidade'),
})



