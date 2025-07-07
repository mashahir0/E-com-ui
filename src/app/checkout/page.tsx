"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PaymentGateway from "@/components/ui/PaymentGateway"
import { useCart } from "@/contexts/CartContext"
import Link from "next/link"

const TAX_RATE = 0.05

const CheckoutPage = () => {
  const { cartItems } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Fallback to static cart if cart is empty (for demo)
  const staticCart = [
    { id: 1, name: "Nike Air Max 270", price: 8999, quantity: 1 },
    { id: 2, name: "Samsung Galaxy S21", price: 49999, quantity: 1 }
  ]
  const items = cartItems.length > 0 ? cartItems : staticCart

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * TAX_RATE)
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Payment Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <AnimatePresence>
            {!success ? (
              <PaymentGateway
                onSuccess={() => setSuccess(true)}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  className="bg-green-100 rounded-full p-8 mb-6"
                >
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
                <Link href="/">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors">
                    Return to Home
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Order Summary */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-1/2 bg-gray-100 p-6 md:p-10 flex flex-col justify-center"
        >
          <h2 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-gray-500 text-sm">Qty: {item.quantity}</div>
                </div>
                <div className="font-semibold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-medium text-gray-900">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Tax (5%)</span>
            <span className="font-medium text-gray-900">₹{tax.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-bold mt-4">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CheckoutPage