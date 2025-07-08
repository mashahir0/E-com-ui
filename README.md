# 🛍️ E-com UI – Built with Next.js & Cursor

A responsive e-commerce front-end interface built using **Next.js (App Router)**, styled with **Tailwind CSS**, animated using **Framer Motion**, and scaffolded with the help of **Cursor AI**.

---

## 🚀 Features

- ✅ Fully responsive layout (mobile-first)
- 🛒 Product listing grid with dynamic filters
- 🔍 Sidebar filtering by category, brand, price, and rating
- 🎯 Product detail pages with animation and breadcrumb
- 💳 Fake payment gateway with order summary and animated success screen
- 🧾 Cart preview (UI only)
- 💌 Newsletter subscription form
- 🧠 Testimonials and feature sections
- 🖼️ Product gallery & category filters
- ✨ Page transitions and component animations using **Framer Motion**

---

## 🛠️ Tech Stack

| Tech        | Description                            |
|-------------|----------------------------------------|
| **Next.js** | App Router, TypeScript                 |
| **Tailwind CSS** | Utility-first styling             |
| **Framer Motion** | Animations and transitions       |
| **Cursor**   | AI-assisted development               |
| **Mock Data** | Fake products, cart, reviews, etc.   |

---

## 📁 Folder Structure




/app
/checkout # Fake payment gateway
/product/[slug] # Dynamic product detail pages
/products # Product listing + filters
/components
/ui # Cards, Buttons, Inputs
/sections # Hero, Features, Gallery, etc.
/cart # CartSidebar, CartBadge
/lib
data.ts # Mock product + category data



---

## 🧪 Mock Data

This project uses static JSON arrays to simulate:

- Product catalog
- Categories & brands
- User reviews/testimonials
- Cart data

➡️ Future updates may integrate real API or CMS.

---

## 🐞 Known Bugs / Limitations

> **Note:** This project is under development. Known issues include:

- `any` types and lint warnings on some pages
- Unescaped characters causing build warnings (`'`, `"`)
- Incomplete form validation (checkout)
- No real cart logic or persistent state
- Product filters are UI-only (no real data binding yet)

---

## ✅ Setup & Run Locally

```bash
git clone https://github.com/mashahir0/E-com-ui-nextjs.git
cd E-com-ui-nextjs
npm install
npm run dev


Visit: http://localhost:3000


🌐 Deployment
This project is deployed on Vercel
You can visit the live site here: [https://e-commerce-ui-weld.vercel.app/]


🤝 Acknowledgments
Built with:

Next.js

Tailwind CSS

Framer Motion

Cursor AI


🧠 Author
Mashahir P
Feel free to fork, contribute, or use this as a base for your own project.