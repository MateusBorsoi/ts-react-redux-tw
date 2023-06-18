
  const getProdutos = async () => {
    const res = await fetch('http://localhost:5000/produtos', { next: { revalidate: 10 } })
      return res.json()
  }

export const dataPromise = getProdutos()