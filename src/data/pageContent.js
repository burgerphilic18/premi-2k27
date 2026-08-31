export const pageDataRegistry = {
  // Calls
  "/calls": {
    title: "Calls & Proposals",
    subtitle: "PReMI 2027 invites high-quality original research contributions, workshop proposals, and tutorials.",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }],
    sections: [
      {
        heading: "Overview of Open Calls",
        content: "PReMI 2027 welcomes submissions across various research categories. Authors and researchers are encouraged to review specific guidelines for each call before submitting through Microsoft CMT."
      }
    ],
    subLinks: [
      { name: "Call for Papers", path: "/calls/papers", badge: "Primary Track" },
      { name: "Call for Workshops", path: "/calls/workshops", badge: "Proposals Open" },
      { name: "Call for Tutorials", path: "/calls/tutorials", badge: "Proposals Open" },
      { name: "Doctoral Colloquium", path: "/calls/doctoral-colloquium", badge: "PhD Forum" },
      { name: "Call for Sponsorship", path: "/calls/sponsorship", badge: "Industry" },
    ]
  },
  "/calls/papers": {
    title: "Call for Papers",
    subtitle: "12th International Conference on Pattern Recognition and Machine Intelligence",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }, { label: "Call for Papers", path: "/calls/papers" }],
    badge: "Submissions Open Soon",
    actionButton: { text: "Submit via Microsoft CMT", link: "https://cmt3.research.microsoft.com", external: true },
    sections: [
      {
        heading: "Scope and Technical Areas",
        content: "PReMI 2027 provides a premier international forum for researchers, engineers, and practitioners to report the latest innovations and developments in Pattern Recognition, Machine Intelligence, Computer Vision, and related areas. Topics of interest include, but are not limited to:",
        list: [
          "Pattern Recognition & Machine Learning Foundations",
          "Deep Learning, Transformers & Foundation Models",
          "Computer Vision, Image Processing & 3D Understanding",
          "Biometrics, Forensics & Document Analysis",
          "Bioinformatics, Healthcare Informatics & Computational Biology",
          "Natural Language Processing & Speech Processing",
          "Cognitive Computing, Neuro-symbolic AI & Explainable AI (XAI)",
          "Cybersecurity, Privacy & Adversarial Robustness",
          "Big Data Analytics, Graph Neural Networks & IoT Intelligence"
        ]
      },
      {
        heading: "Submission Guidelines & Page Limits",
        content: "Papers must describe original work not previously published or concurrently under review. All submissions must follow Springer LNCS formatting guidelines.",
        table: {
          headers: ["Category", "Maximum Length", "Review Type"],
          rows: [
            ["Regular Research Paper", "10-12 pages (including references)", "Double-blind"],
            ["Short / Work-in-Progress Paper", "6-8 pages (including references)", "Double-blind"],
            ["Doctoral Forum Extended Abstract", "4-6 pages", "Single-blind"]
          ]
        }
      },
      {
        heading: "Proceedings & Publication",
        content: "All accepted and presented papers will be published in the prestigious Springer Lecture Notes in Computer Science (LNCS) proceedings series and indexed in Scopus, Web of Science (CPCI), EI Compendex, and DBLP."
      }
    ]
  },
  "/calls/workshops": {
    title: "Call for Workshop Proposals",
    subtitle: "Proposals for half-day or full-day workshops on cutting-edge and emerging research topics.",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }, { label: "Call for Workshops", path: "/calls/workshops" }],
    sections: [
      {
        heading: "Workshop Proposal Guidelines",
        content: "Workshops provide a focused, interactive setting for exploring specialized subjects. Proposals must be submitted in PDF format and include:",
        list: [
          "Title of the workshop and target audience",
          "Names, affiliations, bios, and contact details of the organizers",
          "Statement of objectives, significance, and relevance to PReMI 2027",
          "Expected number of submissions and attendees",
          "Tentative Program Committee list and workshop duration (Half-day or Full-day)"
        ]
      },
      {
        heading: "Important Dates for Workshop Organizers",
        table: {
          headers: ["Milestone", "Target Date"],
          rows: [
            ["Workshop Proposal Submission", "May 15, 2027 [Placeholder]"],
            ["Proposal Acceptance Notification", "June 15, 2027 [Placeholder]"],
            ["Workshop Paper Submission Deadline", "August 20, 2027 [Placeholder]"]
          ]
        }
      }
    ]
  },
  "/calls/tutorials": {
    title: "Call for Tutorial Proposals",
    subtitle: "Tutorial sessions covering state-of-the-art methodology and tools in AI and Pattern Recognition.",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }, { label: "Call for Tutorials", path: "/calls/tutorials" }],
    sections: [
      {
        heading: "Tutorial Guidelines",
        content: "We invite leading researchers and practitioners to propose comprehensive tutorials (2.5 to 3 hours). Proposals should include a detailed syllabus, instructor credentials, and target audience prerequisites."
      }
    ]
  },
  "/calls/doctoral-colloquium": {
    title: "Call for Doctoral Colloquium",
    subtitle: "Mentoring forum for doctoral scholars to present ongoing PhD research to senior academic leaders.",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }, { label: "Doctoral Colloquium", path: "/calls/doctoral-colloquium" }],
    sections: [
      {
        heading: "About the Doctoral Colloquium",
        content: "The PReMI 2027 Doctoral Colloquium provides PhD candidates with constructive feedback on their dissertation work from experienced faculty and senior mentors in pattern recognition and machine intelligence."
      }
    ]
  },
  "/calls/sponsorship": {
    title: "Call for Sponsorship & Industry Partnerships",
    subtitle: "Partner with PReMI 2027 to showcase your brand to top AI and computing researchers worldwide.",
    section: "Calls",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calls", path: "/calls" }, { label: "Sponsorship", path: "/calls/sponsorship" }],
    sections: [
      {
        heading: "Sponsorship Tiers & Benefits",
        content: "Explore partnership opportunities designed for research labs, technology enterprises, and academic institutions.",
        table: {
          headers: ["Tier", "Contribution", "Key Benefits"],
          rows: [
            ["Platinum Sponsor", "INR 3,00,000 / $4,000", "Keynote address slot, prime booth space, 5 complimentary registrations, prominent logo on all collaterals"],
            ["Gold Sponsor", "INR 2,00,000 / $2,500", "Industry track talk, exhibition booth, 3 complimentary registrations, logo inclusion"],
            ["Silver Sponsor", "INR 1,00,000 / $1,500", "Brochure inclusion, 2 complimentary registrations, logo on website and banners"],
            ["Bronze Sponsor", "INR 50,000 / $750", "Logo on website and banner, 1 complimentary registration"]
          ]
        }
      }
    ]
  },

  // Submissions
  "/submission": {
    title: "Submissions Hub",
    subtitle: "Complete submission instructions, author kit, templates, and paper review portal.",
    section: "Submission",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Submission", path: "/submission" }],
    subLinks: [
      { name: "Conference Paper Submission", path: "/submission/conference-paper" },
      { name: "Workshop Poster Submission", path: "/submission/workshop-poster" },
      { name: "Tutorial Proposals", path: "/submission/tutorial" },
      { name: "Accepted Papers", path: "/submission/accepted-papers" },
    ]
  },
  "/submission/conference-paper": {
    title: "Conference Paper Submission",
    subtitle: "Full paper instructions, LaTeX/Word templates, and submission system guidelines.",
    section: "Submission",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Submission", path: "/submission" }, { label: "Conference Paper", path: "/submission/conference-paper" }],
    actionButton: { text: "Go to CMT Portal", link: "https://cmt3.research.microsoft.com", external: true },
    sections: [
      {
        heading: "Formatting Instructions & Templates",
        content: "Authors must prepare their manuscripts in strict accordance with the Springer Lecture Notes in Computer Science (LNCS) single-column format.",
        list: [
          "LaTeX Template: Springer LNCS LaTeX2e package (available from Springer website)",
          "Word Template: Springer LNCS Microsoft Word template",
          "Double-blind review: Submissions must be completely anonymized. Remove author names, affiliations, and acknowledgments.",
          "Submission format: Only PDF manuscripts are accepted via the Microsoft CMT portal."
        ]
      }
    ]
  },
  "/submission/workshop-poster": {
    title: "Workshop & Poster Submission",
    subtitle: "Instructions for short papers, ongoing research demonstrations, and poster presentations.",
    section: "Submission",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Submission", path: "/submission" }, { label: "Workshop Poster", path: "/submission/workshop-poster" }],
    sections: [
      {
        heading: "Poster Specifications",
        content: "Poster presentation dimensions are standard A0 Portrait size (841mm width x 1189mm height). Mounting materials will be provided at the IIIT Bhubaneswar venue."
      }
    ]
  },
  "/submission/tutorial": {
    title: "Tutorial Proposals Submission",
    subtitle: "Submission details for tutorial instructors.",
    section: "Submission",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Submission", path: "/submission" }, { label: "Tutorials", path: "/submission/tutorial" }],
    sections: [
      {
        heading: "Submission of Tutorial Coursepacks",
        content: "Instructors with accepted tutorial proposals should submit finalized slide decks and exercise materials to the tutorial chairs."
      }
    ]
  },
  "/submission/accepted-papers": {
    title: "Accepted Papers",
    subtitle: "List of regular and short papers accepted for publication and presentation at PReMI 2027.",
    section: "Submission",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Submission", path: "/submission" }, { label: "Accepted Papers", path: "/submission/accepted-papers" }],
    sections: [
      {
        heading: "Paper Acceptance Roster",
        content: "The review process is currently in progress. The list of accepted papers, camera-ready verification links, and session tracks will be published after the notification milestone."
      }
    ]
  },

  // Program
  "/program": {
    title: "Conference Program",
    subtitle: "Comprehensive academic, technical, and cultural itinerary for PReMI 2027.",
    section: "Program",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Program", path: "/program" }],
    subLinks: [
      { name: "Workshops", path: "/program/workshops" },
      { name: "Tutorials", path: "/program/tutorials" },
      { name: "Industry Session", path: "/program/industry-session" },
      { name: "Cultural Program", path: "/program/cultural-program" },
    ]
  },
  "/program/workshops": {
    title: "Workshops Program",
    subtitle: "Specialized thematic workshop tracks hosted on Day 1 of PReMI 2027.",
    section: "Program",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Program", path: "/program" }, { label: "Workshops", path: "/program/workshops" }],
    sections: [
      {
        heading: "Workshop Schedule",
        content: "Details regarding specific workshop tracks and session schedules will be announced upon conclusion of the review process."
      }
    ]
  },
  "/program/tutorials": {
    title: "Tutorials Program",
    subtitle: "In-depth tutorial sessions by international domain experts.",
    section: "Program",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Program", path: "/program" }, { label: "Tutorials", path: "/program/tutorials" }],
    sections: [
      {
        heading: "Tutorial Sessions",
        content: "Parallel tutorial sessions will be conducted on the pre-conference day in the seminar halls and computing labs at IIIT Bhubaneswar."
      }
    ]
  },
  "/program/industry-session": {
    title: "Industry & Innovation Session",
    subtitle: "Bridging fundamental AI research with real-world enterprise deployments and applications.",
    section: "Program",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Program", path: "/program" }, { label: "Industry Session", path: "/program/industry-session" }],
    sections: [
      {
        heading: "Industry Forum & Tech Demos",
        content: "Features invited talks from corporate R&D laboratories, executive panels, and hands-on technology demonstrations."
      }
    ]
  },
  "/program/cultural-program": {
    title: "Cultural Program & Banquet",
    subtitle: "Experience Odisha's rich heritage of art, classical dance, and cuisine.",
    section: "Program",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Program", path: "/program" }, { label: "Cultural Program", path: "/program/cultural-program" }],
    sections: [
      {
        heading: "Odissi Classical Recital & Conference Dinner",
        content: "All registered delegates and accompanying persons are warmly invited to a special cultural evening celebrating Odisha's classical Odissi dance heritage, followed by the Gala Conference Banquet."
      }
    ]
  },

  // Schedule
  "/schedule": {
    title: "Conference Schedule & Timetable",
    subtitle: "Full event schedule, downloadable brochure, and presenter instructions.",
    section: "Schedule",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Schedule", path: "/schedule" }],
    subLinks: [
      { name: "Conference Schedule", path: "/schedule/overview" },
      { name: "Brochure & Handbook", path: "/schedule/brochure" },
      { name: "Presentation Guidelines", path: "/schedule/presentation-guidelines" },
    ]
  },
  "/schedule/overview": {
    title: "Conference Schedule Matrix",
    subtitle: "Four-day schedule breakdown for PReMI 2027 at IIIT Bhubaneswar.",
    section: "Schedule",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Schedule", path: "/schedule" }, { label: "Overview", path: "/schedule/overview" }],
    sections: [
      {
        heading: "Program Matrix (Tentative)",
        content: "All times in Indian Standard Time (IST / UTC+5:30).",
        table: {
          headers: ["Day / Date", "Morning (09:00 - 13:00)", "Afternoon (14:00 - 17:30)", "Evening (18:00 - 21:00)"],
          rows: [
            ["Day 1 (Pre-Conf)", "Workshops & Tutorial Sessions", "Workshops & Doctoral Colloquium", "Welcome Reception & Registration"],
            ["Day 2 (Main Conf)", "Inauguration & Keynote Address I", "Parallel Oral Sessions (Tracks A & B)", "Cultural Program & Odissi Recital"],
            ["Day 3 (Main Conf)", "Keynote II & Invited Lectures", "Poster Sessions & Industry Track", "Conference Banquet & Award Ceremony"],
            ["Day 4 (Main Conf)", "Keynote III & Technical Sessions", "Valedictory Function & Best Paper Awards", "Heritage Tour (Optional)"]
          ]
        }
      }
    ]
  },
  "/schedule/brochure": {
    title: "Conference Brochure & Handbook",
    subtitle: "Download official conference collateral, call flyers, and pocket schedule.",
    section: "Schedule",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Schedule", path: "/schedule" }, { label: "Brochure", path: "/schedule/brochure" }],
    sections: [
      {
        heading: "Official Publications",
        content: "Official brochures and handbook PDF files will be made available for download here prior to the conference."
      }
    ]
  },
  "/schedule/presentation-guidelines": {
    title: "Presentation Guidelines",
    subtitle: "Technical specifications for oral and poster presenters.",
    section: "Schedule",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Schedule", path: "/schedule" }, { label: "Guidelines", path: "/schedule/presentation-guidelines" }],
    sections: [
      {
        heading: "Presentation Timing & Formats",
        list: [
          "Oral Regular Papers: 15 minutes presentation + 5 minutes Q&A",
          "Oral Short Papers: 10 minutes presentation + 3 minutes Q&A",
          "Poster Presentations: Standard A0 portrait format, presenter in attendance during the session"
        ]
      }
    ]
  },

  // Speakers
  "/speakers": {
    title: "Keynote & Invited Speakers",
    subtitle: "Distinguished researchers and industry pioneers delivering plenary addresses at PReMI 2027.",
    section: "Speakers",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Speakers", path: "/speakers" }],
    subLinks: [
      { name: "Keynote Speakers", path: "/speakers/keynote" },
      { name: "Invited Speakers", path: "/speakers/invited" },
      { name: "Workshop Speakers", path: "/speakers/workshop" },
      { name: "Industry Speakers", path: "/speakers/industry" },
    ]
  },
  "/speakers/keynote": {
    title: "Keynote Speakers",
    subtitle: "Plenary lectures from world-renowned authorities in Pattern Recognition and Machine Intelligence.",
    section: "Speakers",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Speakers", path: "/speakers" }, { label: "Keynote", path: "/speakers/keynote" }],
    sections: [
      {
        heading: "Distinguished Keynote Speakers (Placeholders)",
        content: "Keynote speakers for PReMI 2027 are currently being confirmed and will be announced with bios and lecture abstracts."
      }
    ]
  },
  "/speakers/invited": {
    title: "Invited Speakers",
    subtitle: "Invited thematic lectures covering cutting-edge domain topics.",
    section: "Speakers",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Speakers", path: "/speakers" }, { label: "Invited", path: "/speakers/invited" }],
    sections: [
      {
        heading: "Invited Session Speakers",
        content: "Announcements regarding invited speakers will be published here upon confirmation."
      }
    ]
  },
  "/speakers/workshop": {
    title: "Workshop Speakers",
    subtitle: "Featured session leads and keynote speakers for accepted workshops.",
    section: "Speakers",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Speakers", path: "/speakers" }, { label: "Workshop", path: "/speakers/workshop" }],
    sections: [
      {
        heading: "Workshop Invited Speakers",
        content: "Details to be announced following workshop proposal selections."
      }
    ]
  },
  "/speakers/industry": {
    title: "Industry Speakers",
    subtitle: "Industry leaders sharing real-world AI applications and engineering insights.",
    section: "Speakers",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Speakers", path: "/speakers" }, { label: "Industry", path: "/speakers/industry" }],
    sections: [
      {
        heading: "Industry Forum Speakers",
        content: "Industry leaders representing premier AI research groups and tech enterprises."
      }
    ]
  },

  // Committee
  "/committee": {
    title: "Organizing & Technical Committees",
    subtitle: "The international and local team organizing the 12th edition of PReMI at IIIT Bhubaneswar.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }],
    subLinks: [
      { name: "Organizing Committee", path: "/committee/organizing" },
      { name: "Technical Program Committee", path: "/committee/program" },
      { name: "Awards Committee", path: "/committee/awards" },
      { name: "Area Chairs", path: "/committee/area-chairs" },
      { name: "Volunteer Committee", path: "/committee/volunteer" },
    ]
  },
  "/committee/organizing": {
    title: "Organizing Committee",
    subtitle: "Patrons, General Chairs, and Steering Committee for PReMI 2027.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }, { label: "Organizing", path: "/committee/organizing" }],
    sections: [
      {
        heading: "Conference Leadership (Placeholders)",
        content: "Below is the structural roster for the organizing committee members:",
        table: {
          headers: ["Role", "Name [Placeholder]", "Affiliation"],
          rows: [
            ["Chief Patron", "Director, IIIT Bhubaneswar", "IIIT Bhubaneswar, India"],
            ["Honorary General Chair", "Prof. [Name Placeholder]", "Indian Statistical Institute (ISI), Kolkata"],
            ["General Co-Chairs", "Prof. [Name Placeholder] & Prof. [Name Placeholder]", "IIIT Bhubaneswar & International Partner"],
            ["Organizing Chairs", "Dr. [Name Placeholder] & Dr. [Name Placeholder]", "Dept. of CSE, IIIT Bhubaneswar"],
            ["Finance & Treasury Chair", "Dr. [Name Placeholder]", "IIIT Bhubaneswar"],
            ["Publication Chairs", "Dr. [Name Placeholder] & Dr. [Name Placeholder]", "IIIT Bhubaneswar / ISI Kolkata"],
            ["Publicity Chairs", "Dr. [Name Placeholder] & Dr. [Name Placeholder]", "International / National Institutions"]
          ]
        }
      }
    ]
  },
  "/committee/program": {
    title: "Technical Program Committee",
    subtitle: "International peer reviewers and program committee members ensuring high editorial standards.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }, { label: "Program", path: "/committee/program" }],
    sections: [
      {
        heading: "Technical Program Committee (TPC)",
        content: "The PReMI 2027 TPC includes distinguished scholars from over 25 countries across Europe, the Americas, Asia, and Australasia."
      }
    ]
  },
  "/committee/awards": {
    title: "Awards Committee",
    subtitle: "Independent jury for Best Paper, Best Student Paper, and Young Researcher Awards.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }, { label: "Awards", path: "/committee/awards" }],
    sections: [
      {
        heading: "Award Categories",
        list: [
          "PReMI 2027 Best Paper Award",
          "Best Student Paper Award",
          "Outstanding Reviewer Recognition"
        ]
      }
    ]
  },
  "/committee/area-chairs": {
    title: "Area Chairs & Track Leadership",
    subtitle: "Senior domain experts supervising specialized technical tracks.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }, { label: "Area Chairs", path: "/committee/area-chairs" }],
    sections: [
      {
        heading: "Technical Track Area Chairs",
        table: {
          headers: ["Track", "Area Chair [Placeholder]", "Institution"],
          rows: [
            ["Track 1: Deep Learning & Pattern Recognition", "Prof. [Placeholder]", "TBD"],
            ["Track 2: Computer Vision & Medical Imaging", "Prof. [Placeholder]", "TBD"],
            ["Track 3: NLP & Speech Technologies", "Prof. [Placeholder]", "TBD"],
            ["Track 4: Bioinformatics & Systems Biology", "Prof. [Placeholder]", "TBD"],
            ["Track 5: Trustworthy, Safe & Robust AI", "Prof. [Placeholder]", "TBD"]
          ]
        }
      }
    ]
  },
  "/committee/volunteer": {
    title: "Student Volunteer Committee",
    subtitle: "Student organizing team and logistics coordinators from IIIT Bhubaneswar.",
    section: "Committee",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Committee", path: "/committee" }, { label: "Volunteer", path: "/committee/volunteer" }],
    sections: [
      {
        heading: "Student Volunteers",
        content: "Call for student volunteer applications from IIIT Bhubaneswar and regional institutions will open in September 2027."
      }
    ]
  },

  // Updates & News
  "/updates": {
    title: "Latest Announcements & Notices",
    subtitle: "Official circulars, deadline updates, and press releases for PReMI 2027.",
    section: "Updates",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Updates", path: "/updates" }],
    sections: [
      {
        heading: "Official Circulars",
        content: "Stay tuned for real-time announcements from the organizing secretariat.",
        list: [
          "August 2026: Official Call for Papers and Workshop Proposals announced.",
          "October 2026: Submission portal on Microsoft CMT active for paper uploads.",
          "December 2026: Keynote speaker list and initial program highlights."
        ]
      }
    ]
  },

  // Info & Travel
  "/info": {
    title: "Attendee Information & Logistics",
    subtitle: "Essential travel, visa, accommodation, and venue logistics for PReMI 2027.",
    section: "Info",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Info", path: "/info" }],
    subLinks: [
      { name: "Venue & Travel", path: "/info/venue" },
      { name: "Visa Information", path: "/info/visa" },
      { name: "Accommodation", path: "/info/accommodation" },
      { name: "Contact Us", path: "/info/contact" },
    ]
  },
  "/info/venue": {
    title: "Venue & Travel Information",
    subtitle: "International Institute of Information Technology (IIIT) Bhubaneswar, Odisha, India.",
    section: "Info",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Info", path: "/info" }, { label: "Venue", path: "/info/venue" }],
    sections: [
      {
        heading: "Conference Venue",
        content: "International Institute of Information Technology (IIIT) Bhubaneswar\nGothapatna, PO: Malipada, Bhubaneswar, Odisha 751003, India.",
      },
      {
        heading: "How to Reach Bhubaneswar",
        list: [
          "By Air: Biju Patnaik International Airport (BBI) is well connected to major Indian transit hubs (Delhi, Mumbai, Bengaluru, Kolkata, Chennai) and direct international flights.",
          "By Train: Bhubaneswar Railway Station (BBS) is a major East Coast railway junction connected to all major Indian cities.",
          "Local Transit: App-based cab aggregators (Uber, Ola) and pre-paid airport taxis operate 24/7."
        ]
      }
    ]
  },
  "/info/visa": {
    title: "Visa Information",
    subtitle: "Guidelines for international delegates requiring an Indian Conference Visa.",
    section: "Info",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Info", path: "/info" }, { label: "Visa", path: "/info/visa" }],
    sections: [
      {
        heading: "Indian Conference Visa Requirements",
        content: "Foreign nationals visiting India for conferences must obtain an Indian Conference Visa. The organizing committee will provide official visa clearance and invitation letters upon request following conference registration."
      }
    ]
  },
  "/info/accommodation": {
    title: "Accommodation & Hotels",
    subtitle: "Recommended hotels and guest house lodging for delegates.",
    section: "Info",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Info", path: "/info" }, { label: "Accommodation", path: "/info/accommodation" }],
    sections: [
      {
        heading: "Partner Hotels & Rates (Placeholder)",
        table: {
          headers: ["Hotel Name", "Category", "Distance to IIIT", "Special Conf. Rate"],
          rows: [
            ["Mayfair Lagoon / Waves", "5 Star Luxury", "11 km", "INR 7,500 / night [TBD]"],
            ["Fortune Park Sishmo", "4 Star Business", "14 km", "INR 4,500 / night [TBD]"],
            ["Ginger Hotel Bhubaneswar", "3 Star Budget", "12 km", "INR 2,800 / night [TBD]"],
            ["IIIT Bhubaneswar Guest House", "Campus Guest House", "On Campus", "INR 1,200 / night (Limited availability)"]
          ]
        }
      }
    ]
  },
  "/info/contact": {
    title: "Contact Us & Conference Secretariat",
    subtitle: "Get in touch with the PReMI 2027 organizing secretariat at IIIT Bhubaneswar.",
    section: "Info",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Info", path: "/info" }, { label: "Contact", path: "/info/contact" }],
    sections: [
      {
        heading: "Secretariat Address",
        content: "PReMI 2027 Conference Secretariat\nDepartment of Computer Science & Engineering\nInternational Institute of Information Technology, Bhubaneswar\nGothapatna, Bhubaneswar - 751003, Odisha, India\n\nEmail: premi2027@iiit-bh.ac.in [Placeholder]\nPhone: +91 674 2653 000 [Placeholder]"
      }
    ]
  },

  // Proceedings
  "/proceedings": {
    title: "Proceedings & Indexing",
    subtitle: "Springer Lecture Notes in Computer Science (LNCS) and Global Indexing.",
    section: "Proceedings",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Proceedings", path: "/proceedings" }],
    sections: [
      {
        heading: "Springer LNCS Publication",
        content: "All accepted and presented peer-reviewed papers will be published in Springer Lecture Notes in Computer Science (LNCS) series and indexed in Scopus, Web of Science, EI Compendex, and DBLP."
      }
    ]
  },

  // Past Conferences
  "/past-conferences": {
    title: "Past PReMI Conferences",
    subtitle: "Archive of previous editions of the International Conference on Pattern Recognition and Machine Intelligence.",
    section: "Proceedings",
    breadcrumbs: [{ label: "Home", path: "/" }, { label: "Proceedings", path: "/proceedings" }, { label: "Past Conferences", path: "/past-conferences" }],
    sections: [
      {
        heading: "PReMI Series History (2005 - 2025)",
        content: "PReMI was founded in 2005 as a premier biennial international conference series primarily spearheaded by the Indian Statistical Institute (ISI) in collaboration with leading academic institutions."
      },
      {
        heading: "Past Editions & Proceedings",
        table: {
          headers: ["Edition", "Year", "Host Institute & Location", "Springer LNCS Volume"],
          rows: [
            ["11th PReMI", "2025", "Indian Statistical Institute, Kolkata, India", "LNCS Series (Vol. TBD)"],
            ["10th PReMI", "2023", "Indian Statistical Institute & IIIT Bhubaneswar, India", "LNCS Vol. 14301 / 14302"],
            ["9th PReMI", "2021", "Indian Statistical Institute, Kolkata (Virtual)", "LNCS Vol. 13098"],
            ["8th PReMI", "2019", "Tezpur University, Assam, India", "LNCS Vol. 11941 / 11942"],
            ["7th PReMI", "2017", "Indian Statistical Institute, Kolkata, India", "LNCS Vol. 10597"],
            ["6th PReMI", "2015", "Warsaw University of Technology, Poland", "LNCS Vol. 9124"],
            ["5th PReMI", "2013", "Indian Statistical Institute, Kolkata, India", "LNCS Vol. 8251"],
            ["4th PReMI", "2011", "Higher School of Economics, Moscow, Russia", "LNCS Vol. 6744"],
            ["3rd PReMI", "2009", "IIT Delhi, New Delhi, India", "LNCS Vol. 5909"],
            ["2nd PReMI", "2007", "Indian Statistical Institute, Kolkata, India", "LNCS Vol. 4815"],
            ["1st PReMI", "2005", "Indian Statistical Institute, Kolkata, India", "LNCS Vol. 3776"]
          ]
        }
      }
    ]
  }
};
