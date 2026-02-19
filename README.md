# 🌍 Tongole Tours — Next.js Website

> "Experience Malawi the indigenous way"

A full Next.js 14 website for **Tongole Tours Company**, an indigenous Malawian tour operator.

---

## 🚀 Getting Started

This project was bootstrapped with `npx create-next-app@latest`.

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
tongole-tours/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Homepage
│       ├── globals.css         # Global styles + animations
│       ├── about/
│       │   └── page.tsx        # About Us page
│       ├── tours/
│       │   └── page.tsx        # Tours/Itineraries page
│       ├── contact/
│       │   └── page.tsx        # Contact & Booking page
│       └── components/
│           ├── Navbar.tsx      # Sticky animated navbar
│           ├── Hero.tsx        # Auto-sliding hero with Ken Burns
│           ├── WhySection.tsx  # Features, stats counter, about snippet
│           ├── ToursSection.tsx# Tour cards grid
│           ├── FAQ.tsx         # Accordion FAQ section
│           ├── Partners.tsx    # Scrolling marquee partners
│           └── Footer.tsx      # Full footer
├── tailwind.config.js          # Custom colors, fonts, animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design Features (Inspired by PHASOM)

| Feature | Implementation |
|---------|---------------|
| **Image Slider Hero** | Auto-advancing with Ken Burns zoom + slide indicators |
| **Sticky Navbar** | Transparent → dark on scroll, with mobile hamburger |
| **Scroll Animations** | IntersectionObserver reveals (fade up, slide left/right) |
| **Stats Counter** | Animated number count-up on scroll entry |
| **Flip Cards** | CSS 3D flip on hover (add to team cards) |
| **FAQ Accordion** | Smooth max-height expand/collapse |
| **Scrolling Marquee** | Infinite CSS animation for partners/lodges |
| **Tour Cards** | Hover lift + image zoom effect |

---

## 🎨 Color Palette

| Name | Usage |
|------|-------|
| `earth-400` (#d8913a) | Primary accent, buttons, highlights |
| `earth-500` (#c97420) | CTA buttons |
| `midnight` (#0a1628) | Dark backgrounds, navbar |
| `forest-600` (#1e6e1e) | Secondary accent, eco references |
| `earth-50` (#fdf8f0) | Page background |

---

## 🔤 Typography

- **Display**: Playfair Display (headings)
- **Body**: Lato (paragraphs, UI text)
- **Accent**: Cormorant Garamond (italic quotes, subtitles)

---

## 📄 Pages

- **`/`** — Homepage with hero slider, features, stats, tours preview, FAQ, partners
- **`/about`** — Vision, Mission, Values, Sustainability & Social Responsibility
- **`/tours`** — All 7 signature itineraries with routes and highlights
- **`/contact`** — Enquiry/booking form with contact information

---

## ✅ Next Steps

1. Add real images to `/public/` and update `<img>` sources
2. Add a logo file to `/public/logo.png` and update Navbar
3. Connect the contact form to a backend or email service (e.g., Resend, Nodemailer)
4. Add a `sitemap.xml` and `robots.txt` for SEO
5. Deploy to [Vercel](https://vercel.com) for free hosting

```bash
npx vercel
```
