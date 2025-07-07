'use client'

import React from 'react'
import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

// Mock product data (should match the product list)
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

function getProductById(id: string | number) {
  return mockProducts.find(p => String(p.id) === String(id))
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : i < rating ? 'text-yellow-400 fill-current opacity-60' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + i * 0.07, type: 'spring', stiffness: 200 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
    <span className="text-sm text-gray-600 ml-1">({rating})</span>
  </div>
)

const Breadcrumbs = ({ product }: { product: any }) => (
  <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
    <Link href="/" className="hover:underline">Home</Link>
    <span>&gt;</span>
    <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:underline">{product.category}</Link>
    <span>&gt;</span>
    <span className="text-gray-800 font-medium">{product.name}</span>
  </nav>
)

const ProductDetailPage = () => {
  const params = useParams() as { productId: string }
  const { addToCart } = useCart()
  const product = getProductById(params.productId)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-4">Sorry, we couldn't find that product.</p>
        <Link href="/products" className="text-blue-600 hover:underline">Back to Products</Link>
      </div>
    )
  }

  // Suggest 3 other products
  const suggestions = mockProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3)

  // Mock extra info
  const stock = product.id % 2 === 0 ? 0 : 12 // Odd IDs in stock, even out of stock
  const sku = `SKU-${product.id.toString().padStart(5, '0')}`
  const highlights = [
    'High quality materials',
    '1 year warranty',
    '30-day return policy',
    'Best seller in category',
    'Secure checkout'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10"
    >
      {/* Breadcrumb with extra margin for nav */}
      <div className="mt-16">
        <Breadcrumbs product={product} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex-1 w-full max-w-md mx-auto md:mx-0"
        >
          <div className="relative w-full h-80 md:h-[420px] rounded-lg overflow-hidden shadow-lg bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </motion.div>
        {/* Product Info */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex-1 w-full max-w-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-4 mb-3">
            <motion.span
              className="text-2xl font-bold text-blue-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              ₹{product.price.toLocaleString()}
            </motion.span>
            <StarRating rating={product.rating} />
          </div>
          <div className="mb-4 text-gray-700 text-lg">{product.description}</div>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">{sku}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Brand: {product.brand}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">Category: {product.category}</span>
          </div>
          <hr className="my-4" />
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              className="text-green-700 font-semibold text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Free shipping on orders over ₹5,000
            </motion.span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 text-sm">1 year warranty</span>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Product Highlights</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              {highlights.map((h, i) => (
                <motion.li key={i} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.07 }}>{h}</motion.li>
              ))}
            </ul>
          </div>
          <hr className="my-4" />
          <div className="mb-6 flex items-center gap-4">
            <span className="font-semibold text-gray-700">Share:</span>
            <a href="#" className="hover:text-blue-600" aria-label="Share on Twitter"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 007.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z" /></svg></a>
            <a href="#" className="hover:text-blue-800" aria-label="Share on Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg></a>
            <a href="#" className="hover:text-pink-600" aria-label="Share on Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647.175 15.267.163 12 .163z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg></a>
          </div>
          <hr className="my-4" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors w-full md:w-auto"
            disabled={stock === 0}
          >
            {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </motion.button>
        </motion.div>
      </div>
      {/* You may also like */}
      {suggestions.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suggestions.map(s => (
              <Link key={s.id} href={`/products/${s.id}`} className="block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition-all"
                >
                  <div className="relative w-32 h-32 mb-3">
                    <Image src={s.image} alt={s.name} fill className="object-contain" />
                  </div>
                  <div className="font-semibold text-gray-800 mb-1 text-center">{s.name}</div>
                  <div className="text-blue-700 font-bold mb-1">₹{s.price.toLocaleString()}</div>
                  <StarRating rating={s.rating} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ProductDetailPage