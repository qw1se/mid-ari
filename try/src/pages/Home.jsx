
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../api/productsApi"
import CategoryFilter from "../components/CategoryFilter"

export default function Home({addToCart}){

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (selectedCategory) {
      getProductsByCategory(selectedCategory).then(data => {
        setProducts(data)
        setLoading(false)
      })
    } else {
      getProducts().then(data => {
        setProducts(data)
        setLoading(false)
      })
    }
  }, [selectedCategory])

  return (
    <div>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid">
          {products.map(p => (
            <div key={p.id} className="card">
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
