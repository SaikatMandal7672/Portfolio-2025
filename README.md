# Saikat Mandal - Portfolio Website

A modern, minimalistic portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Built with Next.js for optimal performance
- **Sections**:
  - Hero section with social links
  - About section with education details
  - Skills organized by category
  - Project showcase with live demos
  - Contact section

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Update Personal Information

Edit the content in the respective component files:
- Social links: `components/Hero.tsx` and `components/Contact.tsx`
- Education: `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`

### Modify Design

Update colors and spacing in `tailwind.config.ts` to match your preferences.

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Author

**Saikat Mandal**
- GitHub: [@SaikatMandal7672](https://github.com/SaikatMandal7672)

## License

This project is open source and available under the MIT License.
