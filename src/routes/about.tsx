import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { directors } from "@/lib/placeholders";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ACE" },
      { name: "description", content: "The story, vision, and leadership behind ACE — the school's commerce club." },
      { property: "og:title", content: "About — ACE" },
      { property: "og:description", content: "The story, vision, and leadership behind ACE." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About ACE"
        title="A club for students who take commerce seriously — without taking themselves too seriously."
        description="We started ACE as a small reading group and grew it into the school's busiest competition team, publication, and pitch lab."
      />

      <section className="container-page py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            ACE is the commerce club at our school. We meet every week to dissect company filings, run mock trading sessions, prepare for inter-school competitions, and write the ACEit quarterly.
          </p>
          <p>
            Our charter is simple: <strong>learn by doing.</strong> Every member runs at least one project a year — a research note, a pitch, an event, an issue. Theory shows up only when it earns its place.
          </p>
          <p>
            We're independent but supported. Faculty mentors guide us; alumni return to teach what they've learned in college and at work.
          </p>
        </div>
        <aside className="lg:col-span-5 space-y-6">
          <div className="border border-hairline p-6">
            <div className="eyebrow mb-3">Our vision</div>
            <p>To make commerce feel like a craft — something students can practice, ship, and be judged on.</p>
          </div>
          <div className="border border-hairline p-6">
            <div className="eyebrow mb-3">Our mission</div>
            <p>Run events and publications that meet a real standard, and graduate members who are ready for anything the world of business throws at them.</p>
          </div>
        </aside>
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20">
          <div className="eyebrow mb-3">The team</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">A photo, taken last spring.</h2>
          <div className="aspect-[16/10] overflow-hidden bg-surface-2 mb-12">
            <img src={teamImg} alt="ACE leadership team" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20">
          <div className="eyebrow mb-3">Leadership</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Directors & advisors</h2>
          <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {directors.map((d) => (
              <div key={d.name} className="bg-background p-8">
                <div className="eyebrow mb-3">{d.role}</div>
                <div className="font-display text-xl font-semibold">{d.name}</div>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
