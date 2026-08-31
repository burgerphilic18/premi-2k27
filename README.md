# 12th International Conference on Pattern Recognition and Machine Intelligence (PReMI 2027)

> Official website and static web application for **PReMI 2027**, organized by the **International Institute of Information Technology (IIIT) Bhubaneswar, Odisha, India** (December 15–18, 2027).

---

## 🏛️ About PReMI 2027

The **International Conference on Pattern Recognition and Machine Intelligence (PReMI)** is a prestigious biennial international forum. Its primary objective is to present state-of-the-art scientific results, encourage academic and industrial collaborations, and foster global research in:
- Pattern Recognition
- Machine Intelligence & Generative AI
- Deep Learning & Big Data Analytics
- Computer Vision, Medical Imaging, & Digital Health
- Bio-inspired & Quantum Computing

**Proceedings:** Published by **Springer Nature** under its prestigious **LNCS (Lecture Notes in Computer Science)** Series.

---

## 🚀 Technology Stack & Architecture

- **Framework:** [Astro v4.x](https://astro.build/) (Static Site Generation / `output: 'static'`)
- **Styling:** [Tailwind CSS v3.x](https://tailwindcss.com/) with `@astrojs/tailwind`
- **Design System:** Elevated Academic UI System:
  - **Site Background & Navbar:** Architectural Light Sandstone `#FCFBE8` with `#EFEBC8` structural borders
  - **Primary Brand Color:** Deep Teal `#0C4A60` and Navy `#0F2942`
  - **Accent Color:** Architectural Mustard Yellow `#E5C158`
  - **Typography:** Serif (`Merriweather`) for headings and Sans-Serif (`Inter`) for crisp body text
- **SEO & Social Sharing:**
  - Complete Open Graph (Facebook/LinkedIn) and Twitter Cards metadata
  - JSON-LD Academic Schema (`@type: AcademicEvent`)
  - Canonical URLs, `robots.txt`, and XML `sitemap.xml`

---

## 📂 Project Structure

```
premi-27/
├── astro.config.mjs          # Astro configuration (Tailwind integration & static output)
├── tailwind.config.js        # Tailwind CSS paths and extensions
├── package.json              # Standard Astro scripts & dependencies
├── README.md                 # Project documentation
├── public/
│   ├── favicon.svg           # PReMI classic square emblem badge
│   ├── robots.txt            # Search engine crawler instructions
│   ├── sitemap.xml           # Search engine sitemap index
│   ├── pdfs/                 # Official Call for Papers document
│   │   └── PReMI-2027-CFP15082026.pdf
│   └── slideshow/            # Hero section background images
│       ├── iiit-campus.jpg
│       ├── bbsr-1.jpg
│       └── bbsr-2.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Sticky desktop navigation & mobile accordion drawer
│   │   ├── Hero.astro        # 100vh hero slideshow & docked news ticker
│   │   └── Footer.astro      # Navy footer with email, LinkedIn & Instagram links
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML Shell, SEO meta tags, fonts, & JSON-LD schema
│   ├── pages/
│   │   └── index.astro       # Home landing page with 39 CFP topics and info cards
│   └── styles/
│       └── global.css        # Global CSS & Tailwind layers
└── dist/                     # Production static build output for deployment
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: `v18.x` or later (tested on Node v20/v24)
- **npm**: `v9.x` or later

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone <repo-url>
cd premi-27
npm install
```

### 2. Development Server
Start the local Astro development server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Static Build
Generate production-ready static assets into the `/dist` directory:
```bash
npm run build
```

### 4. Local Preview
Preview the production build locally:
```bash
npm run preview
```

---

## 🔍 SEO & Search Engine Optimization

The site is optimized for global academic visibility and search indexation:
1. **Schema.org Structured Data (`JSON-LD`)**:
   - Explicitly defines event dates (`2027-12-15` to `2027-12-18`), location (`IIIT Bhubaneswar, Odisha, India`), publisher (`Springer Nature`), and academic keywords.
2. **Social Cards (Open Graph & Twitter)**:
   - Dynamic meta tags for image preview (`summary_large_image`) and descriptive snippets on LinkedIn, Twitter/X, and messaging apps.
3. **Robots & Sitemap**:
   - `public/robots.txt` and `public/sitemap.xml` are automatically placed in the build root.

---

## 📅 Key Dates

| Milestone | Date |
| :--- | :--- |
| **Paper Submission Open** | January 01, 2027 |
| **Paper Submission Close** | June 30, 2027 |
| **Acceptance Notification** | September 05, 2027 |
| **Camera-Ready Submission** | September 20, 2027 |
| **Pre-Conference Tutorials** | December 15, 2027 |
| **Conference Dates** | December 15–18, 2027 |

---

## 📬 Contact & Official Links

- **Email:** [premi2027@iiit-bh.ac.in](mailto:premi2027@iiit-bh.ac.in)
- **LinkedIn:** [IIIT Bhubaneswar School Page](https://www.linkedin.com/school/international-institute-of-information-technology-bhubaneswar/)
- **Instagram:** [@iiitbhubaneswar](https://www.instagram.com/iiitbhubaneswar/)
- **Host Institute:** [International Institute of Information Technology Bhubaneswar](https://www.iiit-bh.ac.in/)

---

## 📄 License & Attribution
Copyright © 2027 IIIT Bhubaneswar. All rights reserved.
