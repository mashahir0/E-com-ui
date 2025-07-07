import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PaymentGatewayProps {
  onSuccess: () => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ onSuccess, isLoading, setIsLoading }) => {
  const [form, setForm] = useState({
    name: '',
    card: '',
    expiry: '',
    cvv: '',
    address: ''
  })
  const [errors, setErrors] = useState<any>({})

  const validate = () => {
    const errs: any = {}
    if (!form.name.trim()) errs.name = 'Full Name is required'
    if (!/^\d{16}$/.test(form.card)) errs.card = 'Card number must be 16 digits'
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) errs.expiry = 'Expiry must be MM/YY'
    if (!/^\d{3}$/.test(form.cvv)) errs.cvv = 'CVV must be 3 digits'
    if (!form.address.trim()) errs.address = 'Billing address is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onSuccess()
    }, 2000)
  }

  return (
    <motion.form
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Payment Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isLoading}
        />
        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Card Number</label>
        <input
          type="text"
          name="card"
          value={form.card}
          onChange={handleChange}
          maxLength={16}
          inputMode="numeric"
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.card ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isLoading}
        />
        {errors.card && <div className="text-red-500 text-xs mt-1">{errors.card}</div>}
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1">Expiry (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            maxLength={5}
            placeholder="MM/YY"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.expiry ? 'border-red-500' : 'border-gray-300'}`}
            disabled={isLoading}
          />
          {errors.expiry && <div className="text-red-500 text-xs mt-1">{errors.expiry}</div>}
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1">CVV</label>
          <input
            type="password"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            maxLength={3}
            inputMode="numeric"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
            disabled={isLoading}
          />
          {errors.cvv && <div className="text-red-500 text-xs mt-1">{errors.cvv}</div>}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Billing Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          rows={3}
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isLoading}
        />
        {errors.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </motion.form>
  )
}

export default PaymentGateway