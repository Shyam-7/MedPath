# MedPath — Guiding Future Doctors 🩺

A modern, responsive landing page for **MedPath** — a NEET UG counseling and medical college admission guidance service. Built with React, TypeScript, Vite, and Ant Design.

![MedPath](https://img.shields.io/badge/MedPath-NEET%20Counseling-1B5E3B?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5-0170FE?style=flat-square&logo=antdesign)

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI library |
| [TypeScript 6](https://www.typescriptlang.org) | Type safety |
| [Vite 8](https://vite.dev) | Build tool & dev server |
| [Ant Design 5](https://ant.design) | UI component library |
| [React Router 7](https://reactrouter.com) | Client-side routing |

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── common/              # Shared components
│   │   ├── MedPathLogo.tsx   # SVG logo component (light/dark)
│   │   └── SectionTitle.tsx  # Reusable section header
│   ├── Layout/
│   │   ├── AppHeader.tsx     # Sticky navbar with nav + CTAs
│   │   └── AppFooter.tsx     # 4-column footer
│   ├── Hero/
│   │   └── HeroSection.tsx   # Hero banner with guide card
│   ├── Stats/
│   │   └── StatsBar.tsx      # Animated statistics bar
│   ├── Services/
│   │   └── ServicesSection.tsx # Service cards grid
│   ├── SignatureProgram/
│   │   └── SignatureProgram.tsx # Program features section
│   ├── Colleges/
│   │   └── CollegesSection.tsx # College categories grid
│   ├── Testimonials/
│   │   └── TestimonialsSection.tsx # Testimonial carousel
│   ├── FAQ/
│   │   └── FAQSection.tsx    # Collapsible FAQ accordion
│   └── CTABanner/
│       └── CTABanner.tsx     # Call-to-action banner
├── data/
│   └── siteData.ts          # All static content (centralized)
├── pages/
│   └── Home/
│       └── HomePage.tsx      # Home page assembly
├── theme/
│   └── themeConfig.ts        # Ant Design theme customization
├── App.tsx                   # Root app with routing
├── main.tsx                  # Entry point
└── index.css                 # Minimal global styles
```

---

## 🏗️ Architecture Decisions

### Minimal CSS, Maximum Ant Design
The codebase deliberately avoids custom CSS wherever possible:

- **Layout**: Uses Ant Design `Row`, `Col`, `Flex`, `Space` for all layouts
- **Typography**: Uses `Typography.Title`, `Typography.Text`, `Typography.Paragraph`
- **Components**: Ant Design `Card`, `Button`, `Menu`, `Carousel`, `Collapse`, `Avatar`, `Tag`, `Badge`, `Divider`
- **Theming**: All brand colors and tokens configured via Ant Design's `ConfigProvider` in `themeConfig.ts`
- **Global CSS**: Only ~80 lines for gradients, scrollbar, and section utility classes that Ant Design doesn't cover

### Centralized Data Layer
All page content lives in `src/data/siteData.ts`:
- Navigation items, services, stats, testimonials, FAQ, contact info
- Easy to update content without touching component code
- Fully typed TypeScript constants

### Component Structure
Each section is a self-contained component:
- Imports its own data from `siteData.ts`
- Uses shared `SectionTitle` for consistent heading styles
- No prop drilling — components are autonomous

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd MedPath

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Type-check and build
npm run build

# Preview the production build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📋 Page Sections

| # | Section | Description |
|---|---|---|
| 1 | **Header** | Sticky navbar with logo, navigation menu, Call/WhatsApp/Book CTA buttons |
| 2 | **Hero** | "Your Path to a Medical Future" with counseling session CTA and floating guide card |
| 3 | **Stats Bar** | 2500+ Students, 500+ Colleges, 98% Success, 4.9/5 Satisfaction |
| 4 | **Services** | 5 service cards: NEET Counseling, College Selection, Choice Filling, Admission, Post-Admission |
| 5 | **Signature Program** | MedPath Signature Guidance with 6 feature tags |
| 6 | **Colleges** | University categories: AIIMS, JIPMER, Govt, Deemed, Private + Pan India highlight |
| 7 | **Testimonials** | Auto-playing carousel with parent/student quotes |
| 8 | **FAQ** | 4 collapsible questions with animated expand/collapse |
| 9 | **CTA Banner** | "Book a FREE Counseling Session Now!" with dual action buttons |
| 10 | **Footer** | Brand info, Quick Links, Services, Contact, Working Hours, Social icons |

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Primary Green | `#1B5E3B` | Buttons, icons, highlights |
| Primary Green Light | `#2E7D52` | Gradients, hover states |
| Navy Accent | `#1A3A5C` | Dark backgrounds |
| Gold | `#F5A623` | Accent highlights |
| Light Green BG | `#F7FAF8` | Alternate section backgrounds |
| Icon BG | `#F0F7F3` | Icon container backgrounds |

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 600-800 weight
- **Body**: 400-500 weight

---

## 📝 Placeholders

The following items use placeholder values and should be updated for production:

| Item | Current Value | Notes |
|---|---|---|
| Phone | `+91 98765 43210` | Update with real number |
| Email | `info@medpath.in` | Update with real email |
| Address | `Delhi, India` | Update with real address |
| WhatsApp Link | `wa.me/919876543210` | Update with real number |
| Hero Image | Emoji placeholder 🩺 | Replace with actual photo |
| Testimonial Avatars | Generic user icons | Replace with real photos |
| Logo | SVG text logo | Replace with actual brand logo |
| Social Links | `#` | Add real social media URLs |
| Nav Links | `#` | Wire up to actual pages |

---

## 📜 License

Private — All rights reserved.
