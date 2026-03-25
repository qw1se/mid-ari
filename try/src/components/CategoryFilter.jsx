
import { categories } from "../api/categories"

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <button 
        className={!selectedCategory ? 'active' : ''} 
        onClick={() => onSelectCategory(null)}
      >
        All Products
      </button>
      
      {categories.map(cat => (
        <button
          key={cat}
          className={selectedCategory === cat ? 'active' : ''}
          onClick={() => onSelectCategory(cat)}
        >
          {cat.replace(/-/g, ' ')}
        </button>
      ))}
    </div>
  )
}
