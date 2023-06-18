
  const getProdutos = async () => {
    const response = await fetch('http://localhost:5000/produtos', {next: {revalidate : 10} })
    return response.json()
   
  }

export const dataPromise = getProdutos()