
export async function getProducts(){
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()
  return data.products
}

export async function getProductsByCategory(category){
  const res = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await res.json()
  return data.products
}
