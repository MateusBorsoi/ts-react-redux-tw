export const formataValor = (preco: number) => {
   const valorFormatado =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
   return valorFormatado
} 