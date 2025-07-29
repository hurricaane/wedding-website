# Wedding Website - Nuxt 4 Migration

## Project Overview
Migration of Yannick & Louise wedding website from React/Vite to Nuxt 4 with TypeScript and TailwindCSS v4.

## Tech Stack
- **Framework**: Nuxt 4 (Vue 3 + SSR/SSG)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Package Manager**: npm/pnpm
- **Deployment**: Static generation (SSG)

## Project Requirements

### Core Features to Migrate
1. **Hero Section** - Wedding announcement with elegant design
2. **RSVP System** - Form with validation and submission
3. **FAQ Section** - Wedding information and logistics  
4. **Event Agenda** - Timeline and schedule
5. **Location Maps** - Google Maps integration for venues
6. **Question Form** - Guest inquiry system
7. **Navigation** - Multi-page routing with error handling

### Design System
- **Theme**: Elegant wedding (champagne, ivory, gold colors)
- **Typography**: Serif fonts for elegance
- **Components**: Custom UI components (migrated from shadcn/ui)
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

### Technical Requirements
- **TypeScript**: Strict mode enabled
- **Form Handling**: Robust validation with error states
- **State Management**: Pinia for complex state (if needed)
- **SEO**: Meta tags, OpenGraph, structured data
- **Performance**: Lazy loading, code splitting, image optimization
- **Accessibility**: WCAG 2.1 AA compliance
- **Internationalization**: French language support

### File Structure
```
/
├── assets/           # Images, fonts, global styles
├── components/       # Vue components
│   ├── ui/          # Reusable UI components
│   └── sections/    # Page sections (Hero, FAQ, etc.)
├── composables/     # Vue composables
├── layouts/         # Layout components
├── pages/           # Route pages
├── public/          # Static assets
├── server/          # API routes (if needed)
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checking

### Git Conventions
**IMPORTANT**: All commits MUST use the Conventional Commit format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code formatting (no logic changes)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependency updates
- `ci:` - CI/CD changes
- `build:` - Build system changes

**Examples:**
- `feat: add hero section component`
- `fix: resolve RSVP form validation issue`
- `docs: update README with deployment instructions`
- `style: format components with prettier`
- `refactor: migrate from react hooks to vue composables`
- `perf: optimize image loading with lazy loading`
- `chore: update dependencies to latest versions`

### Quality Standards
- **Code Quality**: ESLint + Prettier configuration
- **Type Safety**: Strict TypeScript with no any types
- **Testing**: Vitest for unit tests (if needed)
- **Performance**: Lighthouse score >90
- **Security**: No sensitive data exposure, secure external integrations

### Migration Notes
- Convert React components to Vue 3 Composition API
- Adapt React hooks to Vue composables
- Replace React Router with Nuxt routing
- Convert Tailwind classes to v4 syntax
- Implement Vue equivalents for React libraries

## Current Status
- [ ] Project initialization
- [ ] Base configuration setup
- [ ] Core components migration
- [ ] Styling system implementation
- [ ] Feature implementation
- [ ] Testing and optimization