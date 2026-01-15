# Course Goals App

A simple and modern course goals management application built with React, TypeScript, and Vite.

## Features

- ✅ Add new course goals with title and description
- ✅ Delete goals you've completed
- ✅ Real-time character counter for input fields
- ✅ Form validation with error messages
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Smooth loading states with async form submission
- ✅ Empty state message when no goals exist

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Hook Form** - Form management and validation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── CourseGoals.tsx    # Goals list component
│   ├── Header.tsx          # Header component
│   └── NewGoal.tsx         # Goal creation form
├── assets/                 # Images and static assets
├── App.tsx                 # Main app component
├── index.css               # Global styles
└── main.tsx                # App entry point
```

## Responsive Design

- **Desktop (>768px)**: Two-column layout with form on left, goals on right
- **Tablet (≤768px)**: Single column layout, stacked vertically
- **Mobile (≤480px)**: Full-width layout with page scrolling enabled
