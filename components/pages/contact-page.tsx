"use client"

import type React from "react"

import { useState } from "react"
import { Mail, BookOpen, ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"

// Global Constants
const BRAND_NAME = "Barchi"
const PRODUCT_NAME = "Aegis Veil"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
      // Here you would typically send the data to a backend
      setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
    } else {
      alert("Please fill in all fields.")
    }
  }

  return (
    <div className="animate-fadeIn py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, science, or just want to share
            your {BRAND_NAME} experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
                ></textarea>
              </div>
              <div>
                <Button primary type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <Mail size={20} className="mr-3 text-teal-600" /> info@barchi.com (Conceptual)
                </p>
                <p className="flex items-center">
                  <BookOpen size={20} className="mr-3 text-teal-600" /> Barchi Labs, Innovation Drive, Science City
                  (Conceptual)
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3 text-sm">
                <details className="group bg-gray-50 p-3 rounded-md">
                  <summary className="font-medium cursor-pointer group-hover:text-teal-600 list-none flex justify-between items-center">
                    Is {PRODUCT_NAME} suitable for sensitive skin?
                    <ChevronRight size={18} className="transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-2 pl-2">
                    Yes, {PRODUCT_NAME} is formulated to be gentle and is suitable for all skin types, including
                    sensitive skin. However, we always recommend a patch test if you have specific concerns.
                  </p>
                </details>
                <details className="group bg-gray-50 p-3 rounded-md">
                  <summary className="font-medium cursor-pointer group-hover:text-teal-600 list-none flex justify-between items-center">
                    How do I remove {PRODUCT_NAME}?
                    <ChevronRight size={18} className="transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-2 pl-2">
                    {PRODUCT_NAME} can be removed along with your makeup using your regular gentle cleanser. No special
                    removal process is needed.
                  </p>
                </details>
                <details className="group bg-gray-50 p-3 rounded-md">
                  <summary className="font-medium cursor-pointer group-hover:text-teal-600 list-none flex justify-between items-center">
                    Can I use {PRODUCT_NAME} with my existing skincare routine?
                    <ChevronRight size={18} className="transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-2 pl-2">
                    Apply {PRODUCT_NAME} after your usual skincare products (like serums and moisturizers have fully
                    absorbed) and before makeup.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
