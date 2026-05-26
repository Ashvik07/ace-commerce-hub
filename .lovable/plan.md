## Ace Commerce Club — Website Plan

A descriptive, informative site for your school's commerce club. Modern minimal aesthetic in black, white, and grey. Built across 10 routes with placeholder content you can swap later.

### Design direction
- **Palette**: pure white background, near-black text, layered greys for surfaces and dividers
- **Typography**: clean geometric sans (Inter for body, tighter display sans for headings)
- **Feel**: business-school polish — generous whitespace, sharp grid, subtle hairline borders, restrained motion
- **Motion**: scroll-triggered fade/slide on home montage (Zipline-style reveal), hover lifts on cards

### Pages (each its own route for SEO)

1. **Home (`/`)** — Hero with club name + tagline, animated scroll montage of past events, achievements counter strip, upcoming-events teaser, and an **email signup** (wired to Lovable Cloud) for updates and the ACEit issue
2. **About (`/about`)** — Vision, mission, story paragraphs + team photo placeholder
3. **Resources (`/resources`)** — "Check these out" grid: Mock Stock, Idea Pitching, M&A, Quiz, Crossword, Design
4. **Projects (`/projects`)** — Grid of competition projects with description + outcome
5. **Events (`/events`)** — Upcoming events list (date, title, description) + past events archive
6. **Members (`/members`)** — Grid of current members with photo + title
7. **Alumni (`/alumni`)** — Alumni cards by batch year (inspired by exunclan.com/alumni)
8. **Faculty (`/faculty`)** — Teachers with club role + email
9. **Contact (`/contact`)** — Contact form, location, social links (inspired by coreisus.com/contact)
10. **ACEit (`/aceit`)** — Quarterly issue showcase with case studies, achievements, recent events

Shared header with nav + footer on every route. Each route gets unique `<head>` metadata for SEO.

### Backend (Lovable Cloud)
- **`subscribers` table**: stores email signups (email, created_at) with RLS allowing public insert only
- Email form validates with Zod, inserts via server function, shows success toast

### Technical notes
- TanStack Start file-based routing in `src/routes/`
- Design tokens in `src/styles.css` (oklch B/W/grey scale)
- Reusable components: `Header`, `Footer`, `SectionHeading`, `MemberCard`, `EventCard`, `EmailSignup`
- All placeholder photos generated as neutral grey portraits/event shots
- Animations via Tailwind + Motion (lightweight)

### Out of scope (for now)
- Actual member/event content (placeholders only)
- ACEit PDF uploads / CMS
- Admin dashboard to manage signups (you'll export from Cloud)
