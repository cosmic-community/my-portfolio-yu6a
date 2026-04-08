# My Portfolio
![App Preview](https://imgix.cosmicjs.com/51fe58f0-3336-11f1-b4af-3d6c0f4821ef-autopilot-photo-1486406146926-c627a92ad1ab-1775644382198.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning developer portfolio built with Next.js 16 and Cosmic CMS. Showcase your projects, skills, and work experience with a beautifully designed, fully responsive, and content-managed portfolio website.

## Features

- 🏠 **Dynamic Homepage** with hero section, featured projects, skills overview, and work experience highlights
- 📂 **Projects Gallery** with filterable grid, screenshot galleries, tech stack badges, and live/source links
- 🛠️ **Skills Showcase** with categorized skills, proficiency bars, and visual icons
- 💼 **Work Experience Timeline** with chronological career history and company details
- 📱 **Fully Responsive** design that looks great on all devices
- ⚡ **Server-Side Rendered** with Next.js 16 App Router for fast page loads
- 🎨 **Modern Dark Theme** with gradient accents and smooth animations
- 🔗 **Cosmic CMS Integration** for easy content management

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69d62e81e286d037e50375f8&clone_repository=69d62fdbe286d037e503765a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience."

### Code Generation Prompt

> "Build a Next.js application for a creative portfolio called 'My Portfolio'. The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your portfolio content

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Project by Slug
```typescript
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This portfolio uses three content types from Cosmic:

- **Projects** (`projects`) — Portfolio projects with descriptions, screenshots, tech stacks, and URLs
- **Skills** (`skills`) — Technical skills categorized with proficiency levels
- **Work Experience** (`work-experience`) — Professional experience with company details and timelines

All content is fetched server-side using the Cosmic SDK for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy
<!-- README_END -->