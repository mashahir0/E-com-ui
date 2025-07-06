'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import SidebarFilter from '@/components/ui/products/SidebarFilter'
import ProductList from '@/components/ui/products/ProductList'
import SortDropdown from '@/components/ui/products/SortDropdown'
import Breadcrumbs from '@/components/ui/products/Breadcrumbs'
import Pagination from '@/components/ui/products/Pagination'

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    image: "/images/shoes.png",
    price: 8999,
    category: "Shoes",
    brand: "Nike",
    rating: 4.5,
    description: "Comfortable running shoes with excellent cushioning"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    image: "/images/img1.png",
    price: 49999,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.8,
    description: "Latest smartphone with advanced features"
  },
  {
    id: 3,
    name: "Adidas Ultraboost",
    image: "/images/shoes2.png",
    price: 12999,
    category: "Shoes",
    brand: "Adidas",
    rating: 4.6,
    description: "Premium running shoes for professional athletes"
  },
  {
    id: 4,
    name: "Denim Jacket",
    image: "/images/img2.png",
    price: 2499,
    category: "Clothing",
    brand: "Nike",
    rating: 4.2,
    description: "Stylish denim jacket for casual wear"
  },
  {
    id: 5,
    name: "iPhone 13 Pro",
    image: "/images/img3.png",
    price: 89999,
    category: "Electronics",
    brand: "Apple",
    rating: 4.9,
    description: "Professional grade smartphone with pro camera system"
  },
  {
    id: 6,
    name: "Casual T-Shirt",
    image: "/images/img4.png",
    price: 899,
    category: "Clothing",
    brand: "Adidas",
    rating: 4.0,
    description: "Comfortable cotton t-shirt for everyday wear"
  },
  {
    id: 7,
    name: "Wireless Headphones",
    image: "/images/img5.png",
    price: 3999,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.3,
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 8,
    name: "Running Shorts",
    image: "/images/img6.png",
    price: 1499,
    category: "Clothing",
    brand: "Nike",
    rating: 4.1,
    description: "Lightweight running shorts for maximum comfort"
  }
]

const ProductsPage = () => {
  const { addToCart } = useCart()
  
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [filters, setFilters] = useState<{
    categories: string[]
    brands: string[]
    ratings: string[]
    priceRanges: string[]
  }>({
    categories: [],
    brands: [],
    ratings: [],
    priceRanges: []
  })
  const [sortOption, setSortOption] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [breadcrumbs, setBreadcrumbs] = useState(['Home', 'Products'])

  const productsPerPage = 8

  // Handle filter changes
  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item: string) => item !== value)
        : [...prev[filterType], value]
    }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  // Handle sort changes
  const handleSortChange = (option: string) => {
    setSortOption(option)
    setCurrentPage(1) // Reset to first page when sort changes
  }

  // Add to cart
  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...products]

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category))
    }

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand))
    }

    // Apply rating filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter(product => {
        return filters.ratings.some(rating => {
          const minRating = parseInt(rating)
          return product.rating >= minRating && product.rating < minRating + 1
        })
      })
    }

    // Apply price range filter
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return filters.priceRanges.some(range => {
          switch (range) {
            case '0-1000':
              return product.price >= 0 && product.price <= 1000
            case '1000-5000':
              return product.price > 1000 && product.price <= 5000
            case '5000+':
              return product.price > 5000
            default:
              return true
          }
        })
      })
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      default:
        // Keep original order for newest
        break
    }

    setFilteredProducts(filtered)
  }, [products, filters, sortOption])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Sidebar Filter */}
          <div className="lg:w-1/4">
            <SidebarFilter 
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={() => setFilters({
                categories: [],
                brands: [],
                ratings: [],
                priceRanges: []
              })}
            />
          </div>

          {/* Product Section */}
          <div className="lg:w-3/4">
            {/* Sort and Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  Products ({filteredProducts.length})
                </h1>
              </div>
              <SortDropdown 
                value={sortOption}
                onChange={handleSortChange}
              />
            </div>

            {/* Product Grid */}
            <ProductList 
              products={currentProducts}
              onAddToCart={handleAddToCart}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage