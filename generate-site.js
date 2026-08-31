import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Exact Navigation Structure with Functional Past Conferences URLs
const navItems = [
  { name: "Home", href: "#" },
  {
    name: "Calls",
    href: "#calls",
    dropdown: [
      { name: "Workshop Posters", href: "#calls" },
      { name: "Papers", href: "#calls" },
      { name: "Workshops", href: "#calls" },
      { name: "Tutorials", href: "#calls" },
      { name: "Doctoral Colloquium", href: "#calls" },
      { name: "Sponsorship", href: "#sponsorship" },
    ]
  },
  {
    name: "Submission",
    href: "#submission",
    dropdown: [
      { name: "Workshop Poster", href: "#submission" },
      { name: "Conference Paper", href: "#submission" },
      { name: "Tutorial", href: "#submission" },
      { name: "Accepted Papers", href: "#submission" },
      { name: "Workshop Papers", href: "#submission" },
    ]
  },
  {
    name: "Program",
    href: "#program",
    dropdown: [
      { name: "Workshops", href: "#program" },
      { name: "Tutorials", href: "#program" },
      { name: "Industry Session", href: "#program" },
      { name: "Doctoral Colloquium", href: "#program" },
      { name: "Cultural Program", href: "#program" },
    ]
  },
  {
    name: "Schedule",
    href: "#schedule",
    dropdown: [
      { name: "Conference Schedule", href: "#schedule" },
      { name: "Program Brochure", href: "#schedule" },
      { name: "Oral Presentation", href: "#schedule" },
      { name: "Poster Presentation", href: "#schedule" },
      { name: "Guidelines", href: "#schedule" },
    ]
  },
  { name: "Sponsorship", href: "#sponsorship" },
  {
    name: "Past Conferences",
    href: "#",
    dropdown: [
      { name: "PREMI 2025", href: "https://premi25.iitd.ac.in/", target: "_blank" },
      { name: "PREMI 2023", href: "https://www.isical.ac.in/~premi23/", target: "_blank" },
      { name: "PREMI 2021", href: "https://www.isical.ac.in/~premi21/", target: "_blank" },
      { name: "PREMI 2019", href: "https://www.tezu.ernet.in/~premi2019/", target: "_blank" },
      { name: "PREMI 2017", href: "https://www.isical.ac.in/~miu/premi/premi17/index.php", target: "_blank" },
      { name: "PREMI 2015", href: "http://premi2015.ii.pw.edu.pl/", target: "_blank" },
      { name: "PREMI 2013", href: "https://www.isical.ac.in/~premi13/index.html", target: "_blank" },
      { name: "PREMI 2011", href: "https://www.hse.ru/org/hse/premi11", target: "_blank" },
    ]
  },
  {
    name: "Speakers",
    href: "#speakers",
    dropdown: [
      { name: "Keynote", href: "#speakers" },
      { name: "Invited", href: "#speakers" },
      { name: "Workshop", href: "#speakers" },
      { name: "Industry Session", href: "#speakers" },
    ]
  },
  {
    name: "Committee",
    href: "#committee",
    dropdown: [
      { name: "Organizing", href: "#committee" },
      { name: "Program", href: "#committee" },
      { name: "Awards", href: "#committee" },
      { name: "Volunteer", href: "#committee" },
      { name: "Area Chairs", href: "#committee" },
    ]
  },
  {
    name: "Gallery",
    href: "#gallery",
    dropdown: [
      { name: "Day 0", href: "#gallery" },
      { name: "Day 1", href: "#gallery" },
      { name: "Day 2", href: "#gallery" },
      { name: "Day 3", href: "#gallery" },
    ]
  },
  {
    name: "Updates Info",
    href: "#info",
    dropdown: [
      { name: "Venue", href: "#venue" },
      { name: "Visa", href: "#info" },
      { name: "Accommodation", href: "#info" },
      { name: "Contact Us", href: "#contact" },
    ]
  },
  {
    name: "Proceedings",
    href: "#proceedings",
    dropdown: [
      { name: "Volume 1", href: "#proceedings" },
      { name: "Volume 2", href: "#proceedings" },
    ]
  }
];

