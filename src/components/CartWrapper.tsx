'use client'

import React from 'react'
import { useCart } from '@/contexts/CartContext'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import CartSidebar from '@/components/ui/products/CartSidebar'

interface CartWrapperProps {
  children: React.ReactNode
}

const CartWrapper: React.FC<CartWrapperProps> = ({ children }) => {
  const { 
    cartItems,
    cartItemsCount, 
    isCartOpen, 
    openCart, 
    closeCart, 
    updateQuantity, 
    removeFromCart 
  } = useCart()
  
  return (
    <>
      <Nav cartItemsCount={cartItemsCount} onCartClick={openCart} />
      {children}
      <Footer />
      
      {/* Cart Sidebar - Available on all pages */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </>
  )
}

export default CartWrapper 