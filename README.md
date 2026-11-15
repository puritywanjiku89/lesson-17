# CommunityHub - Lesson 18

## What I built
- Custom hooks: useToggle, useLocalStorage, useForm (plus useFetch from Lesson 17)
- Component library: Button, Input, Card, Modal (CSS Modules for Button)
- CreatePost form using useForm + useToggle
- Theme toggle that survives refresh (useLocalStorage)
- Modal with Escape to close, aria-live post list

## Accessibility Audit
- Before score: 72
- After score: 95
- Fixes: div onClick -> real button, placeholder -> real label, icon buttons got aria-label, focus-visible outline added, error color darkened to #b91c1c, modal role dialog

## How to run
npm install
npm run dev
