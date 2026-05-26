## Integrate ACE logo + real Apex Team roster

Two assets to wire into the site: the official ACE logo and the full Apex Team org chart with real names.

### 1. Logo integration
- Save upload to `src/assets/ace-logo.png` and `public/favicon.png`.
- **Header**: replace text-only "ACE" with logo + wordmark (h ~28–32px).
- **Footer**: add logo above the wordmark.
- **Home hero**: subtle logo lockup above headline.
- **SEO**: wire logo as default `og:image` / `twitter:image` + favicon link in `__root.tsx`.
- **About page**: add "ACE — Alliance of Commerce and Entrepreneurship, Delhi Public School Dwarka" subtitle (from the org chart header) so the full club name is on record.

### 2. Apex Team roster (replaces placeholders in `src/lib/placeholders.ts`)

Structured into the existing Members page with clear hierarchy sections:

**Directors** — Anirudh Goyal · Jai Sehgal · Drishti Jain
**Joint Directors** — Ridhaan Malhotra · Jeevansh Grover
**Deputy Directors** — Naysa Grover · Anoushka Nandini

**Department Heads (6 departments, 3 members each):**
- **Finance** — Atharv Bansal, Manit Chopra, Tejasvir
- **Marketing** — Aadhya Manglani, Nayanika Bajaj, Sejal Nair
- **Entrepreneurship** — Mysha Moin, Yashika Oberoi, Sharanya Singh
- **Tech** — Shagun Bhadwar, Ashvik Gupta, Salome Tripathy
- **Media** — Aarush Goyal, Aaradhya Koslia, Armaan Nagpal
- **Hawkeye** — Anya Singh, Falak Khanna, Anika Nashier

### 3. Members page restructure (`src/routes/members.tsx`)
- Top section: **Leadership** — three tiers (Directors → Joint Directors → Deputy Directors), each rendered as cards with name + role.
- Below: **Departments** — 6 department blocks, each showing department name as a heading and the three members listed underneath.
- Keep the existing Modern Minimal styling (hairline borders, generous whitespace, monochrome).
- No photos for now (none provided) — clean typographic cards with initials monogram in the existing greyscale style.

### Out of scope
- Roles for individual department members (e.g. who is "Head" vs "Member") — listed as a flat trio per department since the chart doesn't distinguish. Tell me if there's a hierarchy within each department.
- Faculty / Alumni rosters — still placeholders until you share them.
- Photos of members.

Approve to implement.