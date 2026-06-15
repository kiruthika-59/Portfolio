# Portfolio Website

A modern and responsive personal portfolio website built using **Svelte 5** and **TypeScript** to showcase my profile, skills, projects, achievements, and learning journey.

## Overview

This project was developed as part of my learning journey in **Svelte 5**, focusing on:

- Component-based architecture
- Responsive UI design
- Reusable components
- State handling using Svelte runes
- Smooth navigation and interactive UI

The application is fully responsive and optimized for desktop, tablet, and mobile devices.

---

## Features

- Responsive Navbar with active section highlight
- Hero section with profile overview
- About section with education & internship details
- Skills and technologies showcase
- Projects section with expandable cards
- Learning/Blog section
- Achievements & leadership section
- Contact section with social links
- Scroll-to-top floating button
- Responsive layout for all screen sizes

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Svelte 5, TypeScript |
| Styling | HTML5, CSS3 |
| Icons | Lucide Svelte |
| Version Control | Git & GitHub |

---

## Project Structure

```text
src/
│── lib/
│   ├── components/
│   │   ├── Navbar.svelte
│   │   ├── HeroSection.svelte
│   │   ├── AboutSection.svelte
│   │   ├── SkillSection.svelte
│   │   ├── ProjectSection.svelte
│   │   ├── BlogSection.svelte
│   │   ├── AchievementSection.svelte
│   │   ├── ContactSection.svelte
│   │   ├── FloatingButton.svelte
│   │   └── Footer.svelte
│
│── routes/
│   └── +page.svelte
│   └── +layout.svelte
│   └── +page.server.ts
│   └── api/postes
│       └── +page.svelte
│
│── app.css
```

---

## Screenshots

### Home section 

<img width="1894" height="1007" alt="Home" src="https://github.com/user-attachments/assets/9a252a0e-eb32-40cc-9ac3-9b9a2eb58113" />

### About section

<img width="1876" height="1005" alt="About" src="https://github.com/user-attachments/assets/cd8e9eda-5a67-487e-8489-8933669f32eb" />

<img width="1836" height="954" alt="Education" src="https://github.com/user-attachments/assets/fb7c520f-00e8-48df-9fb0-0c5a292ca330" />

### Responsive Design

<img width="1341" height="901" alt="Mobile-View" src="https://github.com/user-attachments/assets/c11c73ad-9ebd-4437-be8c-b199f9e49751" />

---

## Key Learnings

Through this project, I explored:

- Svelte 5 component structure
- Props and reusable UI components
- Responsive web design
- Conditional rendering
- Smooth scrolling navigation
- State management using runes (`$state`, `$effect`)
- Mobile-first UI improvements

---

## Future Improvements

- Add project images
- Dark mode support
- Deploy using Vercel
- Add animations and transitions
- Integrate contact form backend

---


