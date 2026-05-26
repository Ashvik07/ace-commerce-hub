// Centralized placeholder data — replace with real content later.

// Apex Team — ACE (Alliance of Commerce and Entrepreneurship), DPS Dwarka.
export const leadership = {
  directors: [
    { name: "Anirudh Goyal", role: "Director" },
    { name: "Jai Sehgal", role: "Director" },
    { name: "Drishti Jain", role: "Director" },
  ],
  jointDirectors: [
    { name: "Ridhaan Malhotra", role: "Joint Director" },
    { name: "Jeevansh Grover", role: "Joint Director" },
  ],
  deputyDirectors: [
    { name: "Naysa Grover", role: "Deputy Director" },
    { name: "Anoushka Nandini", role: "Deputy Director" },
  ],
};

export const departments = [
  { name: "Finance", members: ["Atharv Bansal", "Manit Chopra", "Tejasvir"] },
  { name: "Marketing", members: ["Aadhya Manglani", "Nayanika Bajaj", "Sejal Nair"] },
  { name: "Entrepreneurship", members: ["Mysha Moin", "Yashika Oberoi", "Sharanya Singh"] },
  { name: "Tech", members: ["Ashvik Gupta", "Shagun Bhadwar", "Salome Tripathy"] },
  { name: "Media", members: ["Aarush Goyal", "Aaradhya Koslia", "Armaan Nagpal"] },
  { name: "Hawkeye", members: ["Anya Singh", "Falak Khanna", "Anika Nashier"] },
];

// Flat list (kept for any consumers expecting `members`).
export const members = [
  ...leadership.directors,
  ...leadership.jointDirectors,
  ...leadership.deputyDirectors,
  ...departments.flatMap((d) =>
    d.members.map((name) => ({ name, role: `${d.name} Department` })),
  ),
];

export const directors = [
  { name: "Dr. Neha Bansal", role: "Director", note: "Guides club strategy and curriculum." },
  { name: "Mr. Rajat Khanna", role: "Faculty Advisor", note: "Mentor for finance and markets." },
  { name: "Ms. Pooja Sethi", role: "Department Head — Commerce", note: "Heads the commerce department." },
];

export const faculty = [
  { name: "Mr. Rajat Khanna", role: "Faculty Advisor", email: "rajat.khanna@school.edu" },
  { name: "Ms. Pooja Sethi", role: "Department Head — Commerce", email: "pooja.sethi@school.edu" },
  { name: "Dr. Neha Bansal", role: "Director", email: "neha.bansal@school.edu" },
  { name: "Mr. Sameer Gupta", role: "Mentor — Economics", email: "sameer.gupta@school.edu" },
];

export const events = [
  { date: "2026-07-12", title: "Mock Stock Championship", description: "A day-long trading simulation across 30+ teams." },
  { date: "2026-08-09", title: "ACE Idea Pitch", description: "Students pitch original startup ideas to a panel of mentors." },
  { date: "2026-09-20", title: "M&A Case Study Open", description: "Inter-school merger and acquisition strategy contest." },
  { date: "2026-10-15", title: "Commerce Quiz Night", description: "Trivia covering markets, history, and current affairs." },
];

export const pastEvents = [
  { date: "2026-03-04", title: "ACEit Quarterly Launch", description: "Unveiled our inaugural quarterly publication." },
  { date: "2026-01-22", title: "Stock Market Bootcamp", description: "3-day intensive on technical and fundamental analysis." },
  { date: "2025-11-18", title: "Inter-school Finance Olympiad", description: "Hosted teams from 12 partner schools." },
];

export const achievements = [
  { stat: "12+", label: "School competitions won" },
  { stat: "200+", label: "Active members across batches" },
  { stat: "8", label: "Quarterly ACEit issues published" },
  { stat: "25+", label: "Industry mentors engaged" },
];

export const projects = [
  { title: "MockEx Trading Platform", description: "An in-school simulated trading floor used by 30+ teams during the championship.", tag: "Build" },
  { title: "ACE Research Digest", description: "Monthly student-written briefings on macro trends and company analyses.", tag: "Publication" },
  { title: "Pitch Lab", description: "A peer-review workshop for refining business ideas before competition.", tag: "Workshop" },
  { title: "Founder Conversations", description: "A long-form interview series with school alumni who built companies.", tag: "Series" },
];

export const resources = [
  { title: "Mock Stock", description: "Rules, market mechanics, and team strategies that have worked at past championships." },
  { title: "Idea Pitching", description: "Frameworks for pitch decks, market sizing, and Q&A defense." },
  { title: "Mergers & Acquisitions", description: "Case method playbook with valuation models and synergy frameworks." },
  { title: "Commerce Quiz", description: "Curated question banks across markets, theory, and current affairs." },
  { title: "Crossword", description: "Themed crosswords covering commerce vocabulary and famous economists." },
  { title: "Design", description: "Brand kit, slide templates, and visual guidelines for ACE submissions." },
];

export const alumni = [
  { name: "Riya Sharma", year: "2024", now: "Economics @ LSE" },
  { name: "Aditya Menon", now: "Business @ NUS", year: "2024" },
  { name: "Sara D'Souza", year: "2023", now: "Founder, ledgerly.in" },
  { name: "Karan Bhatia", year: "2023", now: "Analyst @ Goldman Sachs" },
  { name: "Niharika Reddy", year: "2022", now: "Finance @ Wharton" },
  { name: "Devansh Arora", year: "2022", now: "Product @ Razorpay" },
  { name: "Tanvi Kulkarni", year: "2021", now: "Strategy @ Bain & Co." },
  { name: "Ishaan Malik", year: "2021", now: "MBA Candidate @ INSEAD" },
];

export const aceitIssues = [
  { issue: "Vol. 08", season: "Q2 2026", cover: "The Quiet Power of Index Funds", highlights: ["Case study: Zomato's path to profit", "Inside the Mock Stock Championship", "Alumni Q&A: Sara D'Souza"] },
  { issue: "Vol. 07", season: "Q1 2026", cover: "When Banks Break", highlights: ["SVB, one year later", "Student valuation: a Bengaluru café chain", "Reading list: Behavioural Finance"] },
  { issue: "Vol. 06", season: "Q4 2025", cover: "The India Decade", highlights: ["Manufacturing PLI explained", "Pitch Lab roundup", "Founder Conversation: ledgerly.in"] },
];
