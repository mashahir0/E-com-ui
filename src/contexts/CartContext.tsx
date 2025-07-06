'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CartItem {
  id: number
  name: string
  image: string
  price: number
  category: string
  brand: string
  rating: number
  description: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartItemsCount: number
  isCartOpen: boolean
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  updateQuantity: (productId: number, quantity: number) => void
  removeFromCart: (productId: number) => void
  openCart: () => void
  closeCart: () => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const clearCart = () => setCartItems([])

  const value: CartContextType = {
    cartItems,
    cartItemsCount,
    isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    openCart,
    closeCart,
    clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
} 