# Biru – Cloud Automation & Web Solutions

Biru is a modern marketing website for a tech consultancy that helps businesses automate workflows, migrate to the cloud, and build web applications.  

The site is built with **React**, **Vite**, and **Tailwind CSS**, with fully functional contact flows powered by **EmailJS** and a **Calendly**-based consultation booking page.

---

## 🚀 Features

- **Marketing Homepage**
  - Hero section with clear value prop
  - Services overview and CTAs to get started / contact

- **About Page**
  - Story of Biru, mission, and approach
  - Credibility + positioning as a boutique tech partner

- **Services Page**
  - Clear breakdown of the main service pillars  
    (Web development, cloud, AI & automation, etc.)
  - “Get Started” CTA flowing into contact/start-project pages

- **Contact Us Page**
  - React Hook Form + Zod validation  
  - EmailJS integration sends:
    - A notification email to the admin (you)
    - An auto-reply to the client
  - Form fields:
    - Name, Email
    - Optional Business Name
    - Service Needed (select)
    - Message

- **Start a Project Page**
  - Longer project intake form with:
    - Full Name, Email, Company
    - Project Type, Budget, Timeline
    - Project Details (long text)
    - Discovery Call preference
  - EmailJS integration using a separate template for project submissions
  - Client + admin emails, nicely branded

- **Book a Consultation Page**
  - Embedded Calendly iframe for a 30-minute discovery call
  - Responsive layout that looks good on mobile and desktop

- **Case Study Page**
  - One illustrative case study:
    - Challenge
    - Approach
    - Results (bulleted metrics)
  - Placeholder / diagram area that can be updated with a custom image

- **Global Navigation**
  - Fixed, semi-transparent navbar with scroll blur effect
  - Responsive mobile nav:
    - Hamburger → animated “X”
    - Full-screen blurred backdrop behind dropdown
    - Floating, rounded dropdown card with navigation links and “Get Started” button

- **Notifications & UX**
  - Toast notifications using **sonner** for success/error messaging
  - Loading states (`isSubmitting`) on forms to prevent double submits

---

## 🧰 Tech Stack

- **Frontend**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [React Router](https://reactrouter.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/) + `@hookform/resolvers/zod`
  - [sonner](https://sonner.emilkowal.ski/) – toast notifications

- **Integrations**
  - [EmailJS](https://www.emailjs.com/) – email sending from forms
  - [Calendly](https://calendly.com/) – embedded booking widget

---

## 📂 Project Structure (high level)

> Exact paths may vary slightly, but conceptually it looks like this:

```bash
src/
  assets/
    letter-b.png
    contactusimage.png
    # other images

  component/
    NavBar.jsx
    # other shared components (Hero, sections, etc.)

  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Contact.jsx
    StartProject.jsx
    BookConsultation.jsx
    CaseStudy.jsx

  main.jsx        # React entry
  App.jsx         # Routes and layout
```
---

## Getting Started

- **Prerequisites**
  - Node.js >= v18
  - npm, yarn, or pnpm

- **Install Dependencies**
  
  ```bash
  npm install   # using npm
  yarn install  # using yarn
  pnpm install  # using pnpm
  ```

- **Environmental Variables**
  
  > Create a file at the root project called .env

  ```bash
  - touch .env
  ```

  > Add your environmental variables

  ```env
  VITE_EMAILJS_SERVICE_ID=service_xxxxxx
  VITE_EMAILJS_TEMPLATE_CONTACT=template_xxxxxxx
  VITE_EMAILJS_TEMPLATE_PROJECT=template_xxxxxxx
  VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

  # optional – if you ever want to change the Calendly link via env
  VITE_CALENDLY_URL=https://calendly.com/your-calendly/30min
  ```

  > Run the dev server
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```
---

## 🔗 Live Demo

[Biru – Cloud Automation & Web Solutions](https://biru.vercel.app)

  