// Official Call for Papers Topics List
const topicsList = [
  "Generative AI",
  "Agentic AI",
  "Explainable AI",
  "Dependable AI",
  "AI Ethics",
  "Deep Learning",
  "Representation Learning",
  "Reinforcement Learning",
  "Self-Supervised Learning",
  "Transfer Learning",
  "LLM & MLM's",
  "Natural Language Understanding",
  "Cognitive Computing",
  "Computational Intelligence",
  "Soft Computing",
  "Statistical Analysis and Learning",
  "Pattern Recognition",
  "Biometrics",
  "Medical Imaging",
  "Speech and Audio Processing",
  "Augmented and Virtual Reality",
  "Data Visualization",
  "Big Data Analytics",
  "Spatial Data Analysis",
  "Social Cognition and Analytics",
  "Multi-modal Systems",
  "Cyber Physical Systems",
  "Edge Intelligence",
  "Quantum Computing",
  "Granular Computing",
  "Natural Computing",
  "Remote Sensing",
  "Smart and Intelligent Transportation",
  "Brain Science",
  "Computational Neuroscience",
  "Neurotechnology",
  "Computational Biology",
  "Systems Biology",
  "Digital Health",
  "Multi-omics and AI"
];

// 1. Navigation Bar with Enhanced Academic Brand Logo
function renderNavbar() {
  const desktopItems = navItems.map(item => {
    if (!item.dropdown) {
      return `
        <a href="${item.href}" class="px-2 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0F2942] hover:bg-[#E5C158]/20 rounded transition-colors whitespace-nowrap">
          ${item.name}
        </a>
      `;
    }

    const dropdownList = item.dropdown.map(sub => `
      <a href="${sub.href}" ${sub.target ? `target="${sub.target}" rel="noopener noreferrer"` : ''} class="block px-3.5 py-2 text-xs text-slate-700 hover:bg-[#E5C158]/15 hover:text-[#0F2942] border-l-2 border-transparent hover:border-[#E5C158] transition-colors whitespace-nowrap">
        ${sub.name}
      </a>
    `).join('');

    return `
      <div class="relative group">
        <button class="flex items-center gap-0.5 px-2 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0F2942] hover:bg-[#E5C158]/20 rounded transition-colors whitespace-nowrap focus:outline-none">
          <span>${item.name}</span>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-[#0F2942] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div class="dropdown-menu hidden group-hover:block absolute left-0 mt-0 min-w-[185px] bg-white border border-slate-200 shadow-2xl py-1 rounded-b">
          <div class="px-3 py-1.5 border-b border-slate-100 bg-[#E5C158]/15 text-[10px] font-bold uppercase tracking-wider text-[#0F2942]">
            ${item.name}
          </div>
          ${dropdownList}
        </div>
      </div>
    `;
  }).join('');

  return `
    <nav class="navbar-sticky bg-white border-b border-slate-200 shadow-sm relative w-full">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        <!-- Brand Identity (flex-shrink-0) -->
        <div class="flex-shrink-0 flex items-center mr-2">
          <a href="#" class="flex items-center gap-2 font-serif font-bold text-[#0F2942] text-sm tracking-tight whitespace-nowrap">
            <span class="w-7 h-7 bg-[#0C4A60] text-white flex items-center justify-center text-xs font-bold rounded shadow-xs">P</span>
            <span>PReMI 2027</span>
          </a>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden xl:flex items-center space-x-0.5 overflow-visible justify-end flex-grow">
          ${desktopItems}
        </div>

        <!-- Mobile / Tablet Hamburger Button (< 1200px) -->
        <div class="flex xl:hidden items-center">
          <button id="hamburgerBtn" onclick="toggleMobileNav()" aria-label="Toggle Menu" class="p-1.5 text-slate-700 hover:bg-[#E5C158]/20 rounded focus:outline-none">
            <svg id="hamburgerIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile Menu Main Drawer -->
      <div id="mobileNavContainer" class="mobile-nav-container xl:hidden">
        <div class="mobile-nav-inner px-4 py-3 divide-y divide-slate-100 text-slate-700">
          ${navItems.map((item, idx) => {
            if (!item.dropdown) {
              return `
                <div class="py-2">
                  <a href="${item.href}" onclick="toggleMobileNav(false)" class="block text-xs font-semibold uppercase tracking-wider text-[#0F2942] hover:text-[#0C4A60]">
                    ${item.name}
                  </a>
                </div>
              `;
            }
            return `
              <div class="py-1.5">
                <button 
                  onclick="toggleMobileAccordion('acc-${idx}', 'chevron-${idx}')" 
                  class="w-full flex items-center justify-between py-1.5 text-left text-xs font-serif font-bold uppercase tracking-wider text-[#0F2942] hover:text-[#0C4A60] focus:outline-none"
                >
                  <span>${item.name}</span>
                  <svg id="chevron-${idx}" class="chevron-icon w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div id="acc-${idx}" class="accordion-content">
                  <div class="accordion-inner pl-3 py-1 space-y-1.5 border-l-2 border-[#E5C158] mt-1">
                    ${item.dropdown.map(sub => `
                      <a href="${sub.href}" ${sub.target ? `target="${sub.target}" rel="noopener noreferrer"` : ''} onclick="toggleMobileNav(false)" class="block text-xs text-slate-600 hover:text-[#0F2942] py-0.5">
                        ${sub.name}
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </nav>
  `;
}

// 2. Full-Page Hero Section with Architectural Mustard Yellow (#E5C158) Rolling News Marquee
function renderHeroSectionWithNews() {
  const newsText = "Latest Updates: Paper submission opens on January 01, 2027 | Proceedings will be published in Springer LNCS | Pre-conference tutorials on December 15, 2027.";

  return `
    <div class="hero-fullpage w-full bg-[#0A3246] text-white overflow-hidden">
      
      <!-- Background Slideshow (Pulls local files from /public/slideshow/) -->
      <div id="heroSlideshow" class="absolute inset-0 z-0">
        <div class="slide-bg active" style="background-image: url('/slideshow/iiit-campus.jpg'), url('/public/slideshow/iiit-campus.jpg'), url('http://googleusercontent.com/image_collection/image_retrieval/14253635725454726701_0');"></div>
        <div class="slide-bg" style="background-image: url('/slideshow/bbsr-1.jpg'), url('/public/slideshow/bbsr-1.jpg'), url('http://googleusercontent.com/image_collection/image_retrieval/13346427150569178358_0');"></div>
        <div class="slide-bg" style="background-image: url('/slideshow/bbsr-2.jpg'), url('/public/slideshow/bbsr-2.jpg'), url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80');"></div>
      </div>

      <!-- CSS Deep Teal Color Overlay (rgba(10, 50, 70, 0.75)) -->
      <div class="absolute inset-0 z-10 bg-[#0A3246]/75 backdrop-brightness-95"></div>

      <!-- Top Spacer -->
      <div class="relative z-20"></div>

      <!-- Vertically Centered Content Container -->
      <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center flex flex-col justify-center items-center">
        
        <!-- Main Heading (White Serif) -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-md">
          12th International Conference on Pattern Recognition and Machine Intelligence (PReMI 2027)
        </h1>

        <!-- Subheading -->
        <p class="mt-5 text-base sm:text-lg lg:text-xl font-sans text-white/95 font-medium max-w-5xl mx-auto leading-relaxed drop-shadow-sm">
          Organised by <strong class="text-white font-semibold">International Institute of Information Technology (IIIT) Bhubaneswar,&nbsp;Odisha,&nbsp;India</strong>
        </p>

        <!-- Clean Flattened Typography -->
        <div class="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm sm:text-base font-sans text-slate-100 font-medium tracking-wide">
          <span>December 15–18, 2027</span>
        </div>

        <!-- Slideshow Indicator Dots -->
        <div class="mt-8 flex justify-center gap-2">
          <button onclick="setSlide(0)" class="w-2.5 h-2.5 rounded-full bg-white/90 dot-indicator transition-all hover:bg-white" aria-label="Slide 1"></button>
          <button onclick="setSlide(1)" class="w-2.5 h-2.5 rounded-full bg-white/40 dot-indicator transition-all hover:bg-white" aria-label="Slide 2"></button>
          <button onclick="setSlide(2)" class="w-2.5 h-2.5 rounded-full bg-white/40 dot-indicator transition-all hover:bg-white" aria-label="Slide 3"></button>
        </div>

      </div>

      <!-- 3. Rolling News Banner (Architectural Mustard Yellow #E5C158 Background with Deep Teal #0F2942 Text) -->
      <div class="w-full bg-[#E5C158] text-[#0F2942] border-t border-[#D4AE44] py-2.5 px-4 shadow-sm relative z-30">
        <div class="max-w-7xl mx-auto flex items-center gap-3 text-xs">
          <!-- Solid Navy Badge on Yellow -->
          <div class="shrink-0 px-2.5 py-0.5 bg-[#0F2942] text-[#E5C158] font-bold uppercase tracking-wider font-mono rounded text-[11px]">
            UPDATES
          </div>
          <div class="ticker-wrap flex-grow overflow-hidden whitespace-nowrap">
            <div class="ticker-content font-semibold text-[#0F2942]">
              <span class="inline-block px-8">${newsText}</span>
              <span class="inline-block px-8">${newsText}</span>
              <span class="inline-block px-8">${newsText}</span>
              <span class="inline-block px-8">${newsText}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

// Complete Page HTML Template
function renderHtml() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>12th International Conference on Pattern Recognition and Machine Intelligence (PReMI 2027)</title>
    <meta name="description" content="12th International Conference on Pattern Recognition and Machine Intelligence (PReMI 2027), organized by IIIT Bhubaneswar, India. December 15-18, 2027." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body class="bg-[#FAFAFA] text-[#1E293B] antialiased flex flex-col min-h-screen">
    
    <!-- 1. Navigation Bar (Sticky, High Z-Index, Enhanced Brand Logo) -->
    ${renderNavbar()}

    <!-- 2 & 3. 100vh Full-Page Hero Section with Docked Rolling News Banner -->
    ${renderHeroSectionWithNews()}

    <!-- Main Container (Crisp #FAFAFA Off-White Background) -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 flex-grow w-full">
      
      <!-- 4. Core Details & Dates Grid (3-Column Layout) -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        <!-- Column 1: Objective -->
        <div class="bg-white border border-slate-200 rounded-md p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <h2 class="text-lg font-serif font-bold text-[#0F2942] border-b border-slate-100 pb-2.5 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#0F2942] rounded-xs"></span>
              <span>Objective</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The primary goal of the conference is to provide a platform for presenting state-of-the-art scientific results, enabling academic and industrial interactions, and promoting collaborative research activities in Pattern Recognition, Machine Intelligence and related fields, involving scientists, engineers, professionals, academicians, and students.
            </p>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              This premier biennial event is an ideal forum for people to share their views and experiences in the said areas. This is the twelfth conference of this series.
            </p>
          </div>
          <div class="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
            Organizer: <strong class="text-[#0F2942]">IIIT Bhubaneswar, India</strong>
          </div>
        </div>

        <!-- Column 2: Important Dates -->
        <div class="bg-white border border-slate-200 border-t-4 border-t-[#E5C158] rounded-md p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <h2 class="text-lg font-serif font-bold text-[#0F2942] border-b border-slate-100 pb-2.5 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#E5C158] rounded-xs"></span>
              <span>Important Dates</span>
            </h2>
            <div class="divide-y divide-slate-100 text-xs sm:text-sm">
              <div class="py-2.5 flex justify-between items-center gap-2">
                <span class="text-slate-700">Paper submission open:</span>
                <span class="font-serif font-bold text-[#0F2942] shrink-0">January 01, 2027</span>
              </div>
              <div class="py-2.5 flex justify-between items-center gap-2">
                <span class="text-slate-700 font-medium">Paper submission close:</span>
                <span class="font-serif font-bold text-[#0F2942] bg-[#E5C158]/30 px-2 py-0.5 rounded shrink-0">June 30, 2027</span>
              </div>
              <div class="py-2.5 flex justify-between items-center gap-2">
                <span class="text-slate-700">Acceptance notification:</span>
                <span class="font-serif font-bold text-[#0F2942] shrink-0">September 05, 2027</span>
              </div>
              <div class="py-2.5 flex justify-between items-center gap-2">
                <span class="text-slate-700">Camera-ready submission:</span>
                <span class="font-serif font-bold text-[#0F2942] shrink-0">September 20, 2027</span>
              </div>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-100 text-xs text-[#0F2942] font-semibold flex items-center justify-between">
            <span>Pre-Conf Tutorials:</span>
            <span>December 15, 2027</span>
          </div>
        </div>

        <!-- Column 3: Submission & Publication Details -->
        <div class="bg-white border border-slate-200 rounded-md p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <h2 class="text-lg font-serif font-bold text-[#0F2942] border-b border-slate-100 pb-2.5 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#E5C158] rounded-xs"></span>
              <span>Submission & Publication</span>
            </h2>
            
            <div class="space-y-2 text-xs sm:text-sm text-slate-700">
              <p class="leading-relaxed">
                <strong>Publication:</strong> PREMI'27 Proceedings will be published by Springer Nature under its prestigious <strong>LNCS Series</strong>.
              </p>
              <p class="leading-relaxed">
                <strong>Page Limit:</strong> Papers should have a maximum of <strong>eight A4 pages</strong>.
              </p>
              <p class="leading-relaxed">
                <strong>Pre-Conference Tutorials:</strong> 03 two-hour pre-conference tutorials on December 15, 2027.
              </p>
              <p class="leading-relaxed">
                <strong>Special Sessions:</strong> Proposals for Special Sessions to be directed to Programme Chairs.
              </p>
            </div>
          </div>

          <!-- Download Call for Papers PDF CTA -->
          <div class="pt-4 border-t border-slate-100">
            <a 
              href="/pdfs/PReMI-2027-CFP15082026.pdf" 
              target="_blank" 
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#E5C158] hover:bg-[#D4AE44] text-[#0F2942] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              <svg class="w-4 h-4 text-[#0F2942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Download Call for Papers PDF</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </section>

      <!-- 5. Topics / Call for Papers (Structured Multi-Column Grid) -->
      <section id="calls" class="space-y-6">
        <div class="border-b border-slate-200 pb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-[#0F2942] bg-[#E5C158]/40 px-2 py-0.5 rounded">Call for Papers</span>
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#0F2942] mt-2">Topics of Interest</h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Papers are invited in all areas of Pattern Recognition and Machine Intelligence including, but not limited to:
          </p>
        </div>

        <!-- Topics Tag/Badge Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          ${topicsList.map(topic => `
            <div class="p-3 bg-white border border-slate-200 rounded text-xs font-medium text-slate-800 hover:border-[#0F2942] hover:bg-slate-50 transition-all flex items-center gap-2 shadow-2xs">
              <span class="w-1.5 h-1.5 bg-[#E5C158] rounded-full shrink-0"></span>
              <span class="leading-tight">${topic}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 6. Venue & Date Cards -->
      <section id="venue" class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        <div class="bg-white border border-slate-200 rounded-md p-6 sm:p-7 shadow-xs flex items-center gap-4">
          <div class="w-12 h-12 rounded bg-[#0F2942] text-[#E5C158] flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Conference Venue</div>
            <div class="text-base sm:text-lg font-serif font-bold text-[#0F2942] mt-0.5">
              IIIT Bhubaneswar
            </div>
          </div>
        </div>

        <div class="bg-white border border-slate-200 rounded-md p-6 sm:p-7 shadow-xs flex items-center gap-4">
          <div class="w-12 h-12 rounded bg-[#E5C158] text-[#0F2942] flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Conference Dates</div>
            <div class="text-base sm:text-lg font-serif font-bold text-[#0F2942] mt-0.5">
              December 15–18, 2027
            </div>
          </div>
        </div>

      </section>

    </main>

    <!-- 7. Footer (Full Width Dark Navy Background with Social, Twitter & Mail Links) -->
    <footer id="contact" class="w-full bg-[#0F2942] text-white/80 border-t border-slate-800 text-sm mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <!-- Left: Copyright -->
        <div>
          <p class="text-xs text-white/75 font-sans">
            Copyright © 2027 IIIT Bhubaneswar. All rights reserved.
          </p>
          <p class="text-[11px] text-white/50 font-sans mt-0.5">
            PReMI 2027 | Bhubaneswar, Odisha, India
          </p>
        </div>

        <!-- Center / Right: Socials & Mail (Mail, LinkedIn, Twitter/X) -->
        <div class="flex flex-wrap items-center justify-center gap-4 text-xs">
          
          <!-- Email -->
          <a 
            href="mailto:premi2027@iiit-bh.ac.in" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#E5C158] hover:text-[#0F2942] text-white/90 rounded transition-colors text-xs font-medium"
            title="Email PReMI 2027 Secretariat"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>premi2027@iiit-bh.ac.in</span>
          </a>

          <!-- LinkedIn -->
          <a 
            href="https://www.linkedin.com/school/international-institute-of-information-technology-bhubaneswar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#E5C158] hover:text-[#0F2942] text-white/90 rounded transition-colors text-xs font-medium"
            aria-label="LinkedIn"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <!-- Instagram -->
          <a 
            href="https://www.instagram.com/iiit_bhubaneswar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#E5C158] hover:text-[#0F2942] text-white/90 rounded transition-colors text-xs font-medium"
            aria-label="Instagram"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>

        </div>

      </div>
    </footer>

    <!-- Interactive Scripts: Slideshow, Mobile Nav Drawer & Mobile Submenu Accordions -->
    <script>
      // 1. Slideshow Logic
      let currentSlide = 0;
      const slides = document.querySelectorAll('#heroSlideshow .slide-bg');
      const dots = document.querySelectorAll('.dot-indicator');

      function setSlide(index) {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) {
          dots[currentSlide].classList.remove('bg-white/90');
          dots[currentSlide].classList.add('bg-white/40');
        }
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
          dots[currentSlide].classList.add('bg-white/90');
          dots[currentSlide].classList.remove('bg-white/40');
        }
      }

      setInterval(() => {
        setSlide(currentSlide + 1);
      }, 5000);

      // 2. Main Mobile Nav Drawer Animation Toggle
      function toggleMobileNav(forceState) {
        const container = document.getElementById('mobileNavContainer');
        const icon = document.getElementById('hamburgerIcon');
        if (!container) return;

        const willOpen = typeof forceState === 'boolean' ? forceState : !container.classList.contains('open');

        if (willOpen) {
          container.classList.add('open');
          if (icon) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
          }
        } else {
          container.classList.remove('open');
          if (icon) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
          }
        }
      }

      // 3. Mobile Accordion Toggle Logic
      function toggleMobileAccordion(accId, chevronId) {
        const content = document.getElementById(accId);
        const chevron = document.getElementById(chevronId);
        if (!content) return;
        
        const isOpen = content.classList.contains('open');
        
        document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('open'));
        document.querySelectorAll('.chevron-icon').forEach(el => el.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.add('open');
          if (chevron) chevron.classList.add('rotate-180');
        }
      }
    </script>

  </body>
</html>`;
}

// Build into dist/
const outDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'index.html'), renderHtml(), 'utf-8');
console.log('✓ Generated single-page dist/index.html with custom circuit/pattern intelligence emblem logo');
